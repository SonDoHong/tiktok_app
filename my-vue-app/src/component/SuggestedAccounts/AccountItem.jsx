import classNames from "classnames/bind"

import styles from './SuggestedAccounts.module.scss'
import Image from '../Image'
import { CheckIcon } from '../Icons'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4fa99f7e2b9b8e43f2f4e4234b02461d.jpeg?lk3s=a5d48078&x-expires=1705827600&x-signature=%2FrgjDG%2B2XWeyn%2Fbg3vUD8QbCYrA%3D" alt="EnriqueStory" />

            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>enriqueStory</strong>
                    <CheckIcon  className={cx('icon')}/>
                </p>
                <p className={cx('name')}>enriqueStory</p>
            </div>
        </div>
    )
}

export default AccountItem