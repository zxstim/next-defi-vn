import { useState } from 'react';
import useTable from "../../hooks/useTable";
import TableFooter from "../TableFooter/TableFooter";
import Image from 'next/future/image'
// import swoleDoge from './swole-doge.png';

export default function ProjectRadar({ data, rowsPerPage }) {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    var ProjectInfo 
    if (query === '') {
        ProjectInfo = slice
    } else {
        ProjectInfo = data
    }

    function formatTimeStamp2(timestamp) {
        //const convertedTimestamp = timestamp.split(" ")[0] + "T" + timestamp.split(" ")[1] + "Z";
        const localTimestamp = new Date(timestamp);
        return localTimestamp.toLocaleString('sv').replace(' ', ', ');
    }

    return (
        <>
            <h2 id="project">Project Radar</h2>
            <div>🔎 <input style={{marginBottom: "15px"}} placeholder=" Search project..." onChange={event => setQuery(event.target.value)}/></div>
            <table>
            <thead>
                <tr>         
                    <th>Name</th>
                    <th>Swole Index</th>
                    <th>Tier</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {
                    // eslint-disable-next-line
                    ProjectInfo.filter(function (signal) { 
                        if (query === '') {
                            return signal;
                        } else if (signal.name.toLowerCase().includes(query.toLowerCase()) || signal.tier.toLowerCase().includes(query.toLowerCase()) || signal.project_type.toLowerCase().includes(query.toLowerCase())) {
                            return signal;
                        }}).map((signal) => (
                            <tr key={signal.id}>
                                <td><a href={signal.web_link}>{signal.name}</a></td>
                                <td><img src="/swole-doge.svg" width="25" height="25" style={{paddingRight: "5px", position: "relative", top: "4px"}} alt="swole-doge SVG" />{signal.total_score}</td>
                                <td>{signal.tier}</td>
                                <td>{formatTimeStamp2(signal.updated_at)}</td>
                            </tr>
                        )
                )}
            </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    )
}