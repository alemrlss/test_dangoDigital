const getRandomImageNumber = () => Math.floor(Math.random() * 1000) + 1;

const cardsInfo = [
  {
    id: 1,
    image: `https://picsum.photos/id/10/200/300`,
    title: "Tourmaline & Eucalyptus Bar Soap",
    price: 12.0,
    amount: 0,
    description:
      "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
  },

  {
    id: 2,
    image: `https://picsum.photos/id/${getRandomImageNumber()}/200/300`,
    title: "Tourmaline & Argan Oil Bar Soap",
    price: 20.0,
    amount: 0,
    description:
      "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
  },
  {
    id: 3,
    image: `https://picsum.photos/id/${getRandomImageNumber()}/200/300`,
    title: "Tourmaline & Tea Tree Bar Soap",
    price: 28.0,
    amount: 0,
    description:
      "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
  },
  {
    id: 4,
    image: `https://picsum.photos/id/${getRandomImageNumber()}/200/300`,
    title: "Tourmaline Unscented Bar Soap",
    price: 52.0,
    amount: 0,
    description:
      "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
  },
  {
    id: 5,
    image: `https://picsum.photos/id/${getRandomImageNumber()}/200/300`,
    title: "Tourmaline & Tea Tree Bar Soap",
    price: 7.0,
    amount: 0,
    description:
      "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
  },
  {
    id: 6,
    image: `https://picsum.photos/id/${getRandomImageNumber()}/200/300`,
    title: "Tourmaline Unscented Bar Soap",
    price: 18.0,
    amount: 0,
    description:
      "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
  },
  //Si es necesario agregar otra card. Agregar al final de la lista de Objetos.
];

export default cardsInfo;
