import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function FilterProducts() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          min,
          max,
          company,
          category,
          price,
          shipping,
          handleChange,
          storeProducts
        } = value;

        let companies = new Set();
        let categories = new Set();
        categories.add("all");
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }
        for (let product in storeProducts) {
          categories.add(storeProducts[product]["category"]);
        }
        companies = [...companies];
        categories = [...categories];
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/** text search */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/** END OF text search */}
                {/** company search */}

                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    onChange={handleChange}
                    value={company}
                    className="filter-item"
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/** END OF company search */}

                {/** category search */}
                <div>
                  <label htmlFor="category">category</label>
                  <select
                    name="category"
                    id="category"
                    onChange={handleChange}
                    value={category}
                    className="filter-item"
                  >
                    {categories.map((category, index) => {
                      return (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/** END OF category search */}

                {/** price range search */}

                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price: <span>${price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max + 1}
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/** END OF price range search */}
                {/** free shipping search */}

                <div>
                  <label htmlFor="shippping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
                {/** END OF free shipping search */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
