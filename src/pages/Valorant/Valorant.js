import React from 'react';
import {
  ValorantSection,
  ValorantBackGround,
  ValorantBorder,
  ValorantTitle,
  ValorantTitleHeading,
  ValorantBoxContainer,
  ValorantList,
  ValorantBox,
  ValorantImagePlayers,
  ImgAeror,
  ImgMexicola,
  ImgHazard,
  ImgArzt,
  ValorantName,
  ValorantNameTitle,
  ValorantBio,

} from './ValorantElements';


const Valorant = () => {
  return (
    <>
      <ValorantSection>
        <ValorantBackGround>
          <ValorantBorder />
          <ValorantTitle>
            <ValorantTitleHeading>
              VALORANT ROSTER
            </ValorantTitleHeading>
          </ValorantTitle>
        </ValorantBackGround>

        <ValorantBoxContainer>
          <ValorantList>
            <ValorantBox>
              <ValorantImagePlayers>
                <ImgAeror />
              </ValorantImagePlayers>
              <ValorantName>
                <ValorantNameTitle>
                  AEROR
                </ValorantNameTitle>
              </ValorantName>
              <ValorantBio>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
              </ValorantBio>
            </ValorantBox>
          </ValorantList>
        </ValorantBoxContainer>

        <ValorantBoxContainer>
          <ValorantList>
            <ValorantBox>
              <ValorantImagePlayers>
                <ImgArzt />
              </ValorantImagePlayers>
              <ValorantName>
                <ValorantNameTitle>
                  ARZT
                </ValorantNameTitle>
              </ValorantName>
              <ValorantBio>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
              </ValorantBio>
            </ValorantBox>
          </ValorantList>
        </ValorantBoxContainer>

        <ValorantBoxContainer>
          <ValorantList>
            <ValorantBox>
              <ValorantImagePlayers>
                <ImgHazard />
              </ValorantImagePlayers>
              <ValorantName>
                <ValorantNameTitle>
                  HAZARD
                </ValorantNameTitle>
              </ValorantName>
              <ValorantBio>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
              </ValorantBio>
            </ValorantBox>
          </ValorantList>
        </ValorantBoxContainer>

        <ValorantBoxContainer>
          <ValorantList>
            <ValorantBox>
              <ValorantImagePlayers>
                <ImgMexicola />
              </ValorantImagePlayers>
              <ValorantName>
                <ValorantNameTitle>
                  MEXICOLA
                </ValorantNameTitle>
              </ValorantName>
              <ValorantBio>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
              </ValorantBio>
            </ValorantBox>
          </ValorantList>
        </ValorantBoxContainer>


      </ValorantSection>
    </>
  )
}

export default Valorant