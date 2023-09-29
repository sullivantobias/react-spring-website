import "./Menu.scss";

function Menu({ menuList }) {
    return (
        <ul className="Menu">
            {menuList?.map((element) => (
                <li key={element}>{element}</li>
            ))}
        </ul>
    );
}

export default Menu;
