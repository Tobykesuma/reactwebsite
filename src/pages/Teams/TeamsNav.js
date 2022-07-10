import React from 'react';
import {
  TeamNavSection,
  TeamNavContainer,
  TeamNavBackGround,
  TeamNavWrapper,
  TeamNavSub,
  TeamNavTitle,
  TeamsBox,
  TeamsBoxImg,
  TeamsImgBox,
  TeamsLink,
  TeamsImageGameDota,
  TeamsEfect,
  TeamsMeta,
  TeamsLinkLink,
  TeamsNameGame,
  TeamsImageGameMLBB,
  TeamsImageGamePUBGM,
  TeamsImageGameValorant,
  TeamNavContainer2,
  TeamNavColumns,

} from './TeamsElements';
import Achievements from '../Achievements/Achievements';







const TeamsNav = () => {
  return (
    <>
      <TeamNavSection>
        <TeamNavContainer>
          <TeamNavBackGround />
          <TeamNavWrapper>
            <TeamNavSub>
              The Team M11 Founders wanted to create different. A trust base group of people where everyone would have a voice. And it did not take long for them to start making history. We may be skilled, but the true strength of Team M11 is it is people.  
            </TeamNavSub>
            <TeamNavTitle>
              MEET OUR TEAMS
            </TeamNavTitle>
          </TeamNavWrapper>

          <TeamNavContainer2>
            <TeamNavColumns>
                <TeamsBox>
                  <TeamsBoxImg>
                    <TeamsImgBox>
                        <TeamsLink to='/team/dota2'>
                          <TeamsImageGameDota />
                        </TeamsLink>
                    </TeamsImgBox>
                    <TeamsEfect />
                  </TeamsBoxImg>
                      <TeamsMeta>
                        <TeamsLinkLink to='/team/dota2'>
                            <TeamsNameGame>
                              DOTA 2
                            </TeamsNameGame>
                        </TeamsLinkLink>
                      </TeamsMeta>
                </TeamsBox>
              </TeamNavColumns>

              <TeamNavColumns>
                <TeamsBox>
                  <TeamsBoxImg>
                    <TeamsImgBox>
                        <TeamsLink to='/team/pubgmobile'>
                          <TeamsImageGamePUBGM />
                        </TeamsLink>
                    </TeamsImgBox>
                    <TeamsEfect />
                  </TeamsBoxImg>
                      <TeamsMeta>
                        <TeamsLinkLink to='/team/pubgmobile'>
                            <TeamsNameGame>
                              PUBGM
                            </TeamsNameGame>
                        </TeamsLinkLink>
                      </TeamsMeta>
                </TeamsBox>
              </TeamNavColumns>

              <TeamNavColumns>
                <TeamsBox>
                  <TeamsBoxImg>
                    <TeamsImgBox>
                        <TeamsLink to='/team/mlbb'>
                          <TeamsImageGameMLBB />
                        </TeamsLink>
                    </TeamsImgBox>
                    <TeamsEfect />
                  </TeamsBoxImg>
                      <TeamsMeta>
                        <TeamsLinkLink to='/team/mlbb'>
                            <TeamsNameGame>
                              MLBB
                            </TeamsNameGame>
                        </TeamsLinkLink>
                      </TeamsMeta>
                </TeamsBox>
              </TeamNavColumns>

              <TeamNavColumns>
                <TeamsBox>
                  <TeamsBoxImg>
                    <TeamsImgBox>
                        <TeamsLink to='/team/valorant'>
                          <TeamsImageGameValorant />
                        </TeamsLink>
                    </TeamsImgBox>
                    <TeamsEfect />
                  </TeamsBoxImg>
                      <TeamsMeta>
                        <TeamsLinkLink to='/team/valorant'>
                            <TeamsNameGame>
                              VALORANT
                            </TeamsNameGame>
                        </TeamsLinkLink>
                      </TeamsMeta>
                </TeamsBox>
              </TeamNavColumns>
          </TeamNavContainer2>
        </TeamNavContainer>
      </TeamNavSection>

      <Achievements />
    </>
  )
}

export default TeamsNav;