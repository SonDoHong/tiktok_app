import classNames from "classnames/bind"

import Header from "../component/Header"
import styles from './HeaderOnly.module.scss'

const cx = classNames.bind(styles)

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />

            <div className={cx('container')}>
                {children}
            </div>
        </div>
    )
}

export default HeaderOnly