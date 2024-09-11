import React from "react";
import "./main.css";
import products from "../../products";
import { useState } from "react";

export const Main = ({ recordsPerPage }) => {
  const [sProducts, setProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = n;
  const lastIndexOfRecord = currentPage * recordsPerPage;
  const firstIndexOfRecord = lastIndexOfRecord - recordsPerPage;
  const currentRecords = sProducts.slice(firstIndexOfRecord, lastIndexOfRecord);
  const pageNumbers = Math.ceil(products.length / recordsPerPage);
  const number = [...Array(pageNumbers + 1).keys()].slice(1);
  let handleSearch = (e) => {
    let search = e.target.value;
    let newProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(newProducts);
  };
  // let handleChange = (e, index) => {
  //   console.log(sProducts);
  //   console.log(e.target.value);
  //   const checked = e.target.checked;
  //   console.log(checked, "checked");
  //   if (checked == true) {
  //     let newP = products.filter((product) => product.type === index);
  //     setProducts([...newProducts, ...newP]);
  //     newProducts = [...newProducts, ...newP];
  //   } else {
  //     newProducts = newProducts.filter((product) => product.type !== index);
  //     if (newProducts.length == 0) {
  //       setProducts(products);
  //     } else {
  //       setProducts(newProducts);
  //     }
  //   }
  // };
  // let handleMaterial = (e, index) => {
  //   console.log(sProducts);
  //   console.log(e.target.value);
  //   const checked = e.target.checked;
  //   console.log(checked, "checked");
  //   if (checked == true) {
  //     let newP = products.filter((product) => product.material === index);
  //     setProducts([...newProducts, ...newP]);
  //     newProducts = [...newProducts, ...newP];
  //   } else {
  //     newProducts = newProducts.filter((product) => product.material !== index);
  //     if (newProducts.length == 0) {
  //       setProducts(products);
  //     } else {
  //       setProducts(newProducts);
  //     }
  //   }
  // };
  const displayrating = (rating) => {
    const filledStars = Array(rating).fill(<i className="fas fa-star"></i>);
    const emptyStars = Array(5 - rating).fill(<i className="far fa-star"></i>);
    return (
      <div className="rating">
        {filledStars}
        {emptyStars}
      </div>
    );
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };
  const paginate = (num) => {
    setCurrentPage(num);
  };

  return (
    <div className="productsList container-fluid border-0 p-0">
      <div className="products container-fluid border-0 ps-0 ">
        <div className="productItem ">
          <div className="search-container">
            <i class="fas fa-search"></i>{" "}
            <input
              type="text"
              onChange={(e) => handleSearch(e)}
              className="search-box form-control "
              placeholder="Search Dining  Room"
            />
          </div>
        </div>
        {currentRecords.map((product) => (
          <div data-testid="prod" key={product.id} className="productItem ">
            <a href={`/product/${product.id}`} className="productItem  ">
              <div className="containerImg">
                <img
                  className="productImg"
                  src={product.img[0]}
                  alt="product"
                />
                <div className="whitespace"></div>
              </div>

              <div className="product-body d-flex justify-content-lg-between ">
                <div className="productTitle">
                  <b>{product.title}</b> <br />
                  <p className="type">{product.type}</p>
                  <div className="rating mt-2">
                    {displayrating(product.rating)}
                  </div>
                </div>
                <div className="ship p-1 ms-3">
                  <p className="mt-2">
                    ${product.actualPrice.toLocaleString()}
                  </p>
                  <i class="cart fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <nav>
        <ul className="pagination">
          {currentPage > 1 && (
            <li className="page-item">
              <a className="page-link" href="#" onClick={prevPage}>
                &lt;
              </a>
            </li>
          )}
          {number.map((num) => (
            <li className={`page-item ${currentPage === num ? "active" : ""}`}>
              <a className="page-link" href="#" onClick={() => paginate(num)}>
                {num}
              </a>
            </li>
          ))}
          {currentPage < pageNumbers && (
            <li className="page-item">
              <a className="page-link" href="#" onClick={nextPage}>
                &gt;
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
