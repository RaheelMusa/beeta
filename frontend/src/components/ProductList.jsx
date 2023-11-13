"use client";
import axios from "axios"; 
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Category from "./Category";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState("");
  const [pageSize, setPageSize] = useState(8);
  const [totalPages, setTotalpages] = useState(1);
  const [category, setCategory] = useState("");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const handleCategoryChanged = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleRatingChange = (selectRating) => {
    setRating(selectRating);
  };
  const fetchProduct = async () => {
    const params = { page, pageSize, category };
    if (rating) {
      params.rating = rating;
    }
    const data = await axios.get(`http://localhost:7000/api/v1/products`, {
      params,
    });
    console.log(data.data.user);
    setProduct(data.data.user);
    setTotalpages(data.data.totalPages);
  };

  const removeProduct = async (_id) => {
    await axios.delete(`http://localhost:7000/api/v1/product/${_id}`);
    const dltProduct = product.filter((productList) => productList._id !== _id);
    setProduct(dltProduct);
  };
  useEffect(() => {
    fetchProduct();
  }, [pageSize, rating, page, category ]);
  return (
    <>
      <div className="flex items-center justify-between px-5">
        <p>Total products: {product.length}</p>

        <Link
          href="/products/create"
          className="px-3 py-2 bg-blue-400 rounded my-5 ml-10 text-white hover:duration-500 hover:bg-blue-600 "
        >
          Add new product
        </Link>
      </div>
      <div className="flex items-center justify-center my-3">
        <label>Rating:</label>
        <input
          type="text"
          className="outline-none w-[50px] px-2 shadow-md border-2 border-black border-opacity-30"
          value={rating}
          onChange={(e) => handleRatingChange(e.target.value)}
        />
        <p className="ml-6">Page: {page}</p>
      </div>
      <div>
        <div className="float-left">
          <Category onCategoryChanged={ handleCategoryChanged } category= { category } />
          
          
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
          {product.map((productList) => {
            return (
              <div
                key={productList._id}
                className="border p-5 flex flex-col gap-3"
              >
                {true ? (
                  <img
                    src={productList.image}
                    className="w-auto hover:scale-105 hover:duration-500 md:h-[300px] h-full object-cover object-center block "
                  ></img>
                ) : (
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/424x264"
                  ></img>
                )}
                <p className="text-sm text-gray-400">{productList.category}</p>
                <h2 className="text-base md:text-2xl font-semibold hover:text-red-400 cursor-pointer w-fit">
                  {productList.title}
                </h2>
                <p className="text-base md:text-lg">
                  {productList.desc}
                </p>

                <p className="text-base font-semibold md:text-xl">
                  price:{productList.price}$
                </p>
                <div className="flex flex-wrap justify-between">
                  <p>Rating: {productList.rating}</p>
                  <button
                    onClick={() => removeProduct(productList._id)}
                    className="w-fit hover:text-red-500 cursor-pointer"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
                <button className="bg-green-500 rounded text-white font-medium hover:bg-green-600 py-3">
                  Add to cart{" "}
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center my-3">
          {page === 1 ? (
            <>
              {" "}
              <button disabled={page === 1} className="mr-2 hidden">
                Previous ({!page ? "" : page - 1})
              </button>{" "}
            </>
          ) : (
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="bg-gray-200 mr-2 px-3 py-2 rounded hover:bg-blue-300 active:bg-blue-500 focus:bg-blue-300"
            >
              Previous ({!page ? "" : page - 1})
            </button>
          )}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="bg-gray-200 px-3 py-2 rounded hover:bg-blue-300 active:bg-blue-500 focus:bg-blue-300"
          >
            Next ({page})
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductList;
