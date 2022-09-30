import commify from "../../utils/commify";
import formatTimeStamp from "../../utils/formatTimestamp";
import useTable from "../../hooks/useTable";
import { useState } from "react";
import TableFooter from "../TableFooter/TableFooter";


export default function Sr1AnalysisComponent({ data, rowsPerPage }) {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    var Sr1Analysis 
    if (query === '') {
        Sr1Analysis = slice
    } else {
        Sr1Analysis = data
    }

    return (
    <>
        <h2 id="sr1">## SR1 Analysis <button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
        <p>🔗 uid: sr1</p>
        <a href="https://buidl.defi.vn/explain-pyhash#heading-sr-analysis">🔑 Explain</a>
        <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder=" Search pair..." onChange={event => setQuery(event.target.value)}/></div>
        <table>
        <thead>
            <tr>         
                <th>Pair</th>
                <th>Support</th>
                <th>Resistance</th>
                <th>Status</th>
                <th>Timestamp</th>
            </tr>
        </thead>
        <tbody>
            {
                // eslint-disable-next-line
                Sr1Analysis.filter(function (signal) { 
                    if (query === '') {
                        return signal;
                    } else if (signal.pair.toLowerCase().includes(query.toLowerCase()) || signal.status.toLowerCase().includes(query.toLowerCase())) {
                        return signal;
                    }}).map((signal) => (
                        <tr key={signal.id}>
                            <td>{signal.pair}</td>
                            <td>${commify(signal.support)}</td>
                            <td>${commify(signal.resistance)}</td>
                            <td>{signal.status}</td>
                            <td>{formatTimeStamp(signal.created_at)}</td>
                        </tr>
                    )
            )}
        </tbody>
        </table>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
    )
}