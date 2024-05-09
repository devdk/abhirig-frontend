import React, { useState } from "react";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import { useParams } from "react-router-dom";
import { RiStarFill } from "@remixicon/react";

const ShopDetail = ({ shops }) => {
  const { id } = useParams();
  const shop = shops.data.find((shop) => shop.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    `https://source.unsplash.com/random/400x400?sig=1`
  ); // State for the URL of the main product image

  if (!shop) {
    return <p>Shop post not found for ID: {id}</p>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const totalPrice = shop.attributes.productPrice * quantity;
    alert(`Total price: ₹${totalPrice}`);
  };

  const handleImageClick = (index) => {
    setMainImage(`https://source.unsplash.com/random/400x400?sig=${index}`);
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="md:w-4/5 mx-auto flex flex-wrap">
            <div className="w-full flex-col md:w-1/3 flex justify-center items-center p-4">
              <img
                alt="productImg"
                className="w-3/5 md:w-64 h-auto object-cover object-center rounded"
                src={mainImage}
              />
              <div className="flex justify-between mt-4 p-6">
                {[1, 2, 3].map((index) => (
                  <img
                    key={index}
                    alt={`p${index}`}
                    className="w-1/5 h-auto object-cover object-center rounded cursor-pointer"
                    src={`https://source.unsplash.com/random/400x400?sig=${index}`}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </div>
            <div className="md:w-2/3 w-full flex flex-col justify-center md:pl-10">
              <h1 className="text-gray-900 text-2xl md:text-4xl tracking-tighter uppercase title-font font-medium mb-1">
                {shop.attributes.productName}
              </h1>
              <h2 className="text-lg font-semibold text-gray-500 tracking-widest capitalize">
                {shop.attributes.productCategory}
              </h2>
              <div className="flex flex-col gap-4 mb-4">
                <div className="mt-2 gap-1 rating flex" title="Product Rating">
                  {Array.from({
                    length: shop.attributes.productRating,
                  }).map((_, index) => (
                    <RiStarFill
                      key={index}
                      size={20}
                      color="orange"
                      className="my-icon hover:cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
                    />
                  ))}
                </div>
                <span className="title-font font-medium md:text-4xl text-2xl text-gray-900">
                  ₹{shop.attributes.productPrice}
                </span>
              </div>
              <p className="leading-relaxed text-justify">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-4 justify-between items-baseline gap-4">
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 text-gray-800 rounded-l px-4 py-2"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="title-font font-medium text-xl text-gray-900 px-4">
                    {quantity}
                  </span>
                  <button
                    className="bg-gray-200 text-gray-800 rounded-r px-4 py-2"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="CartBtn mt-2" onClick={addToCart}>
                  <span className="IconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      fill="rgb(255, 255, 255)"
                      className="cart"
                      color="white"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c-2.2 11.3-12.1 19.5-23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </span>
                  <p className="cartText">Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
};

export default ShopDetail;
