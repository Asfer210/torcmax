import logoAsset from "@/assets/torqmax-logo.jpeg.asset.json";
import redBottle from "@/assets/torqmax-red-cutout.png.asset.json";
import blueBottle from "@/assets/torqmax-blue-cutout.png.asset.json";
import esterBottle from "@/assets/torqmax-ester-20w50.png.asset.json";
import crystaBottle from "@/assets/torqmax-crysta-20w40.png.asset.json";
import sprintBottle from "@/assets/torqmax-sprint-20w40.png.asset.json";
import supremeBottle from "@/assets/torqmax-supreme-20w40.png.asset.json";
import gearBottle from "@/assets/torqmax-gear-ep90.png.asset.json";
import synthBottle from "@/assets/torqmax-synth-5w30.png.asset.json";
import scootBottle from "@/assets/torqmax-scoot-10w30.png.asset.json";

export const site = {
  name: "TorqMax",
  tagline: "Power • Performance • Protection",
  phone: "+91 79973 84737",
  phoneRaw: "+917997384737",
  email: "asfer@gmail.com",
  location: "Palakkad, Kerala, India",
  logo: logoAsset.url,
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
};

export const products: Product[] = [
  {
    slug: "torqmax-premium-20w40",
    name: "TorqMax Premium",
    variant: "Crimson Edition",
    grade: "20W-40",
    spec: "API SL | JASO MA2",
    size: "1 L",
    engine: "4T Petrol Engines",
    color: "red",
    image: redBottle.url,
    tagline: "Driven by Performance",
    features: [
      "Ultimate engine protection",
      "Enhanced throttle response",
      "Smoother, quieter ride",
      "Longer engine life & better fuel efficiency",
    ],
  },
  {
    slug: "torqmax-virgin-20w40",
    name: "TorqMax Virgin Base",
    variant: "Marine Edition",
    grade: "20W-40",
    spec: "API SL | JASO MA2",
    size: "1 L",
    engine: "4T Petrol Engines",
    color: "blue",
    image: blueBottle.url,
    tagline: "Superior Quality • Virgin Base Oil",
    features: [
      "100% virgin base oil formulation",
      "Superior thermal stability",
      "Advanced anti-wear additives",
      "Optimised for high-RPM riding",
    ],
  },
  {
    slug: "torqmax-estermax-20w50",
    name: "TorqMax EsterMax 5000",
    variant: "Gold Edition",
    grade: "20W-50",
    spec: "API SL | JASO MA2",
    size: "1 L",
    engine: "4T Petrol Engines",
    color: "gold",
    image: esterBottle.url,
    tagline: "Premium Mineral • Contains Ester",
    features: [
      "Superior ester formulation",
      "Better wear protection at high loads",
      "Excellent oxidation stability",
      "Ideal for high-mileage engines",
    ],
  },
  {
    slug: "torqmax-crysta-20w40",
    name: "TorqMax Crysta 4T",
    variant: "Bike Edition",
    grade: "20W-40",
    spec: "API SN",
    size: "900 ml",
    engine: "4T Bike Engines",
    color: "gold",
    image: crystaBottle.url,
    tagline: "Enhanced Performance for Every Ride",
    features: [
      "Optimised for daily commute bikes",
      "Smooth gear shifts",
      "Reduces engine noise",
      "BS6 compliant",
    ],
  },
  {
    slug: "torqmax-sprint-4t-20w40",
    name: "TorqMax Sprint 4T",
    variant: "Sport Edition",
    grade: "20W-40",
    spec: "API SN | JASO MA2",
    size: "1 L",
    engine: "4-Stroke Bikes",
    color: "silver",
    image: sprintBottle.url,
    tagline: "Fully Synthetic Performance",
    features: [
      "High-RPM stability",
      "Rapid engine response",
      "Long drain intervals",
      "Advanced additive pack",
    ],
  },
  {
    slug: "torqmax-supreme-20w40",
    name: "TorqMax Supreme+",
    variant: "Rider Edition",
    grade: "20W-40",
    spec: "API SN | JASO MA2",
    size: "1 L",
    engine: "4T Motorcycles",
    color: "orange",
    image: supremeBottle.url,
    tagline: "Ride Ka Junoon, Protection Ka Sukoon",
    features: [
      "Advanced two-wheeler formulation",
      "Superior wet clutch performance",
      "Extended engine life",
      "Trusted by mechanics",
    ],
  },
  {
    slug: "torqmax-gear-ep90",
    name: "TorqMax Gear",
    variant: "Transmission",
    grade: "SAE EP-90",
    spec: "API GL-5",
    size: "1 L",
    engine: "Automotive Gearboxes",
    color: "silver",
    image: gearBottle.url,
    tagline: "Heavy-duty Automotive Gear Oil",
    features: [
      "Extreme pressure protection",
      "Anti-scoring performance",
      "Long service life",
      "Suits manual transmissions & differentials",
    ],
  },
  {
    slug: "torqmax-synth-5w30",
    name: "TorqMax Synth",
    variant: "Car Edition",
    grade: "SAE 5W-30",
    spec: "API SN-CI4+",
    size: "1 L",
    engine: "Passenger Cars",
    color: "gold",
    image: synthBottle.url,
    tagline: "Fully Synthetic Car Engine Oil",
    features: [
      "Fully synthetic formulation",
      "Excellent cold-start protection",
      "Improved fuel economy",
      "Suits modern petrol & diesel cars",
    ],
  },
  {
    slug: "torqmax-scoot-10w30",
    name: "TorqMax Scoot",
    variant: "Scooter Edition",
    grade: "SAE 10W-30",
    spec: "API SN | JASO MB",
    size: "800 ml",
    engine: "Automatic Scooters",
    color: "blue",
    image: scootBottle.url,
    tagline: "Semi-Synthetic • Super Premium",
    features: [
      "Designed for auto-transmission scooters",
      "Smoother acceleration",
      "Reduces vibration & noise",
      "Cleaner engine internals",
    ],
  },
];