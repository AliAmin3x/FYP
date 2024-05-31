import React from "react";
import Layout from "../../Components/layout/Layout";

function Cart() {
  return (
    <Layout>
      <div>
        <h1 className="font-roboto text-6xl px-52 pt-6 font-bold text-white">
          Cart
        </h1>
      </div>
      <div className=" px-64 pt-6">
        <div className="bg-lightgray rounded-2xl w-full my-10 h-72 text-white flex items-center gap-5 p-5">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/656/869/201/call-of-duty-wallpaper-preview.jpg"
            alt="Call of Duty 4"
            className=" w-56 h-full rounded-2xl"
          />
          <div className="w-full h-full flex flex-col justify-between ">
            <div>
              <h2 className="font-roboto text-2xl pt-5 font-bold text-white">
                Call of Duty 4
              </h2>
              <p className="font-roboto text-lg pt-5 font-medium text-white opacity-60">
                a civil war breaks out in Russia between its government and
                Ultranationalists seeking to return Russia to its Soviet-era
                glory. Meanwhile, a separatist group led by Khaled Al-Asad, who
                holds anti-Western views, seizes power in an unnamed country in
                the Middle East through a coup d'état.
              </p>
            </div>
            <button className="text-black h-10 w-52 font-roboto font-bold bg-white hover:bg-buttongray2 rounded-lg transition duration-300 ease-in-out">
              Remove from the list
            </button>
          </div>
        </div>
        <h3 className="font-roboto text-lg pt-2 font-bold text-white">
          Your Total = 1000/- PKR
        </h3>
        <div>
          <input
            type="text"
            placeholder="Your Redeem Code"
            className="mt-5 w-1/3 h-20 focus:outline-none rounded-lg bg-lightgray text-white text-lg text-center placeholder-gray-300"
          />
					
        </div>
        <div className="py-4">
          <div className="h-10 w-36 bg-white flex justify-center items-center rounded-lg font-bold">
            <button className="focus:outline-none py-10 text-black h-10 w-36 flex justify-center items-center ">
              Redeem
            </button>
          </div>
        </div>
        <div className="h-10 w-48 bg-cosmicpurple flex justify-center items-center rounded-lg font-bold">
          <button className="focus:outline-none py-10 text-white h-14 w-48 flex justify-center items-center ">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
