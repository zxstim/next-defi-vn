import { useState } from 'react';
import { useTranslation } from "next-i18next";

export default function CryptoScanner() {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");
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
            <h2 id="scanner">{t('scan')}<button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
            <p>🔗 uid: scanner</p>
            <a href="https://buidl.defi.vn/explain-pyhash#heading-crypto-scanner">{t('explain')}</a>
            <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder={t('scan-search')} onChange={event => setQuery(event.target.value)}/></div>
            <table>
            <thead>
                <tr>         
                    <th>{t('scan-t-1')}</th>
                    <th>{t('scan-t-2')}</th>
                    <th>{t('scan-t-3')}</th>
                    <th>{t('scan-t-4')}</th>
                    <th>{t('scan-t-5')}</th>
                    <th>{t('scan-t-6')}</th>
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