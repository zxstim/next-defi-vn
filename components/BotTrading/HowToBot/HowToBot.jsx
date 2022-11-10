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
import commify from "../../../utils/commify";
import formatTimeStamp from "../../../utils/formatTimestamp";

export default function HowToBot() {
  
  const { t } = useTranslation("bot");

  return (
    <>
      <h2>{t("header1")}</h2>
      <ol>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ol>
    </>
  );
}
