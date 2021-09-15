import RestaurantImage from "../components/Landing/feature-images/restaurant.jpg";
import RentalImage from "../components/Landing/feature-images/rental.JPG";
import HotelImage from "../images/room1.jpg";
import ShopImage from "../components/Landing/feature-images/shop.jpg";

export const restaurantSection = {
  id: "restaurant",
  topLine: "Restaurant",
  headline: "Mancare a la carte si Pizza",
  description1:
    "La Club Rossignol se poate servi masa in restaurant, pe terasa sau pe terasa acoperita.",
  description2:
    "In meniul nostru se regasesc mancaruri precum supe, ciorbe, salate, mancaruri gatite cat si pizza pe cuptor cu lemne.",
  buttonLabel: "Meniu",
  image: RestaurantImage,
  // route: "menu",
  modal: true,
};

export const rentalSection = {
  id: "rental",
  topLine: "Rental",
  headline: "Inchiriere echipamente de ski si snowboard",
  description1:
    "Se pot inchira echipament de complete pentru ski si snowboard (Clapari, Skiuri, Bete, Boots Snowboard, Snowboard si casti) penntru adulti cat si pentru cei mici",
  description2:
    "Pentru a evita asteptarea indelungata pentru a inchiria echipamente va incurajam sa folositi aplicatia noastra de rental pentru a rezervare un echipament direct online",
  buttonLabel: "Aplicatie Rental",
  image: RentalImage,
  route: "rental",
};

export const hotelSection = {
  id: "hotel",
  topLine: "Cazare",
  headline: "Cazeaza-te la baza partiei",
  description1:
    "Dispunem de 6 camere, fiecare dinte acestea putand gazdui 2/4 persoane. Fiecare camera beneficiaza de baie proprie ",
  description2: "Micul dejun este inclus in pret",
  buttonLabel: "Catre Booking",
  image: HotelImage,
  link: "https://bit.ly/3k9qaRd",
};

export const shopSection = {
  id: "shop",
  topLine: "Magazin",
  headline: "Echipamente sportive si produse specifice iernii",
  description1:
    "La baza cladirii avem si un magazin cu imbracaminte spefica iernii si echipamente de sporturi montane ",
  description2: "Produsele se pot comanda si online de pe siteul nostru.",
  buttonLabel: "Magazin online",
  image: ShopImage,
  link: "https://bit.ly/394Zfj0",
};
