"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [image, setImage] = useState(null)
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: "",
    rating: "",
    category: "",
   
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setProduct({...product, [name]: value})
  };
  const changeImage = (e) =>{
    const file = e.target.files[0]
    console.log(file)
    setImage(file)
  }
  const submitData = async(e) => {
    e.preventDefault();
    try {
      const data = new FormData()
      data.append('image', image)
      data.append('title', product.title)
      data.append('desc', product.desc)
      data.append('price', product.price)
      data.append('category', product.category)
      data.append('rating', product.rating)
      
      
      const result = await axios.post('http://localhost:7000/api/v1/products', data)
      toast.success("Product upload successfully")
      setProduct({
        title: "",
        desc: "",
        price: "",
        category: "",
        rating: "",
        image: ""

      })
      setImage(null)
    } catch (error) {
      toast.error("An error occur while adding your product" , error)
    }
  };
  return (
    <div className="mx-auto w-full md:w-1/2 px-5 ">
      <form onSubmit={submitData}>
        <div className="my-3 grid md:grid-cols-2 gap-10 ">
          <div>
            <label
              htmlFor="title"
              className="w-full text-base block md:text-lg text-gray-500 font-medium"
            >
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter your title name"
              onChange={changeValue}
              value={product.title}
              className="w-full text-base outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="w-full text-base block md:text-lg text-gray-500 font-medium"
            >
              Price:
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter your price"
              onChange={changeValue}
              value={product.price}
              className="w-full   outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="w-full text-base  md:text-lg text-gray-500 font-medium"
            >
              Rating:
            </label>
            <input
              type="text"
              name="rating"
              id="rating"
              placeholder="Add your rating"
              onChange={changeValue}
              value={product.rating}
            
              className="w-full   outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="file"
              className="w-full text-base  md:text-lg text-gray-500 font-medium"
            >
              Choose your file:
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={changeImage}
              accept="iamge/*"
              
            />
          </div>
          <div>
          <select className="border-2 px-2 py-1 border-gray-400 border-opacity-60" onChange={changeValue} value={product.category} name="category">
         
          <option value="">Select category</option>
              <option value="Shoes">Shoes</option>
              <option value="Men shoes">Men Shoes</option>
              <option value="Electronic">Electronic</option>
              <option value="Devices">Devices</option>
              <option value="Clothes">Clothes</option>
              <option value="kid play">Kid play</option>
              <option value="baby clothes">baby Clothes</option>
              <option value="women shoes">women shoes</option>
              <option value="Men shirts">Men shirts</option>
              <option value="women dress">Women shirts</option>
              <option value="mechanical">mechanical</option>
              <option value="bottle">bottles</option>
         </select>
          </div>
         
        </div>
        
        <div className="block w-full">
          <label
            htmlFor="desc"
            className="w-full text-base  md:w-fit md:text-lg text-gray-500 font-medium"
          >
            Description:
          </label>
          <textarea
            cols={4}
            rows={5}
            name="desc"
            id="desc"
            placeholder="Enter your description"
            onChange={changeValue}
            value={product.desc}
            className="w-full   outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
          ></textarea>
        </div>
        <div className="text-center my-4"> 

        <button className="w-full text-center bg-green-500  px-2 py-3 rounded-lg md:w-fit md:px-10 font-medium text-white hover:bg-green-600 hover:duration-500 hover:text-gray-200 md:mx-auto ">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
