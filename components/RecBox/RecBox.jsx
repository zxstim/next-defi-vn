export default function RecBox() {
    return (
        <>
            <h4 style={{ borderTop: "1px solid #1a1a1a", paddingTop: "10px" }}>🎁 Recommended by <a href="https://oddin.ai/">Oddin.ai</a></h4>
            <div className="rec-box">
                <div className="rec-item">
                    <div className="rec-name-box">
                        <img src="/defi.svg" width="30" height="30" alt="ad logo" />
                        <p className="rec-brand-name">Unitmasters</p>
                    </div>
                    <p className="rec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae finibus mauris. Donec ante arcu, pretium at hendrerit vel, venenatis vel arcu. Nulla facilisi. Donec ante arcu, pretium at hendrerit vel, venenatis vel arcu. Nulla facilisi</p>
                    <div className="align-right">
                        <button className="rec-cta">Learn more</button>
                    </div>
                </div>
                <div className="rec-item">
                    <div className="rec-name-box">
                        <img src="/defi.svg" width="30" height="30" alt="ad logo" />
                        <p className="rec-brand-name">Insurace</p>
                    </div>
                    <p className="rec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae finibus mauris. Donec ante arcu, pretium at hendrerit vel, venenatis vel arcu. Nulla facilisi.</p>
                    <div className="align-right">
                        <button className="rec-cta">Learn more</button>
                    </div>
                </div>
                <div className="rec-item">
                    <div className="rec-name-box">
                        <img src="/defi.svg" width="30" height="30" alt="ad logo" />
                        <p className="rec-brand-name">Nexusmutial.io</p>
                    </div>                    
                    <p className="rec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae finibus mauris. Donec ante arcu, pretium at hendrerit vel, venenatis vel arcu. Nulla facilisi.</p>
                    <div className="align-right">
                        <button className="rec-cta">Learn more</button>
                    </div>
                </div>
            </div>
        </>
    )
}