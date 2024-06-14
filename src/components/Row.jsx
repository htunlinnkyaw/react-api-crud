import React, { useContext } from "react";
import { DataContext } from "./contexts/DataContext";
import RowDelBtn from "./RowDelBtn";
import RowEditBtn from "./RowEditBtn";

const Row = ({ course: { id, title, short_name, fee } }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4 cell-editable row-title" cell-col="title">
        {title}
      </td>
      <td className="px-6 py-4 cell-editable row-short" cell-col="short_name">
        {short_name}
      </td>
      <td className="px-6 py-4 cell-editable row-fee text-end" cell-col="fee">
        {fee}
      </td>
      <td className="px-6 py-4 text-right flex gap-2">
        <RowEditBtn id={id} />
        <RowDelBtn id={id} />
      </td>
    </tr>
  );
};

export default Row;
