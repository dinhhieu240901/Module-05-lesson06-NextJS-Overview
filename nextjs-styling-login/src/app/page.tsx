import Image from "next/image";
import styles from './styles/Login.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <label htmlFor="username" className={styles.label}>
          Username:
        </label>
        <input type="text" id="username" className={styles.input} />

        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input type="password" id="password" className={styles.input} />

        <input type="submit" value="Login" className={styles.submitButton} />
      </form>
    </div>
  );
}
