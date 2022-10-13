import { useState } from "react";
import { useTranslation } from 'react-i18next';
import commify from "../../utils/commify";
import formatTimeStamp from "../../utils/formatTimestamp";
import useTable from "../../hooks/useTable";
import TableFooter from "../TableFooter/TableFooter";

function renderData(signal) {

  switch(signal.pair.split("-")[1]) {
    case "JPY":
      return (
        <>
          <td><a href={"https://p2p.binance.com/en/trade/all-payments/" + signal.pair.split("-")[0] + "?fiat=" + signal.pair.split("-")[1]}>{signal.pair}</a></td>
          <td><a href="https://p2p.binance.com/en">{signal.exchange}</a></td>
          <td>￥{commify(signal.max_bids)}</td>
          <td>￥{commify(signal.min_asks)}</td>
          <td>{formatTimeStamp(signal.created_at)}</td>
        </>
      )
    case "VND":
      return (
        <>
          <td><a href={"https://p2p.binance.com/en/trade/all-payments/" + signal.pair.split("-")[0] + "?fiat=" + signal.pair.split("-")[1]}>{signal.pair}</a></td>
          <td><a href="https://p2p.binance.com/en">{signal.exchange}</a></td>
          <td>{commify(signal.max_bids)}₫</td>
          <td>{commify(signal.min_asks)}₫</td>
          <td>{formatTimeStamp(signal.created_at)}</td>
        </>
      )
    case "EUR":
      return (
        <>
          <td><a href={"https://p2p.binance.com/en/trade/all-payments/" + signal.pair.split("-")[0] + "?fiat=" + signal.pair.split("-")[1]}>{signal.pair}</a></td>
          <td><a href="https://p2p.binance.com/en">{signal.exchange}</a></td>
          <td>€{commify(signal.max_bids)}</td>
          <td>€{commify(signal.min_asks)}</td>
          <td>{formatTimeStamp(signal.created_at)}</td>
        </>
      )
    case "RUB":
      return (
        <>
          <td><a href={"https://p2p.binance.com/en/trade/all-payments/" + signal.pair.split("-")[0] + "?fiat=" + signal.pair.split("-")[1]}>{signal.pair}</a></td>
          <td><a href="https://p2p.binance.com/en">{signal.exchange}</a></td>
          <td>₽{commify(signal.max_bids)}</td>
          <td>₽{commify(signal.min_asks)}</td>
          <td>{formatTimeStamp(signal.created_at)}</td>
        </>
      )
    case "CNY":
      return (
        <>
          <td><a href={"https://p2p.binance.com/en/trade/all-payments/" + signal.pair.split("-")[0] + "?fiat=" + signal.pair.split("-")[1]}>{signal.pair}</a></td>
          <td><a href="https://p2p.binance.com/en">{signal.exchange}</a></td>
          <td>￥{commify(signal.max_bids)}</td>
          <td>￥{commify(signal.min_asks)}</td>
          <td>{formatTimeStamp(signal.created_at)}</td>
        </>
      )
    case "THB":
      return (
        <>
          <td><a href={"https://p2p.binance.com/en/trade/all-payments/" + signal.pair.split("-")[0] + "?fiat=" + signal.pair.split("-")[1]}>{signal.pair}</a></td>
          <td><a href="https://p2p.binance.com/en">{signal.exchange}</a></td>
          <td>฿{commify(signal.max_bids)}</td>
          <td>฿{commify(signal.min_asks)}</td>
          <td>{formatTimeStamp(signal.created_at)}</td>
        </>
      )
    default:
      return (
        <>
          <td><a href={"https://p2p.binance.com/en/trade/all-payments/" + signal.pair.split("-")[0] + "?fiat=" + signal.pair.split("-")[1]}>{signal.pair}</a></td>
          <td><a href="https://p2p.binance.com/en">{signal.exchange}</a></td>
          <td>${commify(signal.max_bids)}</td>
          <td>${commify(signal.min_asks)}</td>
          <td>{formatTimeStamp(signal.created_at)}</td>
        </>
      )
    }
  }

export default function OtcPriceComponent({ data, rowsPerPage }) {
  // eslint-disable-next-line
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  var OtcPrices 
  if (query === '') {
    OtcPrices = slice
  } else {
    OtcPrices = data
  }
    
    return (
      <>
        <h2 id="otc">{t('otc')}</h2>
        <p>🔗 uid: otc</p>
        <a href="https://buidl.defi.vn/explain-pyhash#heading-otc-price">{t('explain')}</a>
        <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder={t('otc-search')} onChange={event => setQuery(event.target.value)}/></div>
        <table>
          <thead>
            <tr>         
              <th>{t('otc-t-1')}</th>
              <th>{t('otc-t-2')}</th>
              <th>{t('otc-t-3')}</th>
              <th>{t('otc-t-4')}</th>
              <th>{t('otc-t-5')}</th>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line
              OtcPrices.filter(function (signal) { 
                if (query === '') {
                  return signal;
                } else if (signal.pair.toLowerCase().includes(query.toLowerCase())) {
                  return signal;
                }}).map((signal) => (
                  <tr key={signal.id}>
                    {renderData(signal)}
                  </tr>
              )
            )}
          </tbody>
        </table>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </>
    )
  }


  