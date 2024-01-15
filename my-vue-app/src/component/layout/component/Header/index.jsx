import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faGear,
    faCoins,
    faUser,
    faSignOut
} from '@fortawesome/free-solid-svg-icons'


import styles from './Header.module.scss'
import images from '../../../../assets/images'
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
import ActionItem from './ActionItem';
import Search from '../Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback end help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hihi'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    }
]

function Header() {
    // VD: Người dùng đăng nhập
    const currentUser = true
    
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <ActionItem className={cx('actions-btn')}/>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image 
                                className={cx('user-avatar')} 
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4d5baa83758e9090e6d9c60b826c377d~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1705140000&x-signature=A7sOjmg1ikywJdWtSe2NP7cWjcw%3D" 
                                alt="andrelifehack"
                                fallback='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f838f66973d28808c47e62671645054f.jpeg?lk3s=a5d48078&x-expires=1705219200&x-signature=hsz0ECkB6IUNtu0LxX0VXGRAzAM%3D'
                            />
                        ): (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header