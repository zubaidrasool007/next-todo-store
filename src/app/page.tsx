import styles from "./page.module.css";
import { TodoMain } from "@/components/TodoMain";

export default async function Home() {
  return (
    <main
      className={styles.main}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "6rem",
      }}
    >
      <TodoMain />
    </main>
  );
}
