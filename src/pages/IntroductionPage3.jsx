import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Introduction from '../components/Introduction3'

const IntroductionPage3 = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Introduction {...hookProps} />
        </div>
    )
}

export default IntroductionPage3;