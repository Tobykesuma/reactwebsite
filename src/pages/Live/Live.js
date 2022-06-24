import React from 'react';
import ReactPlayer from 'react-player';
import {
    LiveVideoSection,
    LiveVideoTitle,
    LiveVideoWrapper,
    LiveVideoBox,
    LiveMobile,
} from './LiveElements';
import './Live.css';

const Live = () => {
  return (
    <>
        <LiveVideoSection>
            <LiveVideoTitle>
                LIVE STREAMING
            </LiveVideoTitle>
            <LiveVideoWrapper>
                <LiveVideoBox>
                    <ReactPlayer url='https://www.youtube.com/watch?v=_U6kObwLyUg' height={1000} width={1800} className='LiveMobile'/>
                </LiveVideoBox>
            </LiveVideoWrapper>
        </LiveVideoSection>
    </>
  )
}

export default Live;