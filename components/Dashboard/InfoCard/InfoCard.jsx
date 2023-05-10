import styles from './InfoCard.module.css'

export default function InfoCard({ info }) {
    // return a card with the info
    return (
        <div className={styles.info_card}>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
        </div>
    )
}