import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import RedSections from "@/component/RedSections";
import BlueSections from "@/component/BlueSections";
import GreenSections from "@/component/GreenSections";
const inter = Inter({ subsets: ["latin"] });

const a = [
  "#FF6263",
  "#DE4839",
  "#BF3325",
  "#E21717",
  "#BF3312",
  "#D82E2F",
  "#EB4D4B",
  "#EF5354",
  "#B4161B",
  "#E6425E",
  "#E83A59",
  "#B9345A",
];
const b = [
  "#1B98F5",
  "#23C4ED",
  "#383CC1",
  "#12B0E8",
  "#207398",
  "#46B2E0",
  "#3944F7",
  "#2827CC",
  "#120E43",
  "#5DA3FA",
  "#03203C",
  "#51E1ED",
];
const c = [
  "#538155",
  "#367539",
  "#7DBE80",
  "#418743",
  "#72AB75",
  "#66B469",
  "#2C4F2D",
  "#364336",
  "#449C48",
  "#6F9870",
  "#38723A",
  "#709747",
];
export default function Home() {
  return (
    <>
      <RedSections a={a} />
      <BlueSections b={b} />
      <GreenSections c={c} />
    </>
  );
}
