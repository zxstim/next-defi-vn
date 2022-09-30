export default function UpButton() {
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
        ⬆️ Top
        </button>
    )
}