import classNames from "classnames/bind"
import { useEffect, useRef, useState } from "react"

import styles from './VideoProvider.module.scss'
import * as videoServices from "../../apiServices/videoServices"
import Image from '../Image'
import Button from '../Button'
import { MusicIcon } from '../Icons'

const cx = classNames.bind(styles)

const VideoProvider = () => {
    const [datas, setDatas] = useState([])
    const [page, setPage] = useState(1)
    const videoRef = useRef()

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoServices.getListVideo('for-you', page)

            // setDatas([1, 2])

            setDatas(result)
        }
        
        fetchApi()
    }, [])
    // console.log(videoRef.current.play())
    
    const handleVideoEnded = () => {
        videoRef.current.volume = 0.01
        videoRef.current.play()
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-item')}>
                <div className={cx('heading')}>
                    <Image className={cx('img')} src='' alt=''/>
                    
                    <div className={cx('video-info')}>
                        <a href="/" className={cx('name-link')}>
                            <h3 className={cx('nick-name')}>SonDo77</h3>
                            <h4 className={cx('full-name')}>hong son</h4>
                        </a>

                        <div className={cx('description')}>Chúc ae cuối tuần vui vẻ!!,    cuối tuần vui vẻ!!cuối tuần vui vẻ!!cuối tuần vui vẻ!!cuối tuần vui vẻ!!</div>

                        <a className={cx('music-link')} href="/">
                            <MusicIcon className={cx('music-icon')} />
                            Nhạc nền - Sơn Đỗ
                        </a>
                    </div>

                    <Button className={cx('follow-btn')} outline>Follow</Button>
                </div>

                <video className={cx('video')} ref={videoRef} src={datas[1]?.file_url} onClick={handleVideoEnded} onEnded={handleVideoEnded}></video>
            </div>
            <h3 className={cx('video-item')}>Video profile</h3>
            <h3 className={cx('video-item')}>Video profile</h3>
            <h3 className={cx('video-item')}>Video profile</h3>
            <h3 className={cx('video-item')}>Video profile</h3>
        </div>
    )
}

export default VideoProvider