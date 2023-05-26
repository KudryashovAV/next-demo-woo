import Link from "next/link";
import styles from "../styles/A.module.css"

export default function ({ text, href }) {
  return (
    <Link href={href}>
      <span className={styles.link}>{text}</span>
    </Link>
  );
};
