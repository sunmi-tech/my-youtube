function Search (){
    return (
        <div id="search">
            <div className="search_inner">
                <label htmlFor="searchinput">
                    <span className="ir">검색</span>
                </label>
                <input type="search"
                        id="searchinput"
                        placeholder="검색어를 입력해주세요"
                        autoComplete="off"
                        className="search_input"
                />
            </div>
        </div>
    )
}

export default Search