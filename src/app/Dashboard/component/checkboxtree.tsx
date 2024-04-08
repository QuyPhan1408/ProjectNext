/** @format */

import {useState} from "react";

/** @format */
export interface TreeNode {
  id: number;
  label: string;
  children?: TreeNode[];
}

// Danh sách dữ liệu cây
export const treeData: TreeNode[] = [
  {
    id: 1,
    label: "Node 1",
    children: [
      {id: 2, label: "Node 1.1"},
      {id: 3, label: "Node 1.2"},
    ],
  },
  {
    id: 4,
    label: "Node 2",
    children: [
      {id: 5, label: "Node 2.1"},
      {id: 6, label: "Node 2.2"},
    ],
  },
];
const CheckboxTree: React.FC<{data: TreeNode[]}> = ({data}) => {
  //   const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>(
  //     {}
  //   );

  //   const handleCheckboxChange = (itemId: number) => {
  //     const newCheckedItems = {...checkedItems};

  //     // Đảo trạng thái của checkbox
  //     newCheckedItems[itemId] = !newCheckedItems[itemId];

  //     // Nếu là nút cha, chọn hoặc bỏ chọn tất cả nút con
  //     const item = data.find((item) => item.id === itemId);
  //     if (item && item.children) {
  //       item.children.forEach((child) => {
  //         newCheckedItems[child.id] = newCheckedItems[itemId];
  //       });
  //     }

  //     // Nếu là nút con, kiểm tra nút cha và bỏ chọn nếu cần
  //     const parentId = data.find((item) =>
  //       item.children?.some((child) => child.id === itemId)
  //     )?.id;
  //     if (parentId) {
  //       const allChildrenChecked = data
  //         .find((item) => item.id === parentId)
  //         ?.children?.every((child) => newCheckedItems[child.id]);
  //       newCheckedItems[parentId] = !!allChildrenChecked;
  //     }

  //     setCheckedItems(newCheckedItems);
  //   };

  //   const renderCheckboxList = (items: TreeNode[]): JSX.Element[] => {
  //     return items.map((item) => (
  //       <div key={item.id}>
  //         <label>
  //           <input
  //             type='checkbox'
  //             checked={checkedItems[item.id] || false}
  //             onChange={() => handleCheckboxChange(item.id)}
  //           />
  //           {item.label}
  //         </label>
  //         {item.children && renderCheckboxList(item.children)}
  //       </div>
  //     ));
  //   };

  //   return <div>{renderCheckboxList(data)}</div>;

  const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>(
    {}
  );

  const handleCheckboxChange = (itemId: number) => {
    const newCheckedItems = {...checkedItems};
    newCheckedItems[itemId] = !newCheckedItems[itemId];
    setCheckedItems(newCheckedItems);
  };

  const getCheckedNodes = (
    items: TreeNode[],
    path: string[] = []
  ): string[] => {
    let checkedNodes: string[] = [];

    items.forEach((item) => {
      if (checkedItems[item.id]) {
        const newPath = [...path, item.label];
        checkedNodes.push(newPath.join("/"));
      }

      if (item.children) {
        checkedNodes = [
          ...checkedNodes,
          ...getCheckedNodes(item.children, [...path, item.label]),
        ];
      }
    });

    return checkedNodes;
  };

  const renderCheckboxList = (items: TreeNode[]): JSX.Element[] => {
    return items.map((item) => (
      <div key={item.id}>
        <label>
          <input
            type='checkbox'
            checked={checkedItems[item.id] || false}
            onChange={() => handleCheckboxChange(item.id)}
          />
          {item.label}
        </label>
        {item.children && renderCheckboxList(item.children)}
      </div>
    ));
  };

  const checkedNodes = getCheckedNodes(treeData);

  return (
    <div>
      {renderCheckboxList(treeData)}
      <div>Checked nodes: {checkedNodes.join(", ")}</div>
    </div>
  );
};

export default CheckboxTree;
