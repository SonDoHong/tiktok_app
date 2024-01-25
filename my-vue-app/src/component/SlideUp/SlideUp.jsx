import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./SlideUp.module.scss";
import { ArrowUpIcon, DesktopIcon, MobileIcon, XMarkIcon } from "../Icons";
import Button from "../Button";

const cx = classNames.bind(styles);

function SlideUp() {
    const [show, setShow] = useState(false);

    const [toggle, setToggle] = useState(false)

    window.onscroll = function () {
        myFunction();
    };

    function myFunction() {
        if (document.documentElement.scrollTop > 1) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const handleMenuDownload = () => {
        setToggle(!toggle)
    };

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Để có hiệu ứng cuộn mượt (nếu được hỗ trợ)
        });
    }

    return (
        <div className={cx("wrapper", { abc: show })}>
            <div className={cx('wrap-download')}>
                <Button
                    className={cx("btn-download", {animation: toggle,})}
                    rounded
                    onClick={handleMenuDownload}
                >
                    Tải ứng dụng
                </Button>
                
                <div className={cx('download-list', {animation: toggle,})}>
                    <div className={cx('download-item')}>
                        <DesktopIcon className={cx('download-item-icon')} />
                        <span className={cx('download-item-label')} >Tải TikTok dành cho máy tính để bàn</span>
                    </div>

                    <div className={cx('download-item')}>
                        <MobileIcon className={cx('download-item-icon')} />
                        <span className={cx('download-item-label')} >Tải Ứng dụng TikTok</span>
                    </div>

                    <button className={cx('btn-close')} onClick={handleMenuDownload}>
                        <XMarkIcon />
                    </button>
                </div>
            </div>

            <button className={cx("btn-slide-up")} onClick={handleScrollTop}>
                <ArrowUpIcon />
            </button>
        </div>
    );
}

export default SlideUp;
