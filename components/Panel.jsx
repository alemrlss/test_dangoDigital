import React from "react";

function Panel({
  fontSizeTitle,
  setFontSizeTitle,
  cardsInfo,
  setSelectedCardTitle,
  setEditedTitle,
  selectedCardTitle,
  editedTitle,
}) {
  const handleFontSizeTitleChange = (e) => {
    const newSize = parseInt(e.target.value);
    setFontSizeTitle(newSize);
  };

  const handleSelectChange = (e) => {
    const selectedTitle = e.target.value;
    setSelectedCardTitle(selectedTitle);
    setEditedTitle(selectedTitle);
  };

  return (
    <div className="bg-gray-100 p-3 mb-4 rounded shadow-md">
      <div className="mb-4">
        <label
          htmlFor="fontSizeRange"
          className="block text-gray-700 font-bold mb-2"
        >
          Font Size: {fontSizeTitle}px
        </label>
        <input
          type="range"
          id="fontSizeRange"
          min="10"
          max="100"
          step="1"
          value={fontSizeTitle}
          onChange={handleFontSizeTitleChange}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="cardSelector"
          className="block text-gray-700 font-bold mb-2"
        >
          Select a Card:
        </label>
        <select
          id="cardSelector"
          value={selectedCardTitle}
          onChange={handleSelectChange}
          className="w-full border border-gray-400 rounded py-2 px-3"
        >
          {cardsInfo.map((card) => (
            <option key={card.id} value={card.title}>
              ({card.id}) - {card.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="editedTitleInput"
          className="block text-gray-700 font-bold mb-2"
        >
          Title to Edit:
        </label>
        <input
          type="text"
          id="editedTitleInput"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="w-full border border-gray-400 rounded py-2 px-3"
        />
      </div>
    </div>
  );
}

export default Panel;
