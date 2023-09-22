"use client";
import React, { useState } from "react";
import Image from "next/image";

function Card({
  infoCard,
  fontSizeTitle,
  isEditing,
  editedTitle,
  onAddToCart,
}) {
  const { image, description, price, amount } = infoCard;

  const [quantity, setQuantity] = useState(amount);

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    onAddToCart(price);
  };

  return (
    <article className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-black bg-white">
      <div className="relative h-40 mt-12 mx-8 mb-4">
        <Image
          src={image}
          alt={infoCard.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="px-6 py-4 mb-3">
        <h2
          className="font-bold mb-10 mt-2"
          style={{ fontSize: `${fontSizeTitle}px` }}
        >
          {isEditing ? editedTitle : infoCard.title}
        </h2>
        <div className="flex items-center mb-4">
          <p className="text-black font-bold text-base">${price.toFixed(2)}</p>
          <p className="border border-gray-500 py-1 px-4 ml-3 text-xs text-gray-500">
            {quantity}
          </p>
        </div>
        <p className="text-gray-500 text-sm leading-5">{description}</p>
      </div>

      <div className="items-center flex flex-col mb-6">
        <button
          onClick={handleIncrementQuantity}
          className="bg-buttonCart text border border-black text-black py-2 px-4 "
        >
          Add to Cart
        </button>
        <a href="#" className="my-2 mb-4 underline text-black text-lg mt-2">
          Learn More
        </a>
      </div>
    </article>
  );
}

export default Card;
