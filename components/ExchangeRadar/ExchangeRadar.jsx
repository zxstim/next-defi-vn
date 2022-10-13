import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ExchangeRadar() {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();
    const [query, setQuery] = useState("")  
    const mockData = {
        "iradar": [
            {
                "id": 1,
                "n": "Binance",
                "ty": "CEX",
                "score": "128.22",
                "tier": "chad", 
                "t": "7/1/2022, 7:00:56 AM"
            },
            {
                "id": 2,
                "n": "Uniswap",
                "ty": "DEX",
                "score": "101.93",
                "tier": "chad", 
                "t": "7/1/2022, 7:00:56 AM"
            },
        ]
    }
      
    return (
        <>
            <h2 id="exchange">{t('exr')}<button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
            <p>🔗 uid: exchange</p>
            <a href="https://buidl.defi.vn/explain-pyhash#heading-exchange-scanner">{t('explain')}</a>
            <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder={t('exr-search')} onChange={event => setQuery(event.target.value)}/></div>
            <table>
            <thead>
                <tr>         
                    <th>{t('exr-t-1')}</th>
                    <th>{t('exr-t-2')}</th>
                    <th>{t('exr-t-3')}</th>
                    <th>{t('exr-t-4')}</th>
                    <th>{t('exr-t-5')}</th>
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
                                <td>{signal.n}</td>
                                <td>{signal.ty}</td>
                                <td>{signal.score}</td>
                                <td>{signal.tier}</td>
                                <td>{signal.t}</td>
                            </tr>
                        )
                )}
            </tbody>
            </table>
        </>
    )
}