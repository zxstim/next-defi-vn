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
import OtcPriceComponent from "../OtcPrice/OtcPrice";
import InvestorRadar from "../InvestorRadar/InvestorRadar";
import ProjectRadar from "../ProjectRadar/ProjectRadar";
import ExchangeRadar from "../ExchangeRadar/ExchangeRadar";
import CryptoScanner from "../CryptoScanner/CryptoScanner";
import SrAnalysisComponent from "../SrAnalysis/SrAnalysis";
import Collapsible from "../CollapsibleList/CollapsibleList";
// import PortfolioComp from "../PortfolioComp/PortfolioComp";
// import M1Predictions from "../M1Predictions/M1Predictions";
import { useState } from 'react';

function renderQueriedComponent(query, componentData) {
    if (query === '') {
        return (
            <>
                <OtcPriceComponent data={componentData.otcprice} rowsPerPage={9} />
                <InvestorRadar />
                <ProjectRadar data={componentData.projectradar} rowsPerPage={10}/>
                <ExchangeRadar />
                <CryptoScanner />
                {/* <PortfolioComp /> */}
                <SrAnalysisComponent data={componentData.sr1} rowsPerPage={5}/>
                <h2 id="p1">## P1 - Spot Signals</h2>
                <p>🔗 uid: p1</p>
                <a href="https://buidl.defi.vn/explain-pyhash#heading-p1-spot-signal">🔑 Explain</a>
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
                {/* <M1Predictions /> */}
            </>
        )
    } else {
        switch(query) {
            default:
                return <h2>No signal matched</h2>
            case "p1":
                return (
                    <>
                        <h2 id="p1">## P1 - Spot Signals</h2>
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
            case "otc":
                return <OtcPriceComponent data={componentData.otcprice} rowsPerPage={9}/>
            case "invest":
                return <InvestorRadar />
            case "exchange":
                return <ExchangeRadar />
            case "project":
                return <ProjectRadar data={componentData.projectradar} rowsPerPage={10}/>
            case "scanner":
                return <CryptoScanner />
            // case "m1":
            //     return <M1Predictions />
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


export default function ComponentList(props) {
    const [query, setQuery] = useState("")
    const componentData = props.data
    return (
        <>
            <h2>## App search</h2>
            <div>🔎 <input placeholder=" Search uid..." onChange={event => setQuery(event.target.value)}/></div>
            <Collapsible id="menu" label='Click me for menu'/>
            {renderQueriedComponent(query.toLowerCase(), componentData)}
        </>
    )
}