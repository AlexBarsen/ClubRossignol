import Restaurant1 from "../img/rossi-1032.jpg";
import Restaurant2 from "../img/rossi-1033.jpg";
import Restaurant3 from "../img/rossi-1035.jpg";
import Restaurant4 from "../img/rossi-1025.jpg";
import Rental1 from "../img/rossi-1048.jpg";
import Rental2 from "../img/rossi-1050.jpg";
import Rental3 from "../img/rossi-1053.jpg";
import Rental4 from "../img/rossi-1050.jpg";
import Hotel1 from "../img/rossi-1001.jpg";
import Hotel2 from "../img/rossi-1014.jpg";
import Hotel3 from "../img/rossi-1008.jpg";

import Shop1 from "../img/rossi-1054.jpg";
import Shop2 from "../img/rossi-1058.jpg";
import Shop3 from "../img/rossi-1060.jpg";
import Shop4 from "../img/rossi-1057.jpg";

export const restaurant_section = {
  id: "restaurant",
  imgStart: false,
  headline: "Restaurant",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nihil nulla perferendis sit voluptates quam doloremque praesentium aliquam in? Facilis porro nostrum, blanditiis laborum quae et. Libero eaque iste distinctio ad inventore, quod blanditiis earum, porro repellendus consectetur modi cum et fugiat totam non pariatur labore harum tempore, voluptas expedita alias reiciendis dicta explicabo est? Odit, commodi doloribus qui possimus animi omnis totam obcaecati perferendis? Veritatis fugit impedit illum.",
  images: [Restaurant1, Restaurant2, Restaurant3, Restaurant4],
  buttonText: "Vezi Meniul",
  link: "/menu",
};

export const rental_section = {
  id: "rental",
  imgStart: true,
  headline: "Centru de inchirieri",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nihil nulla perferendis sit voluptates quam doloremque praesentium aliquam in? Facilis porro nostrum, blanditiis laborum quae et. Libero eaque iste distinctio ad inventore, quod blanditiis earum, porro repellendus consectetur modi cum et fugiat totam non pariatur labore harum tempore, voluptas expedita alias reiciendis dicta explicabo est? Odit, commodi doloribus qui possimus animi omnis totam obcaecati perferendis? Veritatis fugit impedit illum.",
  images: [Rental1, Rental2, Rental3, Rental4],
  buttonText: "Inchiriza Online",
  link: "/rental",
};

export const hotel_section = {
  id: "hotel",
  imgStart: false,
  headline: "Cazare",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nihil nulla perferendis sit voluptates quam doloremque praesentium aliquam in? Facilis porro nostrum, blanditiis laborum quae et. Libero eaque iste distinctio ad inventore, quod blanditiis earum, porro repellendus consectetur modi cum et fugiat totam non pariatur labore harum tempore, voluptas expedita alias reiciendis dicta explicabo est? Odit, commodi doloribus qui possimus animi omnis totam obcaecati perferendis? Veritatis fugit impedit illum.",
  images: [Hotel1, Hotel2, Hotel3],
  buttonText: "Catre booking",
  link: "https://www.booking.com/hotel/ro/club-rossignol-brasov.ro.html?aid=318615;label=New_Romanian_RO_RO_27026376865-jVsIlP4zXhNaIzBkAG9XkAS102047685745%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666555%3Adsa-140566008985%3Alp1011804%3Ali%3Adec%3Adm;sid=3d0f1cf4af2c931c465b3c73a1caedb3;dest_id=900040727;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=0;hpos=0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1639513410;srpvid=89578f60d9600197;type=total;ucfs=1&#hotelTmpl",
};

export const shop_section = {
  id: "shop",
  imgStart: true,
  headline: "Magazin",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nihil nulla perferendis sit voluptates quam doloremque praesentium aliquam in? Facilis porro nostrum, blanditiis laborum quae et. Libero eaque iste distinctio ad inventore, quod blanditiis earum, porro repellendus consectetur modi cum et fugiat totam non pariatur labore harum tempore, voluptas expedita alias reiciendis dicta explicabo est? Odit, commodi doloribus qui possimus animi omnis totam obcaecati perferendis? Veritatis fugit impedit illum.",
  images: [Shop1, Shop2, Shop3, Shop4],
  buttonText: "Catre Magazinul Online",
  link: "https://www.tracksport.ro/",
};
