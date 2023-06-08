import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Recommend from '../components/Recommend';

const RecommendPage = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Recommend {...hookProps} />
        </div>
    )
}

export default RecommendPage;