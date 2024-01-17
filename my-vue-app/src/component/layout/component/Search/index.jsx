import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "../../../../component/Popper";
import AccountItem from "../../../AccountItem";
import { SearchIcon } from "../../../Icons";
import { useDebounce } from '../../../../hooks'
import * as searchServices from "../../../../apiServices/searchServices";

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);

    const [showResult, setShowResult] = useState(true)

    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const debounce = useDebounce(searchValue, 500)

    useEffect(() => {
        if(!debounce.trim()) {
            setSearchResult([]);

            return
        }

        const fetchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debounce)
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi()
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('')

        setSearchResult([])

        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const value = e.target.value
        
        if(!value.startsWith(' ')) {
            setSearchValue(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Hello')
    }

    return (
        //Using a wrapper <div> or <span> tag around 
        // the reference element solves this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResult.map(result => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <form className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx("search-btn")} onClick={handleSubmit} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
