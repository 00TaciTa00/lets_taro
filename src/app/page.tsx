import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <Card />
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
