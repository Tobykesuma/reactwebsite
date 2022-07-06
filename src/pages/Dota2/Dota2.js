import React from 'react';
import { BsFillTrophyFill } from 'react-icons/bs';
import {
  Dota2Section,
  Dota2BackGround,
  Dota2Title,
  Dota2TitleHeading,
  Dota2Border,
  Dota2Logo,
  PlayerDotaBoxContainer,
  PlayersDota2Box,

} from './Dotoa2Elements';

const Dota2 = () => {
  return (
    <>
      <Dota2Section>
        <Dota2BackGround>
        <Dota2Border />
        <Dota2Title>
          <Dota2TitleHeading>
            DOTA 2 ROSTER
          </Dota2TitleHeading>
          {/* <Dota2Logo />   */}
        </Dota2Title>
       </Dota2BackGround>
          <PlayersDota2Box>
            
          </PlayersDota2Box>
      </Dota2Section>
    </>
  )
}

export default Dota2