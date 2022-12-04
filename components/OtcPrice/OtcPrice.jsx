import { useState, useReducer } from "react";
import { useTranslation } from "next-i18next";
import {
  Column,
  Table as ReactTable,
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  OnChangeFn,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import commify from "../../utils/commify";
import formatTimeStamp from "../../utils/formatTimestamp";


function formatCurrencyPair(currency) {
  return (
    <a
      href={
        "https://p2p.binance.com/en/trade/all-payments/" +
        currency.row.original.pair.split("-")[0] +
        "?fiat=" +
        currency.row.original.pair.split("-")[1]
      }
    >
      {currency.getValue()}
    </a>
  );
}

function formatCurrency(currency) {
  switch (currency.row.original.pair.split("-")[1]) {
    case "EUR":
      return `€${commify(currency.getValue())}`;
    case "RUB":
      return `₽${commify(currency.getValue())}`;
    case "CNY":
      return `￥${commify(currency.getValue())}`;
    case "THB":
      return `฿${commify(currency.getValue())}`;
    case "VND":
      return `${commify(currency.getValue())}₫`;
    default:
      return `$${commify(currency.getValue())}`;
  }
}

// const defaultData = investorlist;

export default function OtcPriceComponent(props) {
  const columnHelper = createColumnHelper();

  // function dateBetweenFilterFn(rows, id, filterValues) {
  //   const sd = filterValues[0] ? new Date(filterValues[0]) : undefined
  //   const ed = filterValues[1] ? new Date(filterValues[1]) : undefined

  //   if (ed || sd) {
  //     return rows.filter(r => {
  //       const cellDate = new Date(r.values[id])

  //       if (ed && sd) {
  //         return cellDate >= sd && cellDate <= ed
  //       } else if (sd){
  //         return cellDate >= sd
  //       } else if (ed){
  //         return cellDate <= ed
  //       }
  //     })
  //   } else {
  //     return rows
  //   }
  // }

  // function DateRangeColumnFilter({
  //   column: {
  //     filterValue = [],
  //     preFilteredRows,
  //     setFilter,
  //     id
  //   }})
  // {
  //   const [min, max] = React.useMemo(() => {
  //     let min = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)
  //     let max = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)

  //     preFilteredRows.forEach(row => {
  //       const rowDate = new Date(row.values[id])

  //       min = rowDate <= min ? rowDate : min
  //       max = rowDate >= max ? rowDate : max
  //     })

  //     return [min, max]
  //   }, [id, preFilteredRows])

  //   return (
  //     <div>
  //       <input
  //         min={min.toISOString().slice(0, 10)}
  //         onChange={e => {
  //           const val = e.target.value
  //           setFilter((old = []) => [val ? val : undefined, old[1]])
  //         }}
  //         type="date"
  //         value={filterValue[0] || ''}
  //       />
  //       {' to '}
  //       <input
  //         max={max.toISOString().slice(0, 10)}
  //         onChange={e => {
  //           const val = e.target.value
  //           setFilter((old = []) => [old[0], val ? val.concat('T23:59:59.999Z') : undefined])
  //         }}
  //         type="date"
  //         value={filterValue[1]?.slice(0, 10) || ''}
  //       />
  //     </div>
  //   )
  // }

  const columns = [
    columnHelper.accessor((row) => row.pair, {
      id: "pair",
      header: () => <span>{t("otc-t-1")}</span>,
      cell: (info) => formatCurrencyPair(info),
    }),
    columnHelper.accessor((row) => row.exchange, {
      id: "exchange",
      header: () => <span>{t("otc-t-2")}</span>,
      cell: (info) => (
        <a href="https://p2p.binance.com/en">{info.getValue()}</a>
      ),
    }),
    columnHelper.accessor((row) => row.max_bids, {
      id: "max_bids",
      header: () => <span>{t("otc-t-3")}</span>,
      cell: (info) => formatCurrency(info),
    }),
    columnHelper.accessor((row) => row.min_asks, {
      id: "min_asks",
      header: () => <span>{t("otc-t-4")}</span>,
      cell: (info) => formatCurrency(info),
    }),
    columnHelper.accessor((row) => row.created_at, {
      id: "created_at",
      header: () => <span>{t("otc-t-5")}</span>,
      cell: (info) => formatTimeStamp(info.getValue()),
      // Filter: DateRangeColumnFilter,
      // filter: "dateBetween" /* Custom Filter Type */
    }),
  ];

  function Table({ data, columns }) {
    const table = useReactTable({
      data,
      columns,
      // Pipeline
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: false,
    });

    return (
      <div>
        <div />
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                          ) : null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div />
        <div>
          <button
            className="table-button"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="table-button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="table-button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="table-button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <div>
            <span style={{ marginRight: "5px" }}>
              <span>{t("page")}</span>
              <strong>
                {table.getState().pagination.pageIndex + 1} {t("of")}{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <span>
              {t("gt-page")}
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                style={{ marginLeft: "5px", width: "50px" }}
              />
            </span>
            <div>
              <select
                className="table-selector-bar"
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {t("show")} {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* <div>{table.getRowModel().rows.length} Rows</div> */}
        {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
      </div>
    );
  }
  function Filter({ column, table }) {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id);

    const columnFilterValue = column.getFilterValue();

    return typeof firstValue === "number" ? (
      <div>
        <input
          type="number"
          value={columnFilterValue?.[0] ?? ""}
          onChange={(e) =>
            column.setFilterValue((old) => [e.target.value, old?.[1]])
          }
          placeholder={`Min`}
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            width: "50px",
            color: "#24292f",
            fontWeight: "normal",
          }}
        />
        <input
          type="number"
          value={columnFilterValue?.[1] ?? ""}
          onChange={(e) =>
            column.setFilterValue((old) => [old?.[0], e.target.value])
          }
          placeholder={`Max`}
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            width: "50px",
            color: "#24292f",
            fontWeight: "normal",
          }}
        />
      </div>
    ) : (
      <input
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(e) => column.setFilterValue(e.target.value)}
        placeholder={`Search...`}
        style={{
          marginTop: "5px",
          marginBottom: "5px",
          color: "#24292f",
          fontWeight: "normal",
          width: "100px",
        }}
      />
    );
  }

  const [data, setData] = useState(() => [...props.data]);
  const rerender = useReducer(() => ({}), {})[1];
  const { t } = useTranslation("buy");

  return (
    <>
      <h2>{t("otc")}</h2>
      <Table
        {...{
          data,
          columns,
        }}
      />
    </>
  );
}

// export default function OtcPriceComponent({ data, rowsPerPage }) {
//   // eslint-disable-next-line
//   const { t } = useTranslation("signals");
//   const [query, setQuery] = useState("")
//   const [page, setPage] = useState(1);
//   const { slice, range } = useTable(data, page, rowsPerPage);
//   var OtcPrices
//   if (query === '') {
//     OtcPrices = slice
//   } else {
//     OtcPrices = data
//   }

//     return (
//       <>
//         <h2 id="otc">{t('otc')}</h2>
//         <p>🔗 uid: otc</p>
//         <a href="https://buidl.defi.vn/explain-pyhash#heading-otc-price">{t('explain')}</a>
//         <div>🔎 <input style={{marginTop: "24px", marginBottom: "15px"}} placeholder={t('otc-search')} onChange={event => setQuery(event.target.value)}/></div>
//         <table>
//           <thead>
//             <tr>
//               <th>{t('otc-t-1')}</th>
//               <th>{t('otc-t-2')}</th>
//               <th>{t('otc-t-3')}</th>
//               <th>{t('otc-t-4')}</th>
//               <th>{t('otc-t-5')}</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               // eslint-disable-next-line
//               OtcPrices.filter(function (signal) {
//                 if (query === '') {
//                   return signal;
//                 } else if (signal.pair.toLowerCase().includes(query.toLowerCase())) {
//                   return signal;
//                 }}).map((signal) => (
//                   <tr key={signal.id}>
//                     {renderData(signal)}
//                   </tr>
//               )
//             )}
//           </tbody>
//         </table>
//         <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
//       </>
//     )
//   }
