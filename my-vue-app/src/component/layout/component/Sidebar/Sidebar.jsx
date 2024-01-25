import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import config from "../../../../config";
import Menu, { MenuItem } from "./Menu";
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from "../../../Icons";
import SuggestedAccounts from "../../../SuggestedAccounts/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    iconActive={<LiveActiveIcon />}
                />
            </Menu>

            <SuggestedAccounts preview label='Suggested Accounts' />

            <SuggestedAccounts label='Following accounts' />
        </div>
    );
}

export default Sidebar;
