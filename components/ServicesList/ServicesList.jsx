// import { useState, useReducer } from "react";
// import { useTranslation } from "next-i18next";
// import {
//   Column,
//   Table as ReactTable,
//   PaginationState,
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   ColumnDef,
//   OnChangeFn,
//   flexRender,
//   createColumnHelper,
// } from "@tanstack/react-table";
// import serviceslist from "./ServicesList.json";

// export default function ServicesList() {
//   const defaultData = serviceslist;

//   const columnHelper = createColumnHelper();

//   const columns = [
//     columnHelper.accessor((row) => row.name, {
//       id: "name",
//       header: () => <span>{t("table1")}</span>,
//       cell: (info) => <a href={info.row.original.web}>{info.getValue()}</a>,
//     }),
//     columnHelper.accessor((row) => row.servicetype, {
//       id: "servicetype",
//       header: () => <span>{t("table2")}</span>,
//       cell: (info) => <div className="text-type-box-wrap">{info.getValue()}</div>,
//     }),
//     columnHelper.accessor((row) => row.description, {
//       id: "description",
//       header: () => <span>{t("table3")}</span>,
//       cell: (info) => <div className="text-box-wrap">{info.getValue()}</div>,
//     }),
//     columnHelper.accessor((row) => row.web, {
//       id: "contact",
//       header: () => <span>{t("table4")}</span>,
//       cell: (info) => (
//         <>
//           <span>
//             <a href={info.row.original.telegram}>
//               <img src="/icons8-telegram.svg" alt="Telegram SVG" />
//             </a>
//           </span>
//           <span>
//             <a href={info.row.original.web}>
//               <img src="/icons8-webpage.svg" alt="Website SVG" />
//             </a>
//           </span>
//           <span>
//             <a href={info.row.original.email}>
//               <img src="/icons8-circled-envelope.svg" alt="Email SVG" />
//             </a>
//           </span>
//         </>
//       ),
//     }),
//   ];

//   function Table({ data, columns }) {
//     const table = useReactTable({
//       data,
//       columns,
//       // Pipeline
//       getCoreRowModel: getCoreRowModel(),
//       getFilteredRowModel: getFilteredRowModel(),
//       getPaginationRowModel: getPaginationRowModel(),
//       debugTable: false,
//     });

//     return (
//       <div>
//         <div className="table-horizontal-wrap">
//         <table>
//           <thead>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <th key={header.id}>
//                       {header.isPlaceholder ? null : (
//                         <div>
//                           {flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                           {header.column.getCanFilter() ? (
//                             <div>
//                               <Filter column={header.column} table={table} />
//                             </div>
//                           ) : null}
//                         </div>
//                       )}
//                     </th>
//                   );
//                 })}
//               </tr>
//             ))}
//           </thead>
//           <tbody>
//             {table.getRowModel().rows.map((row) => {
//               return (
//                 <tr key={row.id}>
//                   {row.getVisibleCells().map((cell) => {
//                     return (
//                       <td key={cell.id}>
//                         {flexRender(
//                           cell.column.columnDef.cell,
//                           cell.getContext()
//                         )}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         </div>
//         <div className="table-button-nav-wrap">
//           <button
//             className="table-button"
//             onClick={() => table.setPageIndex(0)}
//             disabled={!table.getCanPreviousPage()}
//           >
//             {"<<"}
//           </button>
//           <button
//             className="table-button"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             {"<"}
//           </button>
//           <button
//             className="table-button"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             {">"}
//           </button>
//           <button
//             className="table-button"
//             onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//             disabled={!table.getCanNextPage()}
//           >
//             {">>"}
//           </button>
//           <div>
//             <span style={{ marginRight: "5px" }}>
//               <span>{t("page")}</span>
//               <strong>
//                 {table.getState().pagination.pageIndex + 1} {t("of")}{" "}
//                 {table.getPageCount()}
//               </strong>
//             </span>
//             <span>
//               {t("gt-page")}
//               <input
//                 type="number"
//                 defaultValue={table.getState().pagination.pageIndex + 1}
//                 onChange={(e) => {
//                   const page = e.target.value ? Number(e.target.value) - 1 : 0;
//                   table.setPageIndex(page);
//                 }}
//                 style={{ marginLeft: "5px", width: "50px" }}
//               />
//             </span>
//             <div>
//               <select
//                 className="table-selector-bar"
//                 value={table.getState().pagination.pageSize}
//                 onChange={(e) => {
//                   table.setPageSize(Number(e.target.value));
//                 }}
//               >
//                 {[10, 20, 30, 40, 50].map((pageSize) => (
//                   <option key={pageSize} value={pageSize}>
//                     {t("show")} {pageSize}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//         {/* <div>{table.getRowModel().rows.length} Rows</div> */}
//         {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
//       </div>
//     );
//   }
//   function Filter({ column, table }) {
//     const firstValue = table
//       .getPreFilteredRowModel()
//       .flatRows[0]?.getValue(column.id);

