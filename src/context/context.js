import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
// import { items } from "./productData";
import { client } from "./contentful";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    isSidebarOpen: false,
    isCartOpen: false,
    cartItems: 0,
    cartSubtotal: 0,
    cartTotal: 0,
    cartTax: 0,
    links: linkData,
    cart: [],
    socialIcons: socialData,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    category: "all",
    shipping: false
  };

  componentDidMount() {
    //from contentful
    // this.setProducts(items);
    client
      .getEntries({ content_type: "storeProducts" })
      .then(response => this.setProducts(response.items))
      .catch(console.error);
  }

  setProducts = items => {
    let storeProducts = items.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    //get max price
    let maxPrice = Math.max(...storeProducts.map(item => item.price));
    this.setState(
      {
        filteredProducts: storeProducts,
        storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        max: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };

  //get cart from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  //get product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  //get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };

  //add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubtotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  //sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  //add to cart
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = {
        ...tempItem,
        count: 1,
        total
      };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return {
          cart: tempCart
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
  };

  toggleSidebar = () => {
    this.setState(prevState => {
      return {
        isSidebarOpen: !prevState.isSidebarOpen
      };
    });
  };

  toggleCart = () => {
    this.setState(prevState => {
      return {
        isCartOpen: !prevState.isCartOpen
      };
    });
  };

  closeCart = () => {
    this.setState({
      isCartOpen: false
    });
  };

  openCart = () => {
    this.setState({
      isCartOpen: true
    });
  };

  //Cart functionality
  increment = id => {
    let tempCart = [...this.state.cart];
    let tempItem = tempCart.find(item => item.id === id);
    tempItem.count += 1;
    tempItem.total = tempItem.count * tempItem.price;
    tempItem.total = parseFloat(tempItem.total.toFixed(2));
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    let tempItem = tempCart.find(item => item.id === id);
    tempItem.count -= 1;
    if (tempItem.count === 0) {
      this.removeItem(id);
    } else {
      tempItem.total = tempItem.count * tempItem.price;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  //handle filtering
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({ [name]: value }, this.sortData);
  };

  //sort data
  sortData = () => {
    const {
      storeProducts,
      price,
      company,
      category,
      shipping,
      search
    } = this.state;
    const tempPrice = parseInt(price);
    let tempProducts = [...storeProducts];
    //filter based on company value
    if (company !== "all") {
      tempProducts = tempProducts.filter(item => item.company === company);
    }
    // filter based on category value
    if (category !== "all") {
      tempProducts = tempProducts.filter(item => item.category === category);
    }
    //filter based on price value
    tempProducts = tempProducts.filter(item => {
      return item.price <= tempPrice;
    });
    //filter based on shipping value

    if (shipping) {
      tempProducts = tempProducts.filter(item => item.freeShipping === true);
    }
    //filter based on search value
    if (search.length > 0) {
      tempProducts = tempProducts.filter(item => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        return tempSearch === tempTitle;
      });
    }
    this.setState({
      filteredProducts: tempProducts
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          closeCart: this.closeCart,
          openCart: this.openCart,
          toggleCart: this.toggleCart,
          toggleSidebar: this.toggleSidebar,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
