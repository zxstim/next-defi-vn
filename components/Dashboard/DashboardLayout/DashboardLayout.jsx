import InfoCard from '../InfoCard/InfoCard'
import UserProfile from '../UserProfile/UserProfile'
import styles from './DashboardLayout.module.css'

export default function DashboardLayout({ session }) {
    console.log(session)
    const cardOne = {
        title: "Card One",
        description: "Random description for card one that is very long and will wrap to the next line."
    }
    const cardTwo = {
        title: "Card Two",
        description: "Random description for card one that is very long and will wrap to the next line."
    }
    const cardThree = {
        title: "Card Three",
        description: "Random description for card one that is very long and will wrap to the next line."
    }
    const cardFour = {
        title: "Card Four",
        description: "Thử nghiệm tiếng Việt cho card này. Đây là một câu rất dài và sẽ bị ngắt dòng."
    }
    return (
        <div className={styles.dashboard_container}>
            <h2>Dashboard</h2>
            <UserProfile session={session} />
            <InfoCard info={cardOne} />
            <InfoCard info={cardTwo} />
            <InfoCard info={cardThree} />
            <InfoCard info={cardFour} />
        </div>
    )
}