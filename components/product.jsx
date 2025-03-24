import React from "react";
import Card from "./Card";

const Product = () => {
  return (
    <div className="px-12 lg:px-30">
      <h1 className="capitalize py-8 text-4xl">what we offers</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Product;
