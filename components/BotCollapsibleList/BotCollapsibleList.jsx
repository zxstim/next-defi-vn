import { useState } from 'react';
import { useTranslation } from "next-i18next";

const BotCollapsibleList = ({ label }) => {
  // eslint-disable-next-line
  const { t } = useTranslation("signals");
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
          <li><a href="#scanner">{t('menu-5')}</a></li>
          <li><a href="#sr1">{t('menu-6')}</a></li>
          <li><a href="#p1">{t('menu-7')}</a></li>
          <li><a href="#p1s1">{t('menu-8')}</a></li>
          <li><a href="#p1s2">{t('menu-9')}</a></li>
          <li><a href="#p1s3">{t('menu-10')}</a></li>
          <li><a href="#p1s4">{t('menu-11')}</a></li>
          <li><a href="#p1s5">{t('menu-12')}</a></li>
          <li><a href="#p1s6">{t('menu-13')}</a></li>
          <li><a href="#p1s7">{t('menu-14')}</a></li>
          <li><a href="#p1s8">{t('menu-15')}</a></li>
          <li><a href="#p1s9">{t('menu-16')}</a></li>
          <li><a href="#p1s10">{t('menu-17')}</a></li>
          <li><a href="#m1">{t('menu-18')}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default BotCollapsibleList;