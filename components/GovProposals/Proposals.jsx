import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import proposalslist from "./Proposals.json";

export default function ProposalsList() {
  const { t } = useTranslation("governance");
  const [proposalsList, setProposalsList] = useState(proposalslist);

  return (
    <>
      <div className="proposal-create-button">Create proposal</div>
      <div className="proposal-container">
        {proposalsList.map((proposal) => (
          <div className="proposal-box" key={proposal.id}>
            <div className="proposal-id">{proposal.id}</div>
            <div className="proposal-title">{proposal.title}</div>
            <div className="proposal-status-active">{proposal.status}</div>
          </div>
        ))}
      </div>
    </>
  );
}
