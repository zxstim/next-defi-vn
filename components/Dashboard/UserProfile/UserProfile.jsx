export default function UserProfile({ session }) {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Email: {session.user.email ? session.user.email : "n/a"}</p>
            <p>Name: {session.user.name ? session.user.name : "n/a"}</p>
        </div>
    )
}