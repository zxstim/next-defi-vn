import { useState } from "react";
import { useTranslation } from 'next-i18next';
import commify from "../../utils/commify";
import formatTimeStamp from "../../utils/formatTimestamp";
import useTable from "../../hooks/useTable";
import TableFooter from "../TableFooter/TableFooter";

function renderFinalPnl (p1Signals) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");  
    if (p1Signals.at(0) === undefined) {
    return <p>{t('f-pnl-4')}</p>
    } else {
        if (parseFloat(p1Signals.at(0).pnl) > 0) {
            return <h4>{t('f-pnl-1')} <span style={{color: "#0ecb81"}}>{p1Signals.at(0).pnl}</span></h4>
        } else if (parseFloat(p1Signals.at(0).pnl) === 0) {
            return <h4>{t('f-pnl-2')} <span>{p1Signals.at(0).pnl}</span></h4>
        } else {
            return <h4>{t('f-pnl-3')} <span style={{color: "#f6465d"}}>{p1Signals.at(0).pnl}</span></h4>
        }
    }
}


function P1S1Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");   
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data


    return (
        <>
            <h3 id="p1s1">{t('p1s1')}</h3>
            <p>🔗 uid: p1s1</p>
            {renderFinalPnl(p1Signals)} 
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S2Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s2">{t('p1s2')}</h3>
            <p>🔗 uid: p1s2</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S3Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s3">{t('p1s3')}</h3>
            <p>🔗 uid: p1s3</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S4Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s4">{t('p1s4')}</h3>
            <p>🔗 uid: p1s4</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S5Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s5">{t('p1s5')}</h3>
            <p>🔗 uid: p1s5</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S6Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s6">{t('p1s6')}</h3>
            <p>🔗 uid: p1s6</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S7Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s7">{t('p1s7')}</h3>
            <p>🔗 uid: p1s7</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S8Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s8">{t('p1s8')}</h3>
            <p>🔗 uid: p1s8</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S9Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s9">{t('p1s9')}</h3>
            <p>🔗 uid: p1s9</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(signal.price)}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

function P1S10Component({ data, rowsPerPage }) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");      
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s10">{t('p1s10')}</h3>
            <p>🔗 uid: p1s10</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>{t('p1-t-1')}</th>
                    <th>{t('p1-t-2')}</th>
                    <th>{t('p1-t-3')}</th>
                    <th>{t('p1-t-4')}</th>
                    <th>{t('p1-t-5')}</th>
                    <th>{t('p1-t-6')}</th>
                    <th>{t('p1-t-7')}</th>
                </tr>
                </thead>
                <tbody>
                {slice.map((signal) => (
                    <tr key={signal.id}>
                    <td><a href={"https://www.binance.com/en/trade/" + signal.pair.split('-')[0] + "_" + signal.pair.split('-')[1]}>{signal.pair}</a></td>
                    <td>{signal.exchange}</td>
                    <td>{signal.action_type}</td>
                    <td>{commify(Number(signal.price))}</td>
                    <td>{commify(signal.quantity)}</td>
                    <td>{commify(signal.pnl)}</td>
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

export {
    P1S1Component,
    P1S2Component,
    P1S3Component,
    P1S4Component,
    P1S5Component,
    P1S6Component,
    P1S7Component,
    P1S8Component,
    P1S9Component,
    P1S10Component,
}