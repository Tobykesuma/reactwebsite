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
            </TeamsRow>
          </TeamsContainer>

      </TeamsSection>
    </>
  );
}

export default Teams