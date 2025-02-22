export interface TreeNode {
    id: string;
    name: string;
    children?: TreeNode[];
  }
  
  const treeData: TreeNode[] = [
    {
      id: "1",
      name: "Home",
      children: [
        {
          id: "1-1",
          name: "Dashboard",
        },
        {
          id: "1-2",
          name: "Profile",
        },
      ],
    },
    {
      id: "2",
      name: "Products",
      children: [
        {
          id: "2-1",
          name: "Electronics",
          children: [
            { id: "2-1-1", name: "Mobiles" },
            { id: "2-1-2", name: "Laptops" },
          ],
        },
        {
          id: "2-2",
          name: "Clothing",
          children: [
            { id: "2-2-1", name: "Men" },
            { id: "2-2-2", name: "Women" },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "Contact Us",
    },
  ];
  
  export default treeData;
  