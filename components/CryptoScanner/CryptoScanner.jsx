import { useState } from 'react';

export default function CryptoScanner() {
    const [query, setQuery] = useState("")  
    const mockData = {
        "iradar": [
            {
                "id": 1,
                "n": "BTC",
                "b": "n",
                "s": "y",
                "h": "n",
                "t": "2022-07-27, 17:00:50"
            },
            {
                "id": 2,
                "n": "ETH",
                "b": "y",
                "s": "n",
                "h": "n",
                "t": "2022-07-27, 13:00:25"
            },
            {
                "id": 3,
                "n": "SOL",
                "b": "n",
                "s": "n",
                "h": "y",
                "t": "2022-07-27, 12:00:25"
            },
        ]
    }
    
    function renderBuyStatus(status) {
        switch (status) {
            case "n":
                return "-"
            case "y":
                return "🟢"
            default:
                return "NA"
        }
    }

    function renderSellStatus(status) {
        switch (status) {
            case "n":
                return "-"
            case "y":
                return "🔴"
            default:
                return "NA"
        }
    }

    function renderHoldStatus(status) {
        switch (status) {
            case "n":
                return "-"
            case "y":
                return "🟡"
            default:
                return "NA"
        }
    }

    return (
        <>
            <h2 id="scanner">##  Crypto Scanner <button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
            <p>🔗 uid: scanner</p>
            <a href="https://buidl.defi.vn/explain-pyhash#heading-crypto-scanner">🔑 Explain</a>
            <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder=" Search crypto..." onChange={event => setQuery(event.target.value)}/></div>
            <table>
            <thead>
                <tr>         
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Buy</th>
                    <th>Sell</th>
                    <th>Hold</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {
                    // eslint-disable-next-line
                    mockData.iradar.filter(function (signal) { 
                        if (query === '') {
                            return signal;
                        } else if (signal.n.toLowerCase().includes(query.toLowerCase())) {
                            return signal;
                        }}).map((signal) => (
                            <tr key={signal.id}>
                                <td>{signal.id}</td>
                                <td>{signal.n}</td>
                                <td>{renderBuyStatus(signal.b)}</td>
                                <td>{renderSellStatus(signal.s)}</td>
                                <td>{renderHoldStatus(signal.h)}</td>
                                <td>{signal.t}</td>
                            </tr>
                        )
                )}
            </tbody>
            </table>
        </>
    )
}