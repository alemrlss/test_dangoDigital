"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import cardsInfo from "../data/cardsInfo";
import Panel from "@/components/Panel";

export default function Home() {
  const [fontSizeTitle, setFontSizeTitle] = useState(20);
  const [selectedCardTitle, setSelectedCardTitle] = useState(
    cardsInfo[0].title
  );
  const [editedTitle, setEditedTitle] = useState(cardsInfo[0].title);

  // Estado para la cantidad total de productos en el carrito
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Estado para el precio total de los productos en el carrito
  const [totalPrice, setTotalPrice] = useState(0);

  // Función para actualizar la cantidad total y el precio total cuando se agrega un producto al carrito
  const handleAddToCart = (price) => {
    setTotalQuantity(totalQuantity + 1);
    setTotalPrice(totalPrice + price);
  };

  return (
    <main className="h-screen p-4">
      <Panel
        fontSizeTitle={fontSizeTitle}
        setFontSizeTitle={setFontSizeTitle}
        cardsInfo={cardsInfo}
        setSelectedCardTitle={setSelectedCardTitle}
        setEditedTitle={setEditedTitle}
        selectedCardTitle={selectedCardTitle}
        editedTitle={editedTitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-14">
        {cardsInfo.map((card) => (
          <Card
            key={card.id}
            infoCard={card}
            fontSizeTitle={fontSizeTitle}
            isEditing={card.title === selectedCardTitle}
            editedTitle={editedTitle}
            onAddToCart={handleAddToCart} // Pasa la función para agregar al carrito
          />
        ))}
      </div>
      <div className="mt-4 text-2xl text-center font-bold mb-10">
        Total Sum of Product Quantities: {totalQuantity}
        <br />
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </main>
  );
}
