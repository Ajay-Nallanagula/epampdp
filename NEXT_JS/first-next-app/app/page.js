import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FirstReactComponent from "@/components/FirstReactComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> This is from Root Page</h1>
      <h3>
        <Link href='/about'>About</Link>
      </h3>
      <FirstReactComponent />
    </main>
  );
}
