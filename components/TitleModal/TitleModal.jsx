// import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
// import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";

export default function TitleModal(content) {
  // const router = useRouter();
  const [show, setShow] = useState(false);
  // function that shows modal
  const showModal = () => {
    setShow(true);
  };

  // function that closes modal
  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      {show ? (
        <div className="modal">
          <div className="modal-content">
            <div className="close" onClick={hideModal}>
              Close
            </div>
            <h2>{content.data.title}</h2>
            <p>{content.data.desc}</p>
            <ul>
              {content.data.resources ? content.data.resources.map((resource) => (
                <li key={resource.id}>
                  <a href={resource.url} target="_blank">{resource.name}</a>
                </li>
              )) : null}
            </ul>
          </div>
        </div>
      ) : null}
      <div className="title-modal" onClick={showModal}>
        {content.data.title}
      </div>
    </>
  );
}
