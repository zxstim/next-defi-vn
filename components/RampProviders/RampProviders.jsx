import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import rampProviders from "./RampProviders.json";

export default function BuyCryptoProviders() {
  return (
    <div className="buy-menu-grid">
      {rampProviders.map((provider) => (
        <a
          key={provider.id}
          href={provider.referLink}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="buy-menu-button">
            <div className="buy-menu-items">
              <div>
                <div className="buy-item-content">
                  <Image
                    style={{ marginTop: "0px" }}
                    src={provider.logo}
                    alt="xsilver"
                    width={30}
                    height={30}
                  />
                  <div className="buy-item-name">{provider.name}</div>
                  {provider.tag ? (
                    <div className="buy-rec-badge">{provider.tag}</div>
                  ) : null}
                </div>
                <div className="buy-item-desc">{provider.desc}</div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
