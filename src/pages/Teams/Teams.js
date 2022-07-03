import React from 'react'
import {
  TeamsSection,
  TeamsHeading,
  TeamsTitle,
  TeamsContainer,
  TeamsRow,
  TeamsColumn,
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

} from './TeamsElements';




const Teams = () => {
  return (
    <>
      <TeamsSection>
        <TeamsHeading>
          <TeamsTitle>
            OUR TEAMS
          </TeamsTitle>
        </TeamsHeading>
          <TeamsContainer>
            <TeamsRow>

              <TeamsColumn>
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
              </TeamsColumn>

              <TeamsColumn>
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
              </TeamsColumn>

              <TeamsColumn>
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
              </TeamsColumn>

              <TeamsColumn>
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
              </TeamsColumn>

            </TeamsRow>
          </TeamsContainer>

      </TeamsSection>
    </>
  );
}

export default Teams;