import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Strategy from '../components/Strategy';

const RecommendPage1 = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Strategy {...hookProps} />
        </div>
    )
}

export default RecommendPage1;