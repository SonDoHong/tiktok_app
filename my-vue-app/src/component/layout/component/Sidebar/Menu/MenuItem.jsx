import { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconActive }) {
    const [active, setActive] = useState(false);

    

    return (
        <NavLink
            className={(nav) => {
                return cx("menu-item", { active: nav.isActive });
            }}
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconActive}</span>
            <span className={cx("title")}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
