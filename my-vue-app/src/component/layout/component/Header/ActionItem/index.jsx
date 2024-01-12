import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind'
import 'tippy.js/dist/tippy.css';

import styles from './ActionItem.module.scss'
import { InboxIcon, MessageIcon, PlusIcon } from '../../../../Icons';

const cx = classNames.bind(styles)

const ActionItem = ({ className }) => {
    const action_items = [
        {
            tippy_content: 'Tải lên',
            icon: <PlusIcon />
        },
        {
            tippy_content: 'Tin nhắn',
            icon: <MessageIcon />
        },
        {
            tippy_content: 'Hộp thư',
            icon: <InboxIcon />,
            subBadge: 1
        }
    ]

    return <div className={cx('wrapper')}>
        {action_items.map((item, index) => (
            <Tippy
                key={index}
                content={item.tippy_content}
                placement='bottom'
                delay={[0, 100]}
            >
                <button className={className}>
                    {item.subBadge && <span className={cx('sub-badge')}>{item.subBadge}</span>}
                    {item.icon}
                </button>
            </Tippy>
        ))}
    </div>
}

export default ActionItem