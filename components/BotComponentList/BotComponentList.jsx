import { useState } from 'react';
import { useTranslation } from "next-i18next";
import {
    P1S1Component,
    P1S2Component,
    P1S3Component,
    P1S4Component,
    P1S5Component,
    P1S6Component,
    P1S7Component,
    P1S8Component,
    P1S9Component,
    P1S10Component
  } from "../P1Signals/P1Signals";
import CryptoScanner from "../CryptoScanner/CryptoScanner";
import SrAnalysisComponent from "../SrAnalysis/SrAnalysis";
import BotCollapsibleList from "../BotCollapsibleList/BotCollapsibleList";
// import PortfolioComp from "../PortfolioComp/PortfolioComp";
import M1Predictions from "../M1Predictions/M1Predictions";


function renderQueriedComponent(query, componentData) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals");     
    if (query === '') {
        return (
            <>
                <CryptoScanner />
                {/* <PortfolioComp /> */}
                <SrAnalysisComponent data={componentData.sr1} rowsPerPage={5}/>
                <h2 id="p1">{t('p1')}</h2>
                <p>🔗 uid: p1</p>
                <a href="https://buidl.defi.vn/explain-pyhash#heading-p1-spot-signal">{t('explain')}</a>
                <P1S1Component data={componentData.p1ethusdt} rowsPerPage={5} />
                <P1S2Component data={componentData.p1btcusdt} rowsPerPage={5}/>
                <P1S3Component data={componentData.p1nearusdt} rowsPerPage={5}/>
                <P1S4Component data={componentData.p1solusdt} rowsPerPage={5}/>
                <P1S5Component data={componentData.p1bnbusdt} rowsPerPage={5}/>
                <P1S6Component data={componentData.p1trxusdt} rowsPerPage={5}/>
                <P1S7Component data={componentData.p1axsusdt} rowsPerPage={5}/>
                <P1S8Component data={componentData.p1c98usdt} rowsPerPage={5}/>  
                <P1S9Component data={componentData.p1adausdt} rowsPerPage={5}/>
                <P1S10Component data={componentData.p1shibusdt} rowsPerPage={5}/>
                <M1Predictions />
            </>
        )
    } else {
        switch(query) {
            default:
                return <h2>{t('no-match')}</h2>
            case "p1":
                return (
                    <>
                        <h2 id="p1">{t('p1')}</h2>
                        <p>🔗 uid: p1</p>
                        <a href="https://buidl.defi.vn/explain-pyhash#heading-p1-spot-signal">🔑 Explain</a>
                        <P1S1Component data={componentData.p1ethusdt} rowsPerPage={5}/>
                        <P1S2Component data={componentData.p1btcusdt} rowsPerPage={5}/>
                        <P1S3Component data={componentData.p1nearusdt} rowsPerPage={5}/>
                        <P1S4Component data={componentData.p1solusdt} rowsPerPage={5}/>
                        <P1S5Component data={componentData.p1bnbusdt} rowsPerPage={5}/>
                        <P1S6Component data={componentData.p1trxusdt} rowsPerPage={5}/>
                        <P1S7Component data={componentData.p1axsusdt} rowsPerPage={5}/>
                        <P1S8Component data={componentData.p1c98usdt} rowsPerPage={5}/>  
                        <P1S9Component data={componentData.p1adausdt} rowsPerPage={5}/>
                        <P1S10Component data={componentData.p1shibusdt} rowsPerPage={5}/>
                    </>    
                )
            case "scanner":
                return <CryptoScanner />
            case "m1":
                return <M1Predictions />
            // case "pfc":
            //     return <PortfolioComp />
            case "p1s1":
                return <P1S1Component data={componentData.p1ethusdt} rowsPerPage={5}/>   
            case "p1s2":
                return <P1S2Component data={componentData.p1btcusdt} rowsPerPage={5}/>
            case "p1s3":
                return <P1S3Component data={componentData.p1nearusdt} rowsPerPage={5}/>
            case "p1s4":
                return <P1S4Component data={componentData.p1solusdt} rowsPerPage={5}/>
            case "p1s5":
                return <P1S5Component data={componentData.p1bnbusdt} rowsPerPage={5}/>
            case "p1s6":
                return <P1S6Component data={componentData.p1trxusdt} rowsPerPage={5}/>
            case "p1s7":
                return <P1S7Component data={componentData.p1axsusdt} rowsPerPage={5}/>
            case "p1s8":
                return <P1S8Component data={componentData.p1c98usdt} rowsPerPage={5}/>
            case "p1s9":
                return <P1S9Component data={componentData.p1c98usdt} rowsPerPage={5}/>
            case "p1s10":
                return <P1S10Component data={componentData.p1shibusdt} rowsPerPage={5}/>
            case "sr1":
                return <SrAnalysisComponent data={componentData.sr1} rowsPerPage={5}/>  
        }
    }
}


export default function BotComponentList(props) {
    // eslint-disable-next-line
    const { t } = useTranslation("signals"); 
    const [query, setQuery] = useState("")
    const componentData = props.data
    return (
        <>
            <h2>{t('app-search')}</h2>
            <div>🔎 <input placeholder={t('app-input')} onChange={event => setQuery(event.target.value)}/></div>
            <BotCollapsibleList id="menu" label={t('menu')}/>
            {renderQueriedComponent(query.toLowerCase(), componentData)}
        </>
    )
}