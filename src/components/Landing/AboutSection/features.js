// import RestaurantIcon from "../../assets/svg/feature-icons/dish.svg";
// import PizzaIcon from "../../assets/svg/feature-icons/pizza.svg";
// import TerraceIcon from "../../assets/svg/feature-icons/cocktail.svg";
// import ApresSkiIcon from "../../assets/svg/feature-icons/confetti.svg";
// import RentIcon from "../../assets/svg/feature-icons/skiing.svg";
// import HotelIcon from "../../assets/svg/feature-icons/bed.svg";

import RestaurantImage from "../feature-images/restaurant.jpg";
import PizzaImage from "../feature-images/pizza.jpeg";
import TerraceImage from "../feature-images/terrace.jpg";
import ShopImage from "../feature-images/shop.jpg";
import RentalImage from "../feature-images/rental.JPG";
import HotelImage from "../feature-images/hotel.jpg";

const FEATURES_DATA = [
  {
    id: 1,
    // icon: RestaurantIcon,
    image: RestaurantImage,
    name: "Restaurant",
    description:
      "Te asteptam la noi in Restaurant pentru a servi o masa copioasa dupa ski.",
  },
  {
    id: 2,
    // icon: PizzaIcon,
    image: PizzaImage,
    name: "Pizza pe cuptor cu lemne",
    description:
      "Facem pizza pe cuptor cu lemne pentru ati servi o adevarata bunatate atunci cand te intorci obosit de pe partie.",
  },
  {
    id: 3,
    // icon: TerraceIcon,
    image: TerraceImage,
    name: "Terasa si Apres Ski",
    description:
      "Te asteptam pe terasa noastra in aer liber sau acoperita, und in weekend se tine petreceri de tip Apres Ski",
  },
  {
    id: 4,
    // icon: ApresSkiIcon,
    image: ShopImage,
    name: "Magazin",
    description:
      "Sub restaurant se afla si un magazin cu articole sportive speicifice iernii",
  },
  {
    id: 5,
    // icon: RentIcon,
    image: RentalImage,
    name: "Centru de Inchireri",
    description:
      "De la noi poti inchiria echipamente de Ski cat si de Snowboard.",
  },
  {
    id: 6,
    // icon: HotelIcon,
    image: HotelImage,
    name: "Cazare",
    description:
      "Dispunem de 6 camere, fiecare cu constand din 2 paturi duble pentru ati oferi ocazie de a fi primul pe partie.",
  },
];

export default FEATURES_DATA;
