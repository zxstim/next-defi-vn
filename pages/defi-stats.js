import TestTable from "../components/InvestorRadar/InvestorRadar";

export default function DefiStats() {
  return (
    <>
      <div className="App">
        <div className="markdown-body">
          <TestTable/>
        </div>
      </div>
    </>
  )
}




export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}