import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context";

export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { cart, increment, decrement, removeItem } = value;
              return (
                <>
                  {cart.map(item => {
                    return (
                      <CartItem
                        key={item.id}
                        cartItem={item}
                        increment={increment}
                        decrement={decrement}
                        removeItem={removeItem}
                      />
                    );
                  })}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
