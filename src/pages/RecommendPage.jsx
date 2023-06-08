import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Calculator from '../components/Calculator';

const RecommendPage = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Calculator {...hookProps} />
        </div>
    )
}

export default RecommendPage;