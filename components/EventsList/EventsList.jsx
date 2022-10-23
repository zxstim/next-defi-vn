import { useTranslation } from "next-i18next";
import eventslist from './EventsList.json';
import hackathonlist from './HackathonList.json';

export default function EventsList() {

  const { t } = useTranslation("events");

  return (
    <>
      <h2>{t("events-list")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("etable1")}</th>
            <th>{t("etable2")}</th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line
            eventslist.map((list) => (
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
      <h2>{t("hackathons-list")}</h2>
      <table>
        <thead>
          <tr>
            <th>{t("etable1")}</th>
            <th>{t("etable2")}</th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line
            hackathonlist.map((list) => (
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
