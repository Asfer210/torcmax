import logoAsset from "@/assets/torqmax-logo.jpeg.asset.json";
import redBottle from "@/assets/torqmax-red.jpeg.asset.json";
import blueBottle from "@/assets/torqmax-blue.jpeg.asset.json";

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
  color: "red" | "blue";
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
];