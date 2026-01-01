import ProductList from "../components/ProductList";
const products = [
    
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest.",
  rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBHDytJp64PrOzjCQIbh6BwOqaX8xoaiuxA&s"
  },
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve.",
     rating: 4.8,
    image: "https://www.trueclassictees.com/cdn/shop/files/Seasonal-Tall-Pima-Crew-Neck-4-Pack_42b679e4-845c-4449-96d1-7a32336d8048.jpg?v=1751595536"
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter.",
     rating: 3.1,
    image: "https://tiimg.tistatic.com/fp/1/008/185/full-sleeves-washable-regular-fit-winter-wear-mens-cotton-jacket--869.jpg"
  },
  {
    id: 4,
    name: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice.",
     rating: 2.7,
    image: "https://images-cdn.ubuy.co.in/653ce93d7787f362df3cfd28-xtapan-men-39-s-casual-slim-fit-shirt.jpg"
  },
  {
    id: 5,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
     rating: 4.9,
    image: "https://jrdunn.com/cdn/shop/files/bms65115221bspfr.jpg?v=1753197861"
  },
  {
    id: 6,
    name: "Solid Gold Petite Micropave ",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    rating: 4.1,
    image: "https://ion.bluenile.com/sets/Jewelry/Photoshoot/Bluenile/BrioPackshotBox/Rings/502740/502740_M1_RND_DIM_wht_0100CT_W_Box8_003_1600X1600.jpg"
  },
  {
    id: 7,
    name: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
     rating: 3.2,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/373881784/JI/VR/FI/201863206/white-gold-princess-cut-diamond-ring-500x500.jpeg"
  },
  {
    id: 8,
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
     rating: 4.3,
    image: "https://i.etsystatic.com/23845671/r/il/b4cc6e/4233794520/il_1080xN.4233794520_g2uk.jpg"
  },
  {
    id: 9,
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers.",
     rating: 3.5,
    image: "https://cdn.dsmcdn.com/mnresize/400/-/ty1405/product/media/images/prod/QC/20240707/05/1dd171cd-9b38-33ff-abd3-2c4479190358/1_org_zoom.jpg"
  },
  {
    id: 10,
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response.",
     rating: 2.7,
    image: "https://productimages.hepsiburada.net/s/777/222-222/110000798112079.jpg"
  },
  {
    id: 11,
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description: "3D NAND flash are applied to deliver high transfer speeds.",
     rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1wb7U5dsAKrF1YMsseIZ5JHPgAEp-SWCaw&s"
  },
  {
    id: 12,
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy setup.",
     rating: 3.7,
    image: "https://m.media-amazon.com/images/S/aplus-media/vc/b426131c-2206-4ddc-a864-72d22388b9bf._CR0,0,800,600_PT0_SX800__.jpg"
  },
  {
    id: 13,
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display.",
     rating: 4.6,
    image: "https://m.media-amazon.com/images/I/71ebs9LTVtL._AC_.jpg"
  },
  {
    id: 14,
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.99,
    description: "49 inch super ultra wide 32:9 curved gaming monitor.",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/51KbLogzW+L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 15,
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note: The Jackets is US standard size, Please choose size as your usual wear.",
     rating: 2.7,
    image: "https://m.media-amazon.com/images/I/81UeDzPFe0L._AC_UY1000_.jpg"
  },
  {
    id: 16,
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE (shell) 100% POLYESTER (lining).",
     rating: 4.5,
    image: "https://m.media-amazon.com/images/I/41%2Br0%2B1LFLL.__AC_SR166,182___.jpg"
  },
  {
    id: 17,
    name: "Rainy Night Women Windbreaker",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear.",
     rating: 3.9,
    image: "https://www.joma-sport.com/dw/image/v2/BFRV_PRD/on/demandware.static/-/Sites-joma-masterCatalog/default/dw2570866a/images/medium/902042.200_1.jpg?sw=900&sh=900&sm=fit"
  },
  {
    id: 18,
    name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported.",
     rating: 3.7,
    image: "https://images-na.ssl-images-amazon.com/images/I/81gX8dbbPbL.jpg"
  },
  {
    id: 19,
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, Lightweight, roomy and highly breathable.",
     rating: 4.3,
    image: "https://m.media-amazon.com/images/I/41MQ3S4BboL.jpg"
  },
  {
    id: 20,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print.",
     rating: 4.9,
    image: "https://m.media-amazon.com/images/I/813F4iAnSDS._AC_SL1500_.jpg"
  }

];

const Home = () => {
    return(
        <div className="container mt-4">
            <h2>Our Products</h2>
            <ProductList products={products} />
        </div>
    );
};
export default Home;