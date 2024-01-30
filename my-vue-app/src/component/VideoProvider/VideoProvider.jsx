import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import styles from "./VideoProvider.module.scss";
import * as videoServices from "../../apiServices/videoServices";
import Image from "../Image";
import Button from "../Button";
import {
    BookMarkIcon,
    CommentIcon,
    HeartIcon,
    MusicIcon,
    PlayIcon,
    ShareIcon,
    UpLongIcon,
    VolumeIcon,
} from "../Icons";

const cx = classNames.bind(styles);

const VideoProvider = () => {
    const [datas, setDatas] = useState([]);
    const [page, setPage] = useState(1);
    const videoRef = useRef();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoServices.getListVideo("for-you", page);

            setDatas(result);
        };

        fetchApi();
    }, []);

    const handleVideoEnded = () => {
        videoRef.current.volume = 0.01;
        videoRef.current.play();
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("video-item")}>
                <div className={cx("heading")}>
                    <Image
                        className={cx("img")}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d490699ecf67f8bef738f4feca69f922~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706342400&x-signature=NtIUetP7SS1lbPa5nnvcAExmgWE%3D"
                        alt=""
                    />

                    <div className={cx("video-info")}>
                        <a href="/" className={cx("name-link")}>
                            <h3 className={cx("nick-name")}>SonDo77</h3>
                            <h4 className={cx("full-name")}>hong son</h4>
                        </a>

                        <div className={cx("description")}>
                            Chúc ae cuối tuần vui vẻ!!, cuối tuần vui vẻ!!cuối
                            tuần vui vẻ!!cuối tuần vui vẻ!!cuối tuần vui vẻ!!
                        </div>

                        <a className={cx("music-link")} href="/">
                            <MusicIcon className={cx("music-icon")} />
                            Nhạc nền - Sơn Đỗ
                        </a>
                    </div>

                    <Button className={cx("follow-btn")} outline>
                        Follow
                    </Button>
                </div>

                {/* Video content */}
                <div className={cx("container")}>
                    <div className={cx("video-container")}>
                        <video
                            className={cx("video")}
                            ref={videoRef}
                            src={datas[1]?.file_url}
                            onClick={handleVideoEnded}
                            onEnded={handleVideoEnded}
                        ></video>

                        <div className={cx("controller")}>
                            <div className={cx("controller-heading")}>
                                <div className={cx(["controller-btn"])}>
                                    <PlayIcon />
                                </div>

                                <div className={cx(["roll-auto-btn", "controller-btn"])}>
                                    <UpLongIcon />
                                </div>

                                <div className={cx("controller-btn")}>
                                    <VolumeIcon />
                                </div>
                            </div>
                            
                            <div className={cx('controller-time')}>
                                <input type="range" className={cx('input-range')} />

                                <span>00:00/01:23</span>
                            </div>
                        </div>
                    </div>

                    <div className={cx("action-container")}>
                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <HeartIcon />
                            </span>
                            <strong className={cx("action-label")}>
                                18.7k
                            </strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <CommentIcon />
                            </span>

                            <strong className={cx("action-label")}>253</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <BookMarkIcon />
                            </span>

                            <strong className={cx("action-label")}>582</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <ShareIcon />
                            </span>

                            <strong className={cx("action-label")}>158</strong>
                        </button>
                    </div>
                </div>
            </div>

            <div className={cx("video-item")}>
                <div className={cx("heading")}>
                    <Image
                        className={cx("img")}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d490699ecf67f8bef738f4feca69f922~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706342400&x-signature=NtIUetP7SS1lbPa5nnvcAExmgWE%3D"
                        alt=""
                    />

                    <div className={cx("video-info")}>
                        <a href="/" className={cx("name-link")}>
                            <h3 className={cx("nick-name")}>SonDo77</h3>
                            <h4 className={cx("full-name")}>hong son</h4>
                        </a>

                        <div className={cx("description")}>
                            Chúc ae cuối tuần vui vẻ!!, cuối tuần vui vẻ!!cuối
                            tuần vui vẻ!!cuối tuần vui vẻ!!cuối tuần vui vẻ!!
                        </div>

                        <a className={cx("music-link")} href="/">
                            <MusicIcon className={cx("music-icon")} />
                            Nhạc nền - Sơn Đỗ
                        </a>
                    </div>

                    <Button className={cx("follow-btn")} outline>
                        Follow
                    </Button>
                </div>

                {/* Video content */}
                <div className={cx("container")}>
                    <div className={cx("video-container")}>
                        <video
                            className={cx("video")}
                            ref={videoRef}
                            src={datas[2]?.file_url}
                            onClick={handleVideoEnded}
                            onEnded={handleVideoEnded}
                        ></video>
                    </div>

                    <div className={cx("action-container")}>
                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <HeartIcon />
                            </span>
                            <strong className={cx("action-label")}>
                                18.7k
                            </strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <CommentIcon />
                            </span>

                            <strong className={cx("action-label")}>253</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <BookMarkIcon />
                            </span>

                            <strong className={cx("action-label")}>582</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <ShareIcon />
                            </span>

                            <strong className={cx("action-label")}>158</strong>
                        </button>
                    </div>
                </div>
            </div>

            <div className={cx("video-item")}>
                <div className={cx("heading")}>
                    <Image
                        className={cx("img")}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d490699ecf67f8bef738f4feca69f922~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706342400&x-signature=NtIUetP7SS1lbPa5nnvcAExmgWE%3D"
                        alt=""
                    />

                    <div className={cx("video-info")}>
                        <a href="/" className={cx("name-link")}>
                            <h3 className={cx("nick-name")}>SonDo77</h3>
                            <h4 className={cx("full-name")}>hong son</h4>
                        </a>

                        <div className={cx("description")}>
                            Chúc ae cuối tuần vui vẻ!!, cuối tuần vui vẻ!!cuối
                            tuần vui vẻ!!cuối tuần vui vẻ!!cuối tuần vui vẻ!!
                        </div>

                        <a className={cx("music-link")} href="/">
                            <MusicIcon className={cx("music-icon")} />
                            Nhạc nền - Sơn Đỗ
                        </a>
                    </div>

                    <Button className={cx("follow-btn")} outline>
                        Follow
                    </Button>
                </div>

                {/* Video content */}
                <div className={cx("container")}>
                    <div className={cx("video-container")}>
                        <video
                            className={cx("video")}
                            ref={videoRef}
                            src={datas[4]?.file_url}
                            onClick={handleVideoEnded}
                            onEnded={handleVideoEnded}
                        ></video>
                    </div>

                    <div className={cx("action-container")}>
                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <HeartIcon />
                            </span>
                            <strong className={cx("action-label")}>
                                18.7k
                            </strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <CommentIcon />
                            </span>

                            <strong className={cx("action-label")}>253</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <BookMarkIcon />
                            </span>

                            <strong className={cx("action-label")}>582</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <ShareIcon />
                            </span>

                            <strong className={cx("action-label")}>158</strong>
                        </button>
                    </div>
                </div>
            </div>

            <div className={cx("video-item")}>
                <div className={cx("heading")}>
                    <Image
                        className={cx("img")}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d490699ecf67f8bef738f4feca69f922~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1706342400&x-signature=NtIUetP7SS1lbPa5nnvcAExmgWE%3D"
                        alt=""
                    />

                    <div className={cx("video-info")}>
                        <a href="/" className={cx("name-link")}>
                            <h3 className={cx("nick-name")}>SonDo77</h3>
                            <h4 className={cx("full-name")}>hong son</h4>
                        </a>

                        <div className={cx("description")}>
                            Chúc ae cuối tuần vui vẻ!!, cuối tuần vui vẻ!!cuối
                            tuần vui vẻ!!cuối tuần vui vẻ!!cuối tuần vui vẻ!!
                        </div>

                        <a className={cx("music-link")} href="/">
                            <MusicIcon className={cx("music-icon")} />
                            Nhạc nền - Sơn Đỗ
                        </a>
                    </div>

                    <Button className={cx("follow-btn")} outline>
                        Follow
                    </Button>
                </div>

                {/* Video content */}
                <div className={cx("container")}>
                    <div className={cx("video-container")}>
                        <video
                            className={cx("video")}
                            ref={videoRef}
                            src={datas[3]?.file_url}
                            onClick={handleVideoEnded}
                            onEnded={handleVideoEnded}
                        ></video>
                    </div>

                    <div className={cx("action-container")}>
                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <HeartIcon />
                            </span>
                            <strong className={cx("action-label")}>
                                18.7k
                            </strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <CommentIcon />
                            </span>

                            <strong className={cx("action-label")}>253</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <BookMarkIcon />
                            </span>

                            <strong className={cx("action-label")}>582</strong>
                        </button>

                        <button className={cx("action-btn")}>
                            <span className={cx("action-icon")}>
                                <ShareIcon />
                            </span>

                            <strong className={cx("action-label")}>158</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoProvider;
