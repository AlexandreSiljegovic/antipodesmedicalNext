import Image from "next/image";
import styles from "./page.module.css";
import TechnicalPlate from "./components/TechnicalPlate";
import Implantology from "./components/Implantology";

export default function Home() {
  return (
    <>
      <TechnicalPlate />
      <Implantology />
    </>
  );
}
