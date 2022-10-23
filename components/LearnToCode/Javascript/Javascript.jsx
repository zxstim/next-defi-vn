import { useTranslation } from "next-i18next";
import javascript from './Javascript.json';

export default function Javascript() {

  const { t } = useTranslation("code");

  return (
    <>
      <h2>Javascript</h2>
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
            javascript.map((list) => (
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
