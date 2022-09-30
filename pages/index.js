import Head from 'next/head'
import Image from 'next/image'
import ComponentList from "../components/ComponentList/ComponentList";
import UpButton from "../components/UpButton/UpButton";
import axios from "axios";


export default function Home(props) {
  // const [iniData, setIniData] = useState(
  //   {
  //     "otcprice": [], 
  //     "p1ethusdt": [],
  //     "p1btcusdt": [],
  //     "p1nearusdt": [],
  //     "p1solusdt": [],
  //     "p1bnbusdt": [],
  //     "p1trxusdt": [],
  //     "p1axsusdt": [],
  //     "p1c98usdt": [],
  //     "p1adausdt": [],
  //     "p1shibusdt": [],
  //     "sr1": [],
  //     "projectradar": [],
  //   }
  // )

  // useEffect(() => {
  //   axios
  //     .get("https://api3.pyhash.com/signal/all")
  //     .then((res) => {
  //       setIniData(res.data)
  //     })
  // }, [])

  function RefreshButton() {
    return (
        <button
            onClick={() => {
              window.location.reload();
              window.alert('Refreshed');
            }}
            style={{
                position: 'fixed',
                fontSize: '14px',
                bottom: '70px',
                right: '40px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '6px',
                textAlign: 'center',
                WebkitAppearance: 'none',
                border: '1px solid var(--color-border-default)'
            }}
        >
        🔄 Refresh
        </button>
    )
  }

  return (
    <div className="App">
      <div className="markdown-body">
        <header className="App-header">
          <h1 id="top"># Pyhash</h1>
          <blockquote>👌 Yes, we have removed styling for lightning fast experience!</blockquote>
        </header>
        <h2>## Decode Finance</h2>
        <ul>
          <li><a href="https://buidl.defi.vn">🛠️ Read about BUIDL</a></li>
          {/* <li><nav><Link to="/about">ℹ️ About Pyhash</Link></nav></li> */}
          <li><a href="https://www.patreon.com/bePatron?u=69160974">🙏  Support us</a></li>
        </ul>
        <ComponentList data={props.data}/>
        <UpButton />
        <RefreshButton />
        <h2>## FP1 - Futures Signals</h2>
        <p>🚧 Updating soon</p>
        <h2>## OP1 - Options Signals</h2>
        <p>🚧 Updating soon</p>
        <h2><a href="https://github.com/orgs/pyhashdotcom/projects/5">## 🛣️ Follow our roadmap on Github</a></h2>
        <br />
        <hr />
        <h2># Footer</h2>
        <p>📍 Pyhash LLC</p>
        <p>📍 1007 N Orange St.</p>
        <p>📍 4th Floor Suite # 956</p>
        <p>📍 Wilmington, Delaware 19801, United States</p>
        <p>📍 team@pyhash.com</p>
        <br />
        <br />
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get("https://api3.pyhash.com/signal/all");
  // Pass data to the page via props
  return { props: { data: res.data } }
}