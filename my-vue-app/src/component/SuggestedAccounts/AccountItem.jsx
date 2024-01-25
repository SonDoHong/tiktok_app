import classNames from "classnames/bind";
import TippyHeadless from "@tippyjs/react/headless";

import styles from "./SuggestedAccounts.module.scss";
import Image from "../Image";
import { CheckIcon } from "../Icons";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem({ preview = false }) {
    const renderPreview = (props) => {
        if (preview) {
            return (
                <div tabIndex="-1" {...props}>
                    <PopperWrapper>
                        <AccountPreview />
                    </PopperWrapper>
                </div>
            );
        }
    };

    return (
        <div>
            <TippyHeadless
                appendTo={document.getElementById("root")} // Nối content vào root / trong trường hợp này dùng để zindex cho content nổi hẳn nên
                interactive // dùng để tương tác bên trong content
                delay={[800, 0]}
                offset={[24, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <Image
                        className={cx("avatar")}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fa99f7e2b9b8e43f2f4e4234b02461d.jpeg?lk3s=a5d48078&x-expires=1705827600&x-signature=%2FrgjDG%2B2XWeyn%2Fbg3vUD8QbCYrA%3D"
                        alt="EnriqueStory"
                    />

                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>enriqueStory</strong>
                            <CheckIcon className={cx("icon")} />
                        </p>
                        <p className={cx("name")}>enriqueStory</p>
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default AccountItem;
