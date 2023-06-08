import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Introduction from '../components/Introduction2'

const IntroductionPage2 = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Introduction {...hookProps} />
        </div>
    )
}

export default IntroductionPage2;