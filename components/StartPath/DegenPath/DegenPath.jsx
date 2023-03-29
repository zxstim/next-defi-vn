import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "./DegenPath.module.css";

export default function DegenPath() {
  const router = useRouter();

  return (
    <>
        <h2>The Art of Being a Cryptocurrency Degen: A Guide to Taking Excessive Risks</h2>
        <p>Are you tired of being a boring investor with a well-balanced portfolio? Do you crave the thrill of volatility and heart-stopping dips? If so, then welcome to the world of the cryptocurrency degens. In this guide, we'll dive deep into the art of taking excessive risks in the world of crypto. Disclaimer: this is a satire piece that should not be taken seriously.</p>
        <div className={styles.announcement}>This guide will be updated regularly for more useful and relatable contents.</div>
        <div className={styles.warning}>This is satire!</div>
        <h2>Throw Out All Your Logical Thinking</h2>
        <p>The first step in becoming a true cryptocurrency degen is to throw all your logical thinking out the window. Who needs fundamentals when you can make decisions based on gut feelings and random Twitter influencers? Take risks on those coins with little to no market cap, and don't forget to fomo into the latest hype train.</p>
        <h2>Embrace Volatility</h2>
        <p>The world of crypto is known for its wild price swings, so as a degen, you must embrace volatility. Instead of running away from a dip, double down and buy more. It doesn't matter if the coin is crashing, buy the dip and hold on for dear life. Remember, the bigger the risk, the sweeter the reward.</p>
        <h2>Excessive Leverage is Your Friend</h2>
        <p>Leverage can be a degen's best friend. Instead of trading with your hard-earned dollars, take excessive leverage and trade like a maniac. It doesn't matter if you lose it all or make a fortune, it's all part of the thrill.</p>
        <h2>Ignore All Warning Signs</h2>
        <p>Even when it seems like everything is falling apart, ignore all warning signs and keep pushing forward. Ignore your gut, your logical thinking, and your friends telling you to stop. Instead, keep buying, keep hodling, and keep trading like there's no tomorrow.</p>
        <h2>Embrace the Rekt Life</h2>
        <p>Finally, as a true cryptocurrency degen, you must embrace the rekt life. It's not a matter of if you'll get rekt, it's a matter of when. But don't worry, getting rekt is just another part of the thrilling ride that is crypto trading. Dust yourself off and keep going until you hit your next big win.</p>
        <h2>Final words</h2>
        <p>Being a cryptocurrency degen is not for the faint of heart or the stable-minded investor. It's a world of excessive risk-taking, volatility, and the constant fear of getting rekt. But for those who thrive on the thrill and the allure of the big win, it can be the ride of a lifetime. With these five steps, you're on your way to becoming a true crypto degen. But remember, this is just a satire piece, and please trade responsibly.</p>
    </>
  );
}
