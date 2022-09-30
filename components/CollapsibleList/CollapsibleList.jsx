import {useState} from 'react';
const Collapsible = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hideContent = {
    font: 'inherit',
    width: '350px',
    height: 'auto',
    marginTop: '5px',
    display: 'none',
    justifyContent: 'left',
    borderRadius: '10px',
    color: 'var(--color-fg-default)',
    backgroundColor: 'var(--color-canvas-default)',
    border: '1px solid var(--color-border-default)',
  }
  
  const showContent = {
    display: 'flex',
    font: 'inherit',
    width: '350px',
    height: '300px',
    overflowY: 'auto',
    marginTop: '5px',
    paddingTop: '5px',
    justifyContent: 'left',
    borderRadius: '10px',
    color: 'var(--color-fg-default)',
    backgroundColor: 'var(--color-canvas-default)',
    border: '1px solid var(--color-border-default)',
  }
  return (
    <div className="container">
      <button 
      style={{ 
        marginTop: "15px", 
        padding: "10px 10px 10px 10px", 
        WebkitAppearance: 'none',
        borderRadius: '6px',
        border: '1px solid var(--color-border-default)',
        fontSize: '12px' 
        }}
        className='toggle' 
        onClick={() => setIsOpen(!isOpen)}
        >
        {label}
      </button>
      <div style={isOpen ? showContent : hideContent}>
        <ul>
          <li><a href="#otc">OTC Price</a></li>
          <li><a href="#invest">Investor Radar</a></li>
          <li><a href="#project">Project Radar</a></li>
          <li><a href="#exchange">Exchange Radar</a></li>
          <li><a href="#sr1">SR1 Analysis</a></li>
          <li><a href="#p1">P1 - Spot Signals</a></li>
          <li><a href="#p1s1">P1-ETH-USDT | Binance</a></li>
          <li><a href="#p1s2">P1-BTC-USDT | Binance</a></li>
          <li><a href="#p1s3">P1-NEAR-USDT | Binance</a></li>
          <li><a href="#p1s4">P1-SOL-USDT | Binance</a></li>
          <li><a href="#p1s5">P1-BNB-USDT | Binance</a></li>
          <li><a href="#p1s6">P1-TRX-USDT | Binance</a></li>
          <li><a href="#p1s7">P1-AXS-USDT | Binance</a></li>
          <li><a href="#p1s8">P1-C98-USDT | Binance</a></li>
          <li><a href="#p1s9">P1-ADA-USDT | Binance</a></li>
          <li><a href="#p1s10">P1-SHIB-USDT | Binance</a></li>
          <li><a href="#m1">M1 Predictions</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Collapsible;