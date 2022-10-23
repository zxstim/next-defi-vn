import { useTranslation } from "next-i18next";
import python from './Python.json';

export default function Python() {

  const { t } = useTranslation("code");

  return (
    <>
      <h2>Python</h2>
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
            python.map((list) => (
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
