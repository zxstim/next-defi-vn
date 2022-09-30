import commify from "../../utils/commify";
import formatTimeStamp from "../../utils/formatTimestamp";
import useTable from "../../hooks/useTable";
import { useState } from "react";
import TableFooter from "../TableFooter/TableFooter";

function renderFinalPnl (p1Signals) {
    if (p1Signals.at(0) === undefined) {
    return <p>💰  Final PnL: 0</p>
    } else {
        if (parseFloat(p1Signals.at(0).pnl) > 0) {
            return <h4>💰  Final PnL: <span style={{color: "#0ecb81"}}>{p1Signals.at(0).pnl}</span></h4>
        } else if (parseFloat(p1Signals.at(0).pnl) === 0) {
            return <h4>🤷  Final PnL: <span>{p1Signals.at(0).pnl}</span></h4>
        } else {
            return <h4>💸  Final PnL: <span style={{color: "#f6465d"}}>{p1Signals.at(0).pnl}</span></h4>
        }
    }
}

function P1S1Component({ data, rowsPerPage }) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s1">### Pair: ETH-USDT | Binance</h3>
            <p>🔗 uid: p1s1</p>
            {renderFinalPnl(p1Signals)} 
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s2">### Pair: BTC-USDT | Binance</h3>
            <p>🔗 uid: p1s2</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s3">### Pair: NEAR-USDT | Binance</h3>
            <p>🔗 uid: p1s3</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s4">### Pair: SOL-USDT | Binance</h3>
            <p>🔗 uid: p1s4</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s5">### Pair: BNB-USDT | Binance</h3>
            <p>🔗 uid: p1s5</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s6">### Pair: TRX-USDT | Binance</h3>
            <p>🔗 uid: p1s6</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s7">### Pair: AXS-USDT | Binance</h3>
            <p>🔗 uid: p1s7</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s8">### Pair: C98-USDT | Binance</h3>
            <p>🔗 uid: p1s8</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s9">### Pair: ADA-USDT | Binance</h3>
            <p>🔗 uid: p1s9</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const p1Signals = data

    return (
        <>
            <h3 id="p1s10">### Pair: SHIB-USDT | Binance</h3>
            <p>🔗 uid: p1s10</p>
            {renderFinalPnl(p1Signals)}
            <table>
                <thead>
                <tr>
                    <th>Pair</th>
                    <th>Exchange</th>
                    <th>Order</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>PnL</th>
                    <th>Timestamp</th>
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