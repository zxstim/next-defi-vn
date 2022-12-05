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
import devs from "./Devs.json";

export default function DevsList() {
  const defaultData = devs;

  const columnHelper = createColumnHelper();

  // Custom component to render Genres
  const DevType = ({ values }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
      <div className="badge-wrap">
        {values.map((devType, idx) => {
          return (
            <span key={idx} className="badge">
              {devType}
            </span>
          );
        })}
      </div>
    );
  };

  const StackType = ({ values }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
      <div className="badge-wrap">
        {values.map((stackType, idx) => {
          return (
            <span key={idx} className="badge-stack">
              {stackType}
            </span>
          );
        })}
      </div>
    );
  };

  const columns = [
    columnHelper.accessor((row) => row.name, {
      id: "name",
      header: () => <span>{t("htable1")}</span>,
      cell: (info) => <a href={info.row.original.web}>{info.getValue()}</a>
    }),
    columnHelper.accessor((row) => row.devtype, {
      id: "devtype",
      header: () => <span>{t("htable2")}</span>,
      cell: (info) => <DevType values={info.getValue()} />,
    }),
    columnHelper.accessor((row) => row.stack, {
      id: "stack",
      header: () => <span>{t("htable3")}</span>,
      cell: (info) => <StackType values={info.getValue()} />,
    }),
    columnHelper.accessor((row) => row.name, {
      id: "social",
      header: () => <span>{t("htable4")}</span>,
      cell: (info) => (
        <>
          <span>
            <a href={info.row.original.github}>
              <img src="/icons8-github.svg" alt="Github SVG" />
            </a>
          </span>
          <span>
            <a href={info.row.original.twitter}>
              <img src="/icons8-twitter.svg" alt="Twitter SVG" />
            </a>
          </span>
          <span>
            <a href={info.row.original.telegram}>
              <img src="/icons8-telegram.svg" alt="Telegram SVG" />
            </a>
          </span>
          <span>
            <a href={info.row.original.email}>
              <img src="/icons8-circled-envelope.svg" alt="Email SVG" />
            </a>
          </span>
        </>
      ),
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
        <div className="table-horizontal-wrap">
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
        </div>
        <div className="table-button-nav-wrap">
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
          className="table-min-max-filter-bar"
        />
        <input
          type="number"
          value={columnFilterValue?.[1] ?? ""}
          onChange={(e) =>
            column.setFilterValue((old) => [old?.[0], e.target.value])
          }
          placeholder={`Max`}
          className="table-min-max-filter-bar"
        />
      </div>
    ) : (
      <input
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(e) => column.setFilterValue(e.target.value)}
        placeholder={"🔎 ..."}
        className="table-filter-bar"
      />
    );
  }
  const [data, setData] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];
  const { t } = useTranslation("help");

  return (
    <>
      <h2>{t("dev-list")}</h2>
      <Table
        {...{
          data,
          columns,
        }}
      />
    </>
  );
}
