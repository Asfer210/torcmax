import logoAsset from "@/assets/torqmax-logo.png";
import redBottle from "@/assets/premium.png";
import blueBottle from "@/assets/premium.png";
import esterBottle from "@/assets/premium.png";
import supremeBottle from "@/assets/premium.png";
import scootBottle from "@/assets/premium.png";

export const site = {
  name: "TorqMax",
  tagline: "Power • Performance • Protection",
  phone: "+91 85472 09583",
  phoneRaw: "+918547209583",
  email: "tormax@gmail.com",
  address: "5th Main Road, M S Ramaiah Enclave, Tumkur Road, NH-4, Nagasandra, Bengaluru, Karnataka 560073",
  location: "Bengaluru, Karnataka, India",
  logo: logoAsset,
};

export type Product = {
  slug: string;
  name: string;
  variant: string;
  grade: string;
  spec: string;
  size: string;
  engine: string;
  color: "red" | "blue" | "gold" | "orange" | "silver";
  image: string;
  tagline: string;
  features: string[];
  price: number;
};

export const products: Product[] = [
  {
    slug: "torqmax-20w40-sn",
    name: "TorqMax Premium 4T",
    variant: "SN Grade",
    grade: "20W-40",
    spec: "API SN | JASO MA2",
    size: "1 L",
    engine: "4T Petrol Engines",
    color: "red",
    image: redBottle,
    tagline: "Top-tier protection for modern engines",
    price: 415,
    features: [
      "Highest API SN performance category",
      "Superior wear & deposit protection",
      "Enhanced throttle response",
      "Ideal for BS6-compliant bikes",
    ],
  },
  {
    slug: "torqmax-20w40-sm",
    name: "TorqMax Advance 4T",
    variant: "SM Grade",
    grade: "20W-40",
    spec: "API SM | JASO MA2",
    size: "1 L",
    engine: "4T Petrol Engines",
    color: "blue",
    image: blueBottle,
    tagline: "Balanced performance for everyday riding",
    price: 399,
    features: [
      "API SM certified formulation",
      "Excellent thermal stability",
      "Smooth gear shifts",
      "Reduces engine noise & vibration",
    ],
  },
  {
    slug: "torqmax-20w40-sl",
    name: "TorqMax Classic 4T",
    variant: "SL Grade",
    grade: "20W-40",
    spec: "API SL | JASO MA2",
    size: "1 L",
    engine: "4T Petrol Engines",
    color: "orange",
    image: supremeBottle,
    tagline: "Dependable protection at everyday value",
    price: 385,
    features: [
      "API SL certified",
      "Reliable anti-wear performance",
      "Consistent viscosity across temperatures",
      "Trusted daily-commute grade",
    ],
  },
  {
    slug: "torqmax-10w30-sn",
    name: "TorqMax Scoot 10W-30",
    variant: "SN Grade",
    grade: "10W-30",
    spec: "API SN | JASO MB",
    size: "800 ml",
    engine: "Automatic Scooters",
    color: "blue",
    image: scootBottle,
    tagline: "Semi-synthetic scooter oil",
    price: 349,
    features: [
      "Optimised for auto-transmission scooters",
      "Smoother acceleration",
      "Reduces vibration & noise",
      "Cleaner engine internals",
    ],
  },
  {
    slug: "torqmax-20w50-sn",
    name: "TorqMax EsterMax 20W-50",
    variant: "SN Grade",
    grade: "20W-50",
    spec: "API SN | JASO MA2",
    size: "1 L",
    engine: "4T High-Load Engines",
    color: "gold",
    image: esterBottle,
    tagline: "Premium ester-fortified performance",
    price: 469,
    features: [
      "Ester-fortified base oil",
      "Superior wear protection at high loads",
      "Excellent oxidation stability",
      "Ideal for high-mileage engines",
    ],
  },
];