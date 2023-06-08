import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Search from '../components/Search';

const SearchPage = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Search {...hookProps} />
        </div>
    )
}

export default SearchPage;