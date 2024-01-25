import classNames from "classnames/bind"

import styles from './SuggestedAccounts.module.scss'
import AccountItem from "./AccountItem"

const cx = classNames.bind(styles)


function SuggestedAccounts({ label, preview }) {
    // console.log(preview)
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            
            <AccountItem preview={preview} />
            <AccountItem preview={preview} />
            <AccountItem preview={preview} />

            <p className={cx('more-btn')}>See all</p>
        </div>
    )
}

export default SuggestedAccounts