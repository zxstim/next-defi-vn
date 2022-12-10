import { useState } from "react";

export default function Polygon() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h2>Ethereum</h2>
      <ul>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae finibus mauris. Donec ante arcu, pretium at hendrerit vel, venenatis vel arcu. Nulla facilisi. Etiam consectetur orci ex, quis scelerisque risus lacinia id. Maecenas tempor eros semper ex consequat interdum. Curabitur pharetra erat eget quam condimentum, vitae varius massa rhoncus. Aliquam ante justo, semper quis fringilla vitae, dapibus in est. Quisque porttitor libero quis blandit facilisis. Nulla in euismod mi, at gravida magna. Proin porta molestie tellus, vitae mattis magna molestie vel.</p>
      <ul>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae finibus mauris. Donec ante arcu, pretium at hendrerit vel, venenatis vel arcu. Nulla facilisi. Etiam consectetur orci ex, quis scelerisque risus lacinia id. Maecenas tempor eros semper ex consequat interdum. Curabitur pharetra erat eget quam condimentum, vitae varius massa rhoncus. Aliquam ante justo, semper quis fringilla vitae, dapibus in est. Quisque porttitor libero quis blandit facilisis. Nulla in euismod mi, at gravida magna. Proin porta molestie tellus, vitae mattis magna molestie vel.</p>
    </>

  );
}
