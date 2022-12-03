import { useState } from "react";

export default function Ethereum() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>Ethereum</div>
        <div className="expand-button">{isActive ? "⬆️" : "⬇️"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <a href="https://ethereum.org">📌 ethereum.org</a>
          <a href=""></a>
        </div>
      )}
    </div>
  );
}
