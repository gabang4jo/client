import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Introduction from '../components/Introduction1_b';

const IntroductionPage1B = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Introduction {...hookProps} />
        </div>
    )
}

export default IntroductionPage1B;