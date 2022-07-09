import React from 'react';
import { BsFillTrophyFill } from 'react-icons/bs';
import {
  Dota2Section,
  Dota2BackGround,
  Dota2Title,
  Dota2TitleHeading,
  Dota2Border,
  PlayerDotaBoxContainer,
  PlayersDota2Box,
  PlayerList,
  PlayersDota2Image,
  PlayerDota2Img,
  PlayerDota2Name,
  PlayerDota2NameTitle,
  PlayerDota2Bio,
  PlayerUsagi,
  PlayerHated,
  PlayerHavinci,
  TBDImage,

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
        </Dota2Title>
       </Dota2BackGround>

          <PlayerDotaBoxContainer>
            <PlayerList>
              <PlayersDota2Box>
                  <PlayersDota2Image>
                    <TBDImage />
                  </PlayersDota2Image>
                  <PlayerDota2Name>
                    <PlayerDota2NameTitle>
                      TBD
                    </PlayerDota2NameTitle>
                  </PlayerDota2Name>
                  <PlayerDota2Bio>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntu perspiciatis 
                  </PlayerDota2Bio>
              </PlayersDota2Box>  
              </PlayerList>
          </PlayerDotaBoxContainer>

          <PlayerDotaBoxContainer>
            <PlayerList>
              <PlayersDota2Box>
                  <PlayersDota2Image>
                    <PlayerDota2Img />
                  </PlayersDota2Image>
                  <PlayerDota2Name>
                    <PlayerDota2NameTitle>
                      RAMZ
                    </PlayerDota2NameTitle>
                  </PlayerDota2Name>
                  <PlayerDota2Bio>
                      Ramzi Bayhaki "Ramz" Memiliki pengalaman di tim seperti EVOS, PG.Barrack, Alter Ego, MS Chonburi (Thailand).
                        Sekarang "Ramz" bermain di Team M11 di posisi 2 (Midlane).
                  </PlayerDota2Bio>
              </PlayersDota2Box>  
              </PlayerList>
          </PlayerDotaBoxContainer>

          <PlayerDotaBoxContainer>
            <PlayerList>
              <PlayersDota2Box>
                  <PlayersDota2Image>
                    <PlayerUsagi />
                  </PlayersDota2Image>
                  <PlayerDota2Name>
                    <PlayerDota2NameTitle>
                      USAGI
                    </PlayerDota2NameTitle>
                  </PlayerDota2Name>
                  <PlayerDota2Bio>
                      Rudy Lucky Thutang "Usagi" pernah masuk beberapa tim Indonesia seperti The Prime, dan Alter Ego. Usagi sendiri di Team M11 bermain di posisi 3 (Offlaner).
                  </PlayerDota2Bio>
              </PlayersDota2Box>  
              </PlayerList>
          </PlayerDotaBoxContainer>

          <PlayerDotaBoxContainer>
            <PlayerList>
              <PlayersDota2Box>
                  <PlayersDota2Image>
                    <PlayerHated />
                  </PlayersDota2Image>
                  <PlayerDota2Name>
                    <PlayerDota2NameTitle>
                      HATED
                    </PlayerDota2NameTitle>
                  </PlayerDota2Name>
                  <PlayerDota2Bio>
                      Daniel AU "Hated" MMR Peak 9100.Daniel pernah bermain di beberapa Tim Online dan tim NGID Esports.Dan sekarang di Team M11 bermain sebagai posisi 4 (Soft Support).
                  </PlayerDota2Bio>
              </PlayersDota2Box>  
              </PlayerList>
          </PlayerDotaBoxContainer>

          <PlayerDotaBoxContainer>
            <PlayerList>
              <PlayersDota2Box>
                  <PlayersDota2Image>
                    <PlayerHavinci />
                  </PlayersDota2Image>
                  <PlayerDota2Name>
                    <PlayerDota2NameTitle>
                      HAVINCI
                    </PlayerDota2NameTitle>
                  </PlayerDota2Name>
                  <PlayerDota2Bio>
                      Muhammad Farhan Abdul Azis "Havinci" MMR Peak 9800, Pernah bermain di beberapa tim Online dan tim Hans Pro Gaming. Dan sekarang bermain di Team M11 sebagai Pos 5 (Hard Support).
                  </PlayerDota2Bio>
              </PlayersDota2Box>  
              </PlayerList>
          </PlayerDotaBoxContainer>

          {/* Trophy  */}
          

      </Dota2Section>
    </>
  )
}

export default Dota2