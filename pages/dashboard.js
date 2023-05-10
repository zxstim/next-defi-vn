import { getSession, signIn, signOut } from 'next-auth/react'
import DashboardLayout from '../components/Dashboard/DashboardLayout/DashboardLayout'
// import LoginButton from '../components/Login/LoginButton'
// import AccessDenied from '../components/AccessDenied/AccessDenied'

export default function Dashboard ({ session }) {
  // If no session exists, display access denied message
  // if (!session) { return  <LoginButton /> }

  // If session exists, display content
  return (
    <>
      <DashboardLayout session={session}/>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  
  if (!session) {
    return { redirect: { destination: "/auth/signin" } };
  }
  
  return {
    props: {
      session
    }
  }
}