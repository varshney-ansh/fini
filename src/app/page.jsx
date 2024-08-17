import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
      <>
        <Navbar />
        <div className={styles.container} >
          Body
        </div>
        <Footer />
      </>
  );
}
