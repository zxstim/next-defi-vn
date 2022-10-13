import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OtcPriceComponent from "../OtcPrice/OtcPrice";
import InvestorRadar from "../InvestorRadar/InvestorRadar";
import ProjectRadar from "../ProjectRadar/ProjectRadar";
import ExchangeRadar from "../ExchangeRadar/ExchangeRadar";
import Collapsible from "../CollapsibleList/CollapsibleList";
// import PortfolioComp from "../PortfolioComp/PortfolioComp";


function renderQueriedComponent(query, componentData) {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();     
    if (query === '') {
        return (
            <>
                <OtcPriceComponent data={componentData.otcprice} rowsPerPage={9} />
                <InvestorRadar />
                <ProjectRadar data={componentData.projectradar} rowsPerPage={10}/>
                <ExchangeRadar />
            </>
        )
    } else {
        switch(query) {
            default:
                return <h2>{t('no-match')}</h2>
            case "otc":
                return <OtcPriceComponent data={componentData.otcprice} rowsPerPage={9}/>
            case "invest":
                return <InvestorRadar />
            case "exchange":
                return <ExchangeRadar />
            case "project":
                return <ProjectRadar data={componentData.projectradar} rowsPerPage={10}/> 
        }
    }
}


export default function ComponentList(props) {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();
    const [query, setQuery] = useState("")
    const componentData = props.data
    return (
        <>
            <h2>{t('app-search')}</h2>
            <div>🔎 <input placeholder={t('app-input')} onChange={event => setQuery(event.target.value)}/></div>
            <Collapsible id="menu" label={t('menu')}/>
            {renderQueriedComponent(query.toLowerCase(), componentData)}
        </>
    )
}