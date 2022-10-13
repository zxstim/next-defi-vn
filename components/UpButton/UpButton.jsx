import { useTranslation } from 'react-i18next';

export default function UpButton() {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();
    return (
        <button
            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
            style={{
                position: 'fixed',
                fontSize: '14px',
                bottom: '120px',
                right: '40px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '6px',
                textAlign: 'center',
                WebkitAppearance: 'none',
                border: '1px solid var(--color-border-default)'
            }}
        >
        {t('top-button')}
        </button>
    )
}