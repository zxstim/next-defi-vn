import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import proposalslist from "./Proposals.json";

export default function ProposalsList() {
  const { t } = useTranslation("governance");
  const [proposalsList, setProposalsList] = useState(proposalslist);

  // function to select className based on status
  const selectClassName = (status) => {
    switch (status) {
      case "Canceled":
        return "proposal-status-canceled";
      case "Defeated":
        return "proposal-status-defeated";
      case "Executed":
        return "proposal-status-executed";
      default:
        return "proposal-status-active";
    }
  };

  return (
    <>
      <button className="proposal-create-button">Create proposal</button>
      <div className="proposal-container">
        {proposalsList.map((proposal) => (
          <div className="proposal-box" key={proposal.id}>
            <div className="proposal-id">{proposal.id}</div>
            <div className="proposal-title">{proposal.title}</div>
            <div className={selectClassName(proposal.status)}>{proposal.status}</div>
          </div>
        ))}
      </div>
    </>
  );
}
