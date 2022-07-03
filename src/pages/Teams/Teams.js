import React from 'react'
import {
  TeamsSection,
  TeamsHeading,
  TeamsTitle,
  TeamsContainer,
  TeamsRow,
  TeamsColumn,
  TeamsBox,

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
                  
                </TeamsBox>
              </TeamsColumn>
            </TeamsRow>
          </TeamsContainer>

      </TeamsSection>
    </>
  );
}

export default Teams