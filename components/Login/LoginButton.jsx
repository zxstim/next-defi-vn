import { useSession, signIn, signOut } from "next-auth/react"
import styles from "./LoginButton.module.css";


export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className={styles.status_container}>
        <div className={styles.status_box}>
          Dashboard
        </div>
        <button className={styles.sign_out_button} onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }
  return (
    <>
      <button className={styles.sign_in_button} onClick={() => signIn()}>Sign in</button>
    </>
  )
}