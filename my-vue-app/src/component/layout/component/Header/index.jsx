import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss'
import images from '../../../../assets/images'

const cx = classNames.bind(styles)

// console.log(images.logo)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <Tippy content='Tìm kiếm'>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Tippy>
                </div>

                <div className={cx('actions')}>
                    <button>Upload</button>
                    <button>Log In</button>
                </div>
            </div>
        </header>
    )
}

export default Header