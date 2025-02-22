import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  return (
    <li>
      <p>{item.name}</p>
      {item.children && item.children.length !== 0 ? (
        <MenuList key={item.id} list={item.children} />
      ) : null}
    </li>
  );
}
