import Image from "next/image";
import styles from "./nav.module.scss";
import { ThemeToggle } from "@/components/toggle";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <span className={styles.navLogo}>
        <Image
          width={200}
          height={80}
          src={"/images/logo.svg"}
          alt="Wrapped Wishes Logo"
        />
      </span>
      <div className={styles.navLinks}>
        <a href="#">Gallery</a>
        <a href="#">What I make</a>
        <a href="#">About</a>
      </div>
      <div className={styles.navCta}>
        <ThemeToggle />
        <button>Enquire</button>
      </div>
    </nav>
  );
};
