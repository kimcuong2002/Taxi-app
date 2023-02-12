import React from "react";
import "./Product.css";

const Product = ({ image, name, className, title }) => {
  return (
    <div className={className}>
      <img src={image} />
      <div className="name">{name}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Product;