//     const columnFilterValue = column.getFilterValue();

//     return typeof firstValue === "number" ? (
//       <div>
//         <input
//           type="number"
//           value={columnFilterValue?.[0] ?? ""}
//           onChange={(e) =>
//             column.setFilterValue((old) => [e.target.value, old?.[1]])
//           }
//           placeholder={`Min`}
//           className="table-min-max-filter-bar"
//         />
//         <input
//           type="number"
//           value={columnFilterValue?.[1] ?? ""}
//           onChange={(e) =>
//             column.setFilterValue((old) => [old?.[0], e.target.value])
//           }
//           placeholder={`Max`}
//           className="table-min-max-filter-bar"
//         />
//       </div>
//     ) : (
//       <input
//         type="text"
//         value={columnFilterValue ?? ""}
//         onChange={(e) => column.setFilterValue(e.target.value)}
//         placeholder={"🔎 ..."}
//         className="table-filter-bar"
//       />
//     );
//   }
//   const [data, setData] = useState(() => [...defaultData]);
//   const rerender = useReducer(() => ({}), {})[1];
//   const { t } = useTranslation("services");

//   return (
//     <>
//       <h2>{t("subtitle")}</h2>
//       <Table
//         {...{
//           data,
//           columns,
//         }}
//       />
//     </>
//   );
// }

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import servicesList from "./ServicesList.json";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ServicesList() {
  const [index, setIndex] = useState(20);
  const [services, setServices] = useState(servicesList.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { t } = useTranslation("services");
  const fetchData = () => {
    if (services.length >= servicesList.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setServices(services.concat(servicesList.slice(index, index + 20)));
      setIndex(index + 20);
    }, 2000);
  };

  // a function to use drop down menu to filter services by tag
  const filterServicesDropdown = (event) => {
    let filteredServicesList = [];
    filteredServicesList = servicesList.filter((service) => service.tag === event.target.value);
    setServices(filteredServicesList.slice(0, index));
  };

  return (
    <InfiniteScroll
      dataLength={services.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>{t("load")}</h4>}
      endMessage={
        <p
          style={{
            marginTop: "50px",
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {t("end")}
        </p>
      }
    >
      {/* <label>Choose a tag:</label>
      <select name="services" id="services" onChange={filterServicesDropdown}>
        <option value="media">None</option>
        <option value="media">Media</option>
        <option value="analytics">Analytics</option>
        <option value="marketing">Marketing</option>
      </select> */}
      <div className="service-box">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <div href={service.web} className="service-brand-name">
              {service.name}
            </div>
            <div className="service-desc">
              {router.locale === "en" ? service.desc : service.descVi}
            </div>
            <div style={{ marginTop: "15px" }}>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-telegram.svg" alt="Telegram SVG" />
                </a>
              </span>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-twitter.svg" alt="Twitter SVG" />
                </a>
              </span>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-discord.svg" alt="Discord SVG" />
                </a>
              </span>
              <span>
                <a href={"https://defi.vn"}>
                  <img src="/icons8-circled-envelope.svg" alt="Email SVG" />
                </a>
              </span>
            </div>
            <Link href={service.web}>
              <a style={{ textDecoration: "none", color: "#000000" }}>
                <div className="service-cta">{t("cta")}</div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}
