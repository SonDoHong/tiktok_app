import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/aa69348a37f30787ae9ffd21dc259295~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705039200&x-signature=PhqIReH4RJIuOBwYd1pTqdlcshk%3D"
                alt="Hoa" 
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>


        </div>
    )
}

export default AccountItem