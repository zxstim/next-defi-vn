import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useTable from "../../hooks/useTable";
import TableFooter from "../TableFooter/TableFooter";
import swoleDoge from './swole-doge.png';

export default function ProjectRadar({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();    
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
            <h2 id="project">{t('projr')}<button style={{position: "relative", left: "10px", bottom: "4px"}}>beta</button></h2>
            <p>🔗 uid: project</p>
            <a href="https://buidl.defi.vn/explain-pyhash#heading-project-radar">{t('explain')}</a>
            <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder={t('projr-search')} onChange={event => setQuery(event.target.value)}/></div>
            <table>
            <thead>
                <tr>         
                    <th>{t('projr-t-1')}</th>
                    <th>{t('projr-t-2')}</th>
                    <th>{t('projr-t-3')}</th>
                    <th>{t('projr-t-4')}</th>
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
                                <td><img src={swoleDoge} alt="Swole Doge" width="25" height="25" style={{paddingRight: "5px", position: "relative", top: "4px"}}/>{signal.total_score}</td>
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