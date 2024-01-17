import TippyHeadless from "@tippyjs/react/headless"
import classNames from "classnames/bind"

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '../../Popper'
import MenuItem from "./MenuItem"
import Header from "./Header"
import { useState } from "react"

const cx = classNames.bind(styles)

function Menu({ children, items=[], hideOnClick=false }) {

    const [history, setHistory] = useState([{ data: items }])

    // Lấy ra phần tử cuối mảng
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem className={cx('menu-item')} key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                }
            }}/>
        })
    }

    return (
        <TippyHeadless
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            offset={[12, 8]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && 
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1))
                                }}
                            />
                        }
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            hideOnClick={hideOnClick}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </TippyHeadless>
    )
}

export default Menu