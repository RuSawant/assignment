import React from "react";
import "./item.css";
import products from "../../products";
function Item(id) {
  id = id.id;
  let product = products.find((product) => product.id == id);
  console.log(product.img[0]);
  console.log(product.img[1]);
  console.log(product.img[2]);

  return (
    <div className="item container-fluid row  mx-0 ps-1">
      <div className="productdetailImg col-lg-8 justify-content-center  ">
        <div
          id="carouselExampleControls"
          class="carousel slide w-50 mx-auto d-flex "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <img src={product.img[0]} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={product.img[1]} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={product.img[2]} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carouselbutton carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carouselbutton carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="productDetails col-lg-4">
        <div className="name">
          <p className="title mb-1 pb-0">{product.title}</p>
          <small className="type mb-3">{product.type}</small>
        </div>
        <div className="details">
          <small className="description">{product.desc}</small>
          <div>
            <p className="type mb-2">Price per Unit</p>
            <div class=" buy d-flex gap-2">
              <h2>${product.actualPrice.toLocaleString()}</h2>
              <button class="btn btn-dark px-3 py-1 buybtn" type="button">
                Buy Now
              </button>
              <i class=" cart fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
