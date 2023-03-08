import { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./FloatingButton.module.css";

export default function FloatingButton() {
    const { t } = useTranslation("common")
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return (
      <>
        <button 
          onClick={toggleMenu}
          className={styles.menu_button}
        >
          🍔 Menu
        </button>
        {
          showMenu ? (
            <>
              <button
                onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}
                className={styles.up_button}
                >
                {t('top-button')}
              </button>
              <button
                onClick={() => {
                  window.location.reload();
                  window.alert("Refreshed");
                }}
                className={styles.refresh_button}
              >
                {t("refresh-button")}
              </button>
              <button 
                onClick={toggleMenu}
                className={styles.menu_button}
              >
                ❎ Close
              </button>
            </>
          ) : (
            <button 
            onClick={toggleMenu}
            className={styles.menu_button}
            >
              🍔 Menu
            </button>
          )
        }
      </>
    );
  }