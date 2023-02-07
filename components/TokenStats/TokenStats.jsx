import React, { useState, useEffect } from "react";

export default function TokenStats(props) {
  return (
    <div>
      <h1>ShibaShekels (SHSH)</h1>
      <p>Contract address: {props.contractAddress}</p>
      <p>Your SHSH balance: {} SHSH</p>
      <p>Total supply: {props.totalSupply} SHSH</p>
      <p>Total burned: {props.totalBurned} SHSH</p>
    </div>
  );
}
