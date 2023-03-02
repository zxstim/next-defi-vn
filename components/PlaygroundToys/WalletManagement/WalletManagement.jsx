import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ethers } from "ethers";

export default function WalletManagement() {
    const [wallet, setWallet] = useState(null);
    const [mnemonic, setMnemonic] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [showWalletLoaded, setShowWalletLoaded] = useState(false);

    // function to create a wallet and save to localStorage
    function createWallet() {
        const newWallet = ethers.Wallet.createRandom();
        setWallet(newWallet.address);
        setMnemonic(newWallet.mnemonic.phrase);
        setPrivateKey(newWallet.privateKey);
        localStorage.setItem("wallet", JSON.stringify(newWallet.address));
        localStorage.setItem("mnemonic", JSON.stringify(newWallet.mnemonic.phrase));
        localStorage.setItem("privateKey", JSON.stringify(newWallet.privateKey));
    };
    
    // function to delete wallet from localStorage
    function deleteWallet() {
        setWallet(null);
        setMnemonic(null);
        setPrivateKey(null);
        localStorage.removeItem("wallet");
        localStorage.removeItem("mnemonic");
        localStorage.removeItem("privateKey");
    };

    // function to load wallet from localStorage
    function loadWallet() {
        const wallet = JSON.parse(localStorage.getItem("wallet"));
        const mnemonic = JSON.parse(localStorage.getItem("mnemonic"));
        const privateKey = JSON.parse(localStorage.getItem("privateKey"));
        setWallet(wallet);
        setMnemonic(mnemonic);
        setPrivateKey(privateKey);
        setShowWalletLoaded(true);
    };

    // function to show a modal with wallet info
    function showWallet() {
        const wallet = JSON.parse(localStorage.getItem("wallet"));
        const mnemonic = JSON.parse(localStorage.getItem("mnemonic"));
        const privateKey = JSON.parse(localStorage.getItem("privateKey"));
        setWallet(wallet);
        setMnemonic(mnemonic);
        setPrivateKey(privateKey);
        setShowWalletModal(true);
    };

    function closeWalletModal() {
        setShowWalletModal(false);
    }

    // function to truncate a string in the middle given a fixed length
    function truncateString(str, num) {
        if (str.length <= num) {
            return str
        }
        const midpoint = Math.ceil(str.length / 2);
        const charsToShow = num / 2;
        const frontChars = str.substr(0, midpoint - charsToShow);
        const backChars = str.substr(midpoint + charsToShow, str.length - 1);
        return frontChars + "..." + backChars;
    };


    return (
        <div>
            <h3>Create a wallet with the button below 👇</h3>
            <button onClick={createWallet}>Create wallet</button>
            <h3>If you had created a wallet but exited, you can load the wallet with the button below 👇</h3>
            <button onClick={loadWallet}>Load wallet</button>
            {showWalletLoaded ? 
                (
                    <div>
                        <div>{`This wallet was loaded: ${wallet}`}</div>
                    </div>
                ) : null
            }
            <h3>If you want to see your wallet, click the button below 👇</h3>
            {showWalletModal ? 
                (    
                    <div>
                        <button onClick={closeWalletModal}>Hide wallet</button>
                        <div>{`Address: ${wallet}`}</div>
                        <div>{`Mnemonic: ${mnemonic}`}</div>
                        <div>{`Private Key: ${privateKey}`}</div>
                    </div>
                ) : <button onClick={showWallet}>Show wallet</button>
            }
            <h3>If you want to delete the wallet, click the button below 👇</h3>
            <button onClick={deleteWallet}>Delete wallet</button>
        </div>
    )



    // const wallet = ethers.Wallet.createRandom()
    // console.log('address:', wallet.address)
    // console.log('mnemonic:', wallet.mnemonic.phrase)
    // console.log('privateKey:', wallet.privateKey)   
}