import { useTranslation } from "next-i18next";
import Devs from './Devs.json';
import Jobs from './Jobs.json';

export default function NeedHelp() {

  const { t } = useTranslation("help");

  return (
    <>
      <h2>{t("employees-list")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("htable1")}</th>
            <th>{t("htable2")}</th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line
            Devs.map((list) => (
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
      <h2>{t("employers-list")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("htable1")}</th>
            <th>{t("htable2")}</th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line
            Jobs.map((list) => (
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
