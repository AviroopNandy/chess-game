import React, { useState } from "react";

import "./Overlay.css";

const Overlay: React.FC = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const modalClass = showOverlay ? "modal displayBlock" : "modal displayNone";
    return(
        <div className={ modalClass }>
            <div className="modalMain">
                <h2>Overlay</h2>
            </div>
        </div>
    );
}

export default Overlay;