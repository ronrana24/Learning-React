import MenuItem from "./menu-items";

export default function MenuList({list}) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length !== 0 ? (
                    list.map((listItem) => (
                        <MenuItem key={listItem.id} item={listItem.children} />
                    ))
                ) : null
            }
        </ul>
    )
};
