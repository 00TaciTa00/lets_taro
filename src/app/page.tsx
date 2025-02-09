import { AnimatedCard } from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <AnimatedCard />
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
