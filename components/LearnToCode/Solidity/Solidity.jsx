import { useTranslation } from "next-i18next";
import solidity from './Solidity.json';

export default function Solidity() {

  const { t } = useTranslation("code");

  return (
    <>
      <h2>Solidity</h2>
      <table>
        <thead>
          <tr>
            <th>{t("ctable1")}</th>
            <th>{t("ctable2")}</th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line
            solidity.map((list) => (
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>
                  <a href={list.web}>{list.name}</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
