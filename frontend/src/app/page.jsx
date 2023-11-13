import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="scroll-smooth">
        <div className=" bg-[url('/hero.jpg')] object-cover md:h-[700px] w-auto h-[400px] bg-cover bg-no-repeat relative">
          <div className="absolute md:top-48 md:left-48 top-32 left-20 ">
            <p className="md:text-xl text-sm md:mb-10 mb-5">New Arrivals</p>
            <h2 className="font-bold md:my-10 my-3 text-6xl">Coat Hoody</h2>
            <button className="hover:text-red-500 border-b-2 border-solid duration-500 border-black md:text-2xl">
              Discover Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-5/6 mx-auto  my-20">
        <div className="block  w-full  md:mx-auto md:flex md:gap-10">
          <div className="relative">
            <img
              src="/section101.jpg"
              alt="Product image"
              className="hover:scale-110 md:w-[500px] w-full md:h-auto object-cover h-[300px] duration-300"
            />
            <div className="absolute  top-10 left-5 ">
              <h4 className="md:text-3xl text-4xl  font-semibold">
                Clothing.No18
              </h4>
              <p className="text-gray-400">Sale Off 20% All Store</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/section103.jpg"
              alt="Product image"
              className="hover:scale-110 md:w-[800px] object-cover h-auto w-full my-2  md:h-[440px] duration-300"
            />
            <div className="absolute top-10 left-5 ">
              <h4 className="md:text-3xl text-4xl font-semibold">
                Men’s Summer Sneaker
              </h4>
              <p className="text-gray-400">Big Sale Off This Week</p>
            </div>
          </div>
          <div className="relative block">
            <img
              src="/section102.jpg"
              alt="Product image"
              className="hover:scale-110 w-full  md:w-[500px] md:h-auto object-cover h-[300px]"
            />
            <div className="block absolute top-10 left-5 text-center ">
              <h4 className="md:text-3xl text-4xl font-semibold">Bag.No1</h4>
              <p className="text-gray-400">Big Sale No Limited</p>
            </div>
          </div>
        </div>
        <div className="my-16  block md:grid md:grid-cols-2 md:gap-5">
          <div className="mb-5 md:mb-0">
            <img src="/new2.jpg" className="w-full  object-contain" />
          </div>
          <div className="p-10  bg-gray-400  bg-opacity-10 ">
            <div className="bg-white h-full p-16  text-black flex flex-col gap-10 items-center        justify-center text-center">
              <Link
                href="#"
                className="md:text-3xl text-normal font-semibold hover:text-red-500"
              >
                Aesthetica Cosmetics
              </Link>
              <div className="flex gap-2 text-orange-500">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className="font-bold md:text-2xl text-sm">
                $39.00{" "}
                <span className="line-through text-sm text-gray-400 text-opacity-60">
                  $60.00
                </span>
              </p>
              <p className="md:w-[500px] w-full md:text-xl text-sm">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
              <button className="bg-red-500 rounded-lg px-2 py-3 hover:text-white hover:bg-black text-white duration-500 text-2xl">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        {/* New arrivals  */}

        <div className="my-10">
          <div className="text-center mb-10">
            <h1 className="md:text-6xl text-md mb-3 font-semibold">
              New Arrivals
            </h1>
            <p className="text-gray-500 md:text-xl">
              Consequat magna massa vel suspendisse morbi aliquam faucibus
              ligula ante ipsum ac nulla.
            </p>
          </div>
          <div className="block w-full mb-3 md:grid md:grid-cols-4 md:gap-5">
            <div className="relative group mb-3">
              <img src="/new1.jpg" className="object-cover w-full" />
              <div className=" hidden group-hover:block group-hover:duration-700 object-cover w-full absolute top-0">
                <div className="">
                  <img src="/new1hover.jpg" className="object-cover w-full" />
                  <div className="absolute top-0  translate-y-96 text-lg font-bold py-5 px-5 shadow-md bg-white flex justify-between w-full ">
                    <button>+ Add to cart</button>
                    <div>
                      <i className="fa-regular fa-eye pr-2"></i>
                      <i className="fa-regular fa-heart pr-2"></i>
                      <i className="fa-solid fa-video"></i>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl my-5 hover:text-red-500 duration-300">
                11. Product with video
              </h3>
              <div className="block md:flex md:justify-between items-center">
                <p className="font-bold md:text-2xl text-sm my-2">
                  $39.00{" "}
                  <span className="line-through text-sm text-gray-400 text-opacity-60">
                    $60.00
                  </span>
                </p>
                <div className="flex gap-2 text-orange-500">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
            <div className="relative group mb-3">
              <img src="/new1.jpg" className="object-cover w-full" />
              <div className=" hidden group-hover:block group-hover:duration-700 object-cover w-full absolute top-0">
                <div className="">
                  <img src="/new1hover.jpg" className="object-cover w-full" />
                  <div className="absolute top-0  translate-y-96 text-lg font-bold py-5 px-5 shadow-md bg-white flex justify-between w-full ">
                    <button>+ Add to cart</button>
                    <div>
                      <i className="fa-regular fa-eye pr-2"></i>
                      <i className="fa-regular fa-heart pr-2"></i>
                      <i className="fa-solid fa-video"></i>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl my-5 hover:text-red-500 duration-300">
                11. Product with video
              </h3>
              <div className="block md:flex md:justify-between items-center">
                <p className="font-bold md:text-2xl text-sm my-2">
                  $39.00{" "}
                  <span className="line-through text-sm text-gray-400 text-opacity-60">
                    $60.00
                  </span>
                </p>
                <div className="flex gap-2 text-orange-500">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
            <div className="relative group mb-3">
              <img src="/new2.jpg" className="object-cover w-full" />
              <div className=" hidden group-hover:block group-hover:duration-700 object-cover w-full absolute top-0">
                <div className="">
                  <img src="/new1hover.jpg" className="object-cover w-full" />
                  <div className="absolute top-0  translate-y-96 text-lg font-bold py-5 px-5 shadow-md bg-white flex justify-between w-full ">
                    <button>+ Add to cart</button>
                    <div>
                      <i className="fa-regular fa-eye pr-2"></i>
                      <i className="fa-regular fa-heart pr-2"></i>
                      <i className="fa-solid fa-video"></i>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl my-5 hover:text-red-500 duration-300">
                11. Product with video
              </h3>
              <div className="block md:flex md:justify-between items-center">
                <p className="font-bold md:text-2xl text-sm my-2">
                  $39.00{" "}
                  <span className="line-through text-sm text-gray-400 text-opacity-60">
                    $60.00
                  </span>
                </p>
                <div className="flex gap-2 text-orange-500">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
            <div className="relative group mb-3">
              <img src="/new1.jpg" className="object-cover w-full" />
              <div className=" hidden group-hover:block group-hover:duration-700 object-cover w-full absolute top-0">
                <div className="">
                  <img src="/new1hover.jpg" className="object-cover w-full" />
                  <div className="absolute top-0  translate-y-96 text-lg font-bold py-5 px-5 shadow-md bg-white flex justify-between w-full ">
                    <button>+ Add to cart</button>
                    <div>
                      <i className="fa-regular fa-eye pr-2"></i>
                      <i className="fa-regular fa-heart pr-2"></i>
                      <i className="fa-solid fa-video"></i>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl my-5 hover:text-red-500 duration-300">
                11. Product with video
              </h3>
              <div className="block md:flex md:justify-between items-center">
                <p className="font-bold md:text-2xl text-sm my-2">
                  $39.00{" "}
                  <span className="line-through text-sm text-gray-400 text-opacity-60">
                    $60.00
                  </span>
                </p>
                <div className="flex gap-2 text-orange-500">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="bg-[url('/10019.jpg')] text-white h-[600px] text-center bg-no-repeat bg-cover bg-center my-10 w-full flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">Join Our Newsletter Now</h2>
          <h2 className="text-4xl font-semibold">Up to 70% OFF. All Sales are final</h2>
          <p className="text-md">Subcribe to Beeta mailing list to receive update on new arrivals, special offers and other discount information.</p>
          <div className="flex  items-center relative">

          <input type="search" placeholder="Search here"  className="w-full py-3 mt-2 px-3 rounded-md outline-none text-black shadow-sm"/>
          <button className="bg-black text-white py-3 rounded-md px-4 absolute right-0 mt-2">Search</button>
          </div>
        </div>
        </div>
    </>
  );
}
