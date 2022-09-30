import { useState } from 'react';

export default function InvestorRadar() {
    const [query, setQuery] = useState("")  
    const mockData = {
        "iradar": [
            {
                "id": 1,
                "n": "Paradigm",
                "ty": "VC",
                "dhr": "10",
                "var": "10",
                "bn": "10",
                "score": "30",
                "tier": "Chad", 
                "t": "7/1/2022, 7:00:56 AM"
            },
            {
                "id": 2,
                "n": "Coinbase Ventures",
                "ty": "VC",
                "dhr": "9",
                "var": "7",
                "bn": "10",
                "score": "26",
                "tier": "A", 
                "t": "7/1/2022, 7:00:56 AM"
            },
        ]
    }
      
    return (
        <>
            <h2 id="invest">##  Investor Radar <button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
            <p>🔗 uid: invest</p>
            <a href="https://buidl.defi.vn/explain-pyhash#heading-investor-radar">🔑 Explain</a>
            <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder=" Search investor..." onChange={event => setQuery(event.target.value)}/></div>
            <table>
            <thead>
                <tr>         
                    <th>Name</th>
                    <th>Type</th>
                    <th>Diamond Hands</th>
                    <th>Value-add</th>
                    <th>Brand Name</th>
                    <th>Score</th>
                    <th>Tier</th>
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
                                <td>{signal.dhr}</td>
                                <td>{signal.var}</td>
                                <td>{signal.bn}</td>
                                <td>{signal.score}</td>
                                <td>{signal.tier}</td>
                            </tr>
                        )
                )}
            </tbody>
            </table>
        </>
    )
}