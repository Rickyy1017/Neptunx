import lgLogo from "@/assets/partners/lg.svg";
import hisenseLogo from "@/assets/partners/hisense.svg";
import panasonicLogo from "@/assets/partners/panasonic.svg";
import mideaLogo from "@/assets/partners/midea.svg";

import lgFridge from "@/assets/official-products/lg-gc-x257cses.jpg";
import lgTopFridge from "@/assets/official-products/lg-gn-a702hlhu.jpg";
import lgWasher from "@/assets/official-products/lg-f4v5rgp2t.jpg";
import lgDishwasher from "@/assets/official-products/lg-dfb512fp.jpg";
import lgMicrowave from "@/assets/official-products/lg-ms3032jas.jpg";
import lgTv from "@/assets/official-products/lg-oled77g56la.jpg";
import lgSoundbar from "@/assets/official-products/lg-sc9s.jpg";
import hisenseFridge from "@/assets/official-products/hisense-h820fsb-imv.jpg";
import hisenseWasher from "@/assets/official-products/hisense-wf3i1145bb.jpg";
import hisenseWasherDryer from "@/assets/official-products/hisense-wd3s1042bb.jpg";
import hisenseDishwasher from "@/assets/official-products/hisense-h15dtg.jpg";
import hisenseAc from "@/assets/official-products/hisense-as12.jpg";
import hisenseTv from "@/assets/official-products/hisense-65u7s.jpg";
import panasonicPurifier from "@/assets/official-products/panasonic-f-vxv70a.png";
import panasonicBlender from "@/assets/official-products/panasonic-mx-mg5351.png";
import panasonicMicrowave from "@/assets/official-products/panasonic-nn-st65qb.png";
import panasonicGrill from "@/assets/official-products/panasonic-nn-gt65qb.jpg";
import mideaMultiDoor from "@/assets/official-products/midea-mdrf632fig46d.webp";
import mideaFrenchDoor from "@/assets/official-products/midea-mrf23i7ast.webp";
import mideaAirFryer from "@/assets/official-products/midea-met26c4ast.webp";
import mideaWindowAc from "@/assets/official-products/midea-maw08v1ywt-s.webp";
import mideaUAc from "@/assets/official-products/midea-maw12v1qwt.webp";

export type Category =
  | "Air conditioners"
  | "Refrigerators & freezers"
  | "Washing & drying"
  | "Kitchen appliances"
  | "TV & audio"
  | "Home comfort & care";

export type Product = {
  model: string;
  name: string;
  category: Category;
  spec: string;
  price: number;
  image: string;
  sourcePage: string;
};

export type Brand = {
  slug: string;
  name: string;
  logo: string;
  tagline: string;
  blurb: string;
  products: Product[];
};

function product(
  model: string,
  name: string,
  category: Category,
  spec: string,
  price: number,
  image: string,
  sourcePage: string,
): Product {
  return { model, name, category, spec, price, image, sourcePage };
}

export const naira = (n: number) => `NGN ${n.toLocaleString("en-NG")}`;

export const brands: Brand[] = [
  {
    slug: "lg",
    name: "LG",
    logo: lgLogo,
    tagline: "Smart appliances and premium home entertainment",
    blurb: "Genuine LG models sourced to order, with Lagos delivery, installation and after-sales support from Neptunx.",
    products: [
      product("GC-X257CSES", "674L InstaView Side-by-Side Refrigerator", "Refrigerators & freezers", "InstaView Door-in-Door, UVnano, Inverter Linear Compressor", 3980000, lgFridge, "https://www.lg.com/africa/refrigerators/lg-gc-x257cses"),
      product("GN-A702HLHU", "Top Freezer Refrigerator", "Refrigerators & freezers", "Door Cooling+, Hygiene Fresh+, Smart Inverter Compressor", 1680000, lgTopFridge, "https://www.lg.com/africa/refrigerators/lg-GN-A702HLHU"),
      product("F4V5RGP2T", "10.5kg / 7kg Front Load Washer Dryer", "Washing & drying", "AI DD, Steam, ThinQ connected controls", 1490000, lgWasher, "https://www.lg.com/africa/washing-machines/lg-f4v5rgp2t"),
      product("DFB512FP", "QuadWash Dishwasher", "Kitchen appliances", "14 place settings, Inverter Direct Drive, EasyRack Plus", 1350000, lgDishwasher, "https://www.lg.com/africa/dishwashers/lg-DFB512FP"),
      product("MS3032JAS", "30L NeoChef Microwave", "Kitchen appliances", "Smart Inverter, EasyClean interior, stable turntable", 285000, lgMicrowave, "https://www.lg.com/africa/cooking-appliances/lg-ms3032jas"),
      product("OLED77G56LA", "77 inch OLED evo G5 Smart TV", "TV & audio", "4K OLED evo, alpha 11 AI processor, webOS", 8900000, lgTv, "https://www.lg.com/africa/tvs/lg-oled77g56la"),
      product("SC9S", "3.1.3 Channel Soundbar", "TV & audio", "Dolby Atmos, DTS:X, wireless subwoofer", 985000, lgSoundbar, "https://www.lg.com/africa/audio/lg-sc9s"),
    ],
  },
  {
    slug: "hisense",
    name: "Hisense",
    logo: hisenseLogo,
    tagline: "Cooling, laundry and entertainment for modern homes",
    blurb: "Current Hisense home appliances selected from the manufacturer catalogue and supplied with Neptunx installation support.",
    products: [
      product("AS-12UW4SGEDC00", "Inverter Split Air Conditioner", "Air conditioners", "12,000 BTU, inverter cooling, smart operation", 620000, hisenseAc, "https://hisense.co.za/products/hisense-as-12uw4sgedc00-air-conditioner/"),
      product("H820FSB-IMV", "601L PureView Multi-Door Refrigerator", "Refrigerators & freezers", "PureView door, Refresh Hub Pro, triple temperature zones", 4250000, hisenseFridge, "https://hisense.co.za/products/hisense-h820fsb-imv-pureview-series-601l-multi-door-refrigerator/"),
      product("WF3I1145BB", "11kg Premium Black Front Loader", "Washing & drying", "1400rpm, ConnectLife, Hygiene Guard, steam", 1280000, hisenseWasher, "https://hisense.co.za/products/hisense-wf3i1145bb-11kg-premium-black-front-loader/"),
      product("WD3S1042BB", "10kg / 6kg Washer Dryer", "Washing & drying", "Inverter motor, Pure Steam, 16 programmes", 1420000, hisenseWasherDryer, "https://hisense.co.za/products/hisense-wd3s1042bb-10kg-6kg-front-loader-washer-dryer/"),
      product("H15DTG", "15 Place Dishwasher", "Kitchen appliances", "Freestanding, adjustable baskets, delay start", 945000, hisenseDishwasher, "https://hisense.co.za/products/hisense-h15dtg-15-place-dishwasher/"),
      product("65U7S", "65 inch Real MiniLED Smart TV", "TV & audio", "Hi-QLED MiniLED, native 144Hz, Dolby Vision IQ", 2450000, hisenseTv, "https://hisense.co.za/products/hisense-real-miniled-65u7s-65-144hz-240hsr-tv/"),
    ],
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    logo: panasonicLogo,
    tagline: "Thoughtful Japanese engineering for the home",
    blurb: "Verified Panasonic small appliances and air-care products, sourced to order and supported by Neptunx in Lagos.",
    products: [
      product("F-VXV70A", "nanoe X Air Purifier", "Home comfort & care", "HEPA filtration, humidifying function, nanoe X", 785000, panasonicPurifier, "https://store.apac.panasonic.com/my/f-vxv70awm.html"),
      product("MX-MG5351WSK", "700W Glass Jug Blender", "Kitchen appliances", "Ultimate PowerBlade, wet and dry mill, ice crushing", 165000, panasonicBlender, "https://store.apac.panasonic.com/my/mx-mg5351wsk.html"),
      product("NN-ST65QBMPQ", "32L Inverter Solo Microwave", "Kitchen appliances", "1000W inverter, 20 auto menus, 340mm turntable", 325000, panasonicMicrowave, "https://store.apac.panasonic.com/my/nn-st65qbmpq.html"),
      product("NN-GT65QBMPQ", "31L Combi Grill Microwave", "Kitchen appliances", "Inverter microwave, grill, 22 auto programmes", 475000, panasonicGrill, "https://store.apac.panasonic.com/my/nn-gt65qbmpq.html"),
    ],
  },
  {
    slug: "midea",
    name: "Midea",
    logo: mideaLogo,
    tagline: "Practical connected appliances for everyday living",
    blurb: "Verified Midea cooling, refrigeration and countertop appliances, sourced to order with Neptunx delivery and installation.",
    products: [
      product("MAW08V1YWT-S", "8,000 BTU SmartCool Window AC", "Air conditioners", "Wi-Fi controls, Energy Star, washable filter", 495000, mideaWindowAc, "https://www.midea.com/us/store/cooling-and-heating/window-air-conditioners/DOE-Window-Air-Conditioner-SmartCool.maw08v1ywt-s"),
      product("MAW12V1QWT", "12,000 BTU U-Shaped Smart Window AC", "Air conditioners", "Inverter cooling, Wi-Fi controls, quiet U-shaped design", 745000, mideaUAc, "https://www.midea.com/us/store/cooling-and-heating/window-air-conditioners/Midea-8,000-BTU-DOE-U-Shaped-Smart-Window-Air-Conditioner.maw12v1qwt"),
      product("MDRF632FIG46D", "Smart Multi-Door Refrigerator", "Refrigerators & freezers", "Multi-door storage, connected controls, inverter cooling", 3250000, mideaMultiDoor, "https://www.midea.com/me/refrigerators/multi-door-refrigerator/midea-multi-door-refrigerator-smart-home-connect.mdrf632fig46d"),
      product("MRF23I7AST", "Counter-Depth French Door Refrigerator", "Refrigerators & freezers", "Ice maker, counter-depth body, adjustable storage", 2850000, mideaFrenchDoor, "https://www.midea.com/ca/refrigeration/french-door-refrigerators/counter-depth-french-door-refrigerator-with-ice-maker.mrf23i7ast"),
      product("MET26C4AST", "Flexify Pro Air Fryer Oven", "Kitchen appliances", "26.4qt capacity, air fry, roast, bake and toast", 385000, mideaAirFryer, "https://www.midea.com/us/store/small-kitchen-appliances/toaster-ovens/flexify-pro-air-fryer-oven.met26c4ast"),
    ],
  },
];

export function getBrand(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}