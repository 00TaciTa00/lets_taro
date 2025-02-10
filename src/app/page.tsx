import { AnimatedCard } from "@/components/Card";
import styles from "./page.module.css";
import TableSection from "@/components/TableSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <TableSection>
          <AnimatedCard />
        </TableSection>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
