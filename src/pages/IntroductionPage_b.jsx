import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Introduction from '../components/Introduction_b'

const IntroductionPageB = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Introduction {...hookProps} />
        </div>
    )
}

export default IntroductionPageB;