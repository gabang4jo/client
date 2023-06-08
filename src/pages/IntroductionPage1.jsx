import React from 'react'
import GlobalStyle from '../components/GlobalStyle';
import Introduction from '../components/Introduction1';

const IntroductionPage1 = ({...hookProps}) => {
    return (
        <div>
            <GlobalStyle />
            <Introduction {...hookProps} />
        </div>
    )
}

export default IntroductionPage1;