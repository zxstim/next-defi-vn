import { useState } from "react";
import Link from "next/link";

export default function Ethereum() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h2>What is Ethereum?</h2>
      <p>These articles below will help you understand more about Ethereum:</p>
      <ul>
        <li><a href="https://ethereum.org/en/what-is-ethereum/">"What is Ethereum?" by Ethereum.org</a></li>
      </ul>
      <h2>Choose your wallet!</h2>
      <p>You can pick one of the wallet apps below to store your Ether (here, we only promote self-custody):</p>
      <ul>
        <li><a href="https://metamask.io/">Metamask</a></li>
        <li><a href="https://www.ledger.com/">Ledger</a></li>
        <li><a href="https://www.myetherwallet.com/">MyEtherWallet</a></li>
        <li><a href="https://www.trustwallet.com/">Trust Wallet</a></li>
        <li><Link href="/discover/wallets">and more...</Link></li>
      </ul>
      <h2>Get some testnet ETH!</h2>
      <p>For development, you need testnet ETH. Currently, there are only 2 Ethereum test networks, Goerli and Sepolia. You can get the testnet ETH from the faucets below:</p>
      <ul>
        <li><a href="https://goerlifaucet.com/">Goerli Faucet by Alchemy</a></li>
        <li><a href="https://faucet.paradigm.xyz/">Paradigm faucet</a></li>
      </ul>
      <h2>Development IDE</h2>
      <p>For development, you need an IDE (Integrated Development Environment). Here are some IDEs that you can use:</p>
      <ul>
        <li><a href="https://remix.ethereum.org/">Remix IDE</a></li>
        <li><a href="https://code.visualstudio.com/">VS Code</a></li>
      </ul>
      <h2>Development Frameworks</h2>
      <p>To assist smart contract development, testing and deployment, it's great to utilize one of the below development frameworks:</p>
      <ul>
        <li><a href="https://hardhat.org/">Hardhat</a></li>
        <li><a href="https://truffleframework.com/">Truffle</a></li>
        <li><a href="https://eth-brownie.readthedocs.io/en/stable/">Brownie</a></li>
        <li><a href="https://getfoundry.sh/">Foundry</a></li>
      </ul>
      <h2>Tutorials</h2>
      <p>Try out these tutorials to gain fundamental knowledge:</p>
      <ul>
        <li><a href="https://speedrunethereum.com/">Speedrun Ethereum</a></li>
        <li><a href="https://ethernaut.openzeppelin.com/">Openzeppelin Ethernaut</a></li>
      </ul>
    </>
  );
}
