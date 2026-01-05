import ProductList from "../components/ProductList";
const products =
[
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999.99,
    rating: 4.8,
    description: "The latest Apple smartphone with a titanium frame and A17 Pro chip.",
    image: "https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1698312385020/1698312393141/1698312393141_600x450.png?1766622756000"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199.99,
    rating: 4.7,
    description: "Powerful Android phone with 200MP camera and built-in S Pen.",
    image: "https://m.media-amazon.com/images/I/71iBKcLHXFL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 1099.00,
    rating: 4.9,
    description: "Thinnest and lightest Apple laptop with the powerful M2 chip.",
    image: "https://fcracer.com/wp-content/uploads/2022/08/GFXS8814-JPEG-blog-1.jpg"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 349.99,
    rating: 4.8,
    description: "Premium noise-canceling wireless headphones with superior sound quality.",
    image: "https://m.media-amazon.com/images/I/71O2H1OWvuL.jpg"
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 399.00,
    rating: 4.6,
    description: "Smartwatch with advanced health sensors and S9 SiP performance.",
    image: "https://shop.switch.com.my/cdn/shop/files/Apple_Watch_Series_9_GPS_41mm_Silver_Aluminum_Winter_Blue_Sport_Loop_PDP_Image_Position-1__GBEN.jpg?v=1717695640"
  },
  {
    id: 6,
    name: "Nintendo Switch OLED",
    price: 349.00,
    rating: 4.8,
    description: "Handheld gaming console with a vibrant 7-inch OLED screen.",
    image: "https://www.engo.com.tr/idea/gb/81/myassets/products/879/nintendo-switch-oled-7-inc-ekran-koruyucu-nano-oyun-konsolu-68412.jpeg?revision=1765280181"
  },
  {
    id: 7,
    name: "Dell XPS 13",
    price: 949.00,
    rating: 4.5,
    description: "High-end Windows laptop with nearly borderless InfinityEdge display.",
    image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/Dell-XPS-13-9340-laptop.JPG"
  },
  {
    id: 8,
    name: "GoPro HERO12 Black",
    price: 399.99,
    rating: 4.4,
    description: "Rugged and waterproof action camera with HDR video support.",
    image: "https://i.ytimg.com/vi/UZ5G0tVwBkI/maxresdefault.jpg"
  },
  {
    id: 9,
    name: "Kindle Paperwhite",
    price: 139.99,
    rating: 4.7,
    description: "E-reader with 6.8-inch display and adjustable warm light.",
    image: "https://hips.hearstapps.com/hmg-prod/images/img-8358-6849b8e8bd2d4.jpg?crop=1xw:1xh;center,top&resize=1200:*"
  },
  {
    id: 10,
    name: "Bose SoundLink Revolve+",
    price: 299.00,
    rating: 4.6,
    description: "Powerful 360-degree wireless Bluetooth speaker.",
    image: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_images/soundlink_revolve_ready_to_go_1x1.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg"
  },
  {
    id: 11,
    name: "iPad Pro 11-inch",
    price: 799.00,
    rating: 4.9,
    description: "Professional tablet with M2 chip and ProMotion display technology.",
    image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111974_ipad-pro-11-2018.png"
  },
  {
    id: 12,
    name: "Logitech MX Master 3S",
    price: 99.00,
    rating: 4.8,
    description: "Performance wireless mouse with quiet clicks and 8K DPI.",
    image: "https://m.media-amazon.com/images/I/61TU7cMHepL._AC_SL1500_.jpg"
  },
  {
    id: 13,
    name: "ASUS ROG Swift Monitor",
    price: 499.00,
    rating: 4.7,
    description: "27-inch gaming monitor with 144Hz refresh rate and G-Sync.",
    image: "https://dlcdnwebimgs.asus.com/files/media/0FC65822-E16E-414C-A35C-A1B5F36B2550/v1/img/bg-intro.jpg"
  },
  {
    id: 14,
    name: "Dyson V15 Detect",
    price: 749.00,
    rating: 4.5,
    description: "Powerful cordless vacuum with laser dust detection technology.",
    image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/products/floorcare/sticks/v15-detect/pdp/fullwidth/SV22HEPA_prussian_blue_LB_PDP_full_width.jpg?$responsive$&cropPathE=desktop&fit=stretch,1&wid=1920"
  },
  {
    id: 15,
    name: "Canon EOS R50",
    price: 679.00,
    rating: 4.6,
    description: "Compact mirrorless camera for high-quality photos and 4K video.",
    image: "https://fotografium.com/canon-eos-r50-content-creator-kit-aynasiz-slr-fotograf-makineleri-canon-64978-20-O.webp"
  },
  {
    id: 16,
    name: "Amazon Echo Show 10",
    price: 249.99,
    rating: 4.4,
    description: "Smart display with motion that follows you during video calls.",
    image: "https://www.techhive.com/wp-content/uploads/2023/04/echo-show-10-charcoal-ui-100859585-orig-1.jpg?quality=50&strip=all"
  },
  {
    id: 17,
    name: "Razer BlackWidow V4",
    price: 169.99,
    rating: 4.7,
    description: "Mechanical gaming keyboard with green switches and RGB lighting.",
    image: "https://assets2.razerzone.com/images/pnx.assets/f4e4b271435e1b02702e6012ed1f72b7/razer-blackwidow-v4-macro-keys-desktop.webp"
  },
  {
    id: 18,
    name: "DJI Mini 3 Pro",
    price: 759.00,
    rating: 4.8,
    description: "Lightweight drone with 4K/60fps video and obstacle sensing.",
    image: "https://m.media-amazon.com/images/I/51QIRyL+TKL._AC_UF350,350_QL80_.jpg"
  },
  {
    id: 19,
    name: "Fitbit Charge 6",
    price: 159.95,
    rating: 4.3,
    description: "Advanced fitness tracker with heart rate and stress monitoring.",
    image: "https://www.cnet.com/a/img/resize/9ccd86f29301eb2eaf80b3d1efd7413c65996716/hub/2023/09/27/6ac323dd-4138-438f-9ebf-16df163d7ddf/fitbitcharge6.png?auto=webp&fit=crop&height=675&width=1200"
  },
  {
    id: 20,
    name: "Steam Deck",
    price: 399.00,
    rating: 4.8,
    description: "Handheld PC gaming device powered by SteamOS.",
    image: "https://www.itopya.com/blog/wp-content/uploads/2023/08/4077531-steam-deck-1089x720.jpg"
  }
];

const Home = () => {
    return(
        <div className="container mt-4">
            <h2 className="mb-4 mt-5 text-center">Our Products</h2>
            <ProductList products={products} />
        </div>
    );
};
export default Home;