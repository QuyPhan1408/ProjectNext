/** @format */
"use client";

import React, {useState} from "react";
import {Table as TableAnt} from "antd";
import type {TableColumnsType, TableProps} from "antd";

type TableRowSelection<T> = TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  name: string;
  status: number;
  revision: number;
  author: string;
  lastCommitDate: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Revision",
    dataIndex: "revision",
  },
  {
    title: "Author",
    dataIndex: "author",
  },
  {
    title: "Last commit date",
    dataIndex: "lastCommitDate",
  },
];
export const dataWip: DataType[] = [];
for (let i = 0; i < 46; i++) {
    dataWip.push({
    key: i,
    name: `Edward King ${i}`,
    status: 32,
    revision: 50,
    author: "sys_admin",
    lastCommitDate: "6 day ago",
  });
}

const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <TableAnt
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataWip}
      pagination={false}
    />
  );
};

export default Table;
