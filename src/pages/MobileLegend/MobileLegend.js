import React from 'react';
import {
  MobileLegendSection,
  MobileLegendBackGround,
  MobileLegendBorder,
  MobileLegendTitle,
  MobileLegendTitleHeading,
  MobileLegendBoxContainer,
  MobileLegendList,
  MobileLegendBox,
  MLBBImagePlayers,
  ImgAzraa,
  ImgNicc,
  ImgReyzo,
  ImgWinnie,
  ImgZyro,
  MLBBName,
  MLBBNameTitle,
  MLBBBio,
  AchievementsTrophy,
  AchievementsTrophyTitle,
  TrophySection,
  TrophyContainer,
  TrophyBox,
  TrophyIcons,
  TrophyText,
  TrophyTextName,
  TrophyHR,

} from './MobileLegendElements';
import { BsFillTrophyFill } from 'react-icons/bs';


const MobileLegend = () => {
  return (
    <>
      <MobileLegendSection>
        <MobileLegendBackGround>
          <MobileLegendBorder />
          <MobileLegendTitle>
            <MobileLegendTitleHeading>
              MOBILE LEGEND ROSTER
            </MobileLegendTitleHeading>
          </MobileLegendTitle>
        </MobileLegendBackGround>

      <MobileLegendBoxContainer>
        <MobileLegendList>
          <MobileLegendBox>
            <MLBBImagePlayers>
              <ImgAzraa />
            </MLBBImagePlayers>
            <MLBBName>
              <MLBBNameTitle>
                AZRAA
              </MLBBNameTitle>
            </MLBBName>
            <MLBBBio>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
            </MLBBBio>
          </MobileLegendBox>
        </MobileLegendList>
      </MobileLegendBoxContainer>
      

      <MobileLegendBoxContainer>
        <MobileLegendList>
          <MobileLegendBox>
            <MLBBImagePlayers>
              <ImgNicc />
            </MLBBImagePlayers>
            <MLBBName>
              <MLBBNameTitle>
                NICCC
              </MLBBNameTitle>
            </MLBBName>
            <MLBBBio>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
            </MLBBBio>
          </MobileLegendBox>
        </MobileLegendList>
      </MobileLegendBoxContainer>

      <MobileLegendBoxContainer>
        <MobileLegendList>
          <MobileLegendBox>
            <MLBBImagePlayers>
              <ImgReyzo />
            </MLBBImagePlayers>
            <MLBBName>
              <MLBBNameTitle>
                REYZO
              </MLBBNameTitle>
            </MLBBName>
            <MLBBBio>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
            </MLBBBio>
          </MobileLegendBox>
        </MobileLegendList>
      </MobileLegendBoxContainer>

      <MobileLegendBoxContainer>
        <MobileLegendList>
          <MobileLegendBox>
            <MLBBImagePlayers>
              <ImgWinnie />
            </MLBBImagePlayers>
            <MLBBName>
              <MLBBNameTitle>
                WINNIE
              </MLBBNameTitle>
            </MLBBName>
            <MLBBBio>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
            </MLBBBio>
          </MobileLegendBox>
        </MobileLegendList>
      </MobileLegendBoxContainer>

      <MobileLegendBoxContainer>
        <MobileLegendList>
          <MobileLegendBox>
            <MLBBImagePlayers>
              <ImgZyro />
            </MLBBImagePlayers>
            <MLBBName>
              <MLBBNameTitle>
                ZYRO
              </MLBBNameTitle>
            </MLBBName>
            <MLBBBio>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum porro, reprehenderit quibusdam ab nihil magnam eum molestias. Ipsam alias natus ratione odit repellat accusantium similique recusandae et deserunt ea?
            </MLBBBio>
          </MobileLegendBox>
        </MobileLegendList>
      </MobileLegendBoxContainer>

      {/* Trophy MLBB Team */}
      <AchievementsTrophy>
        <AchievementsTrophyTitle>
          ACHIEVEMENTS
        </AchievementsTrophyTitle>

        <TrophySection>
          <TrophyContainer>
            <TrophyBox>
              <TrophyIcons>
                <BsFillTrophyFill />
              </TrophyIcons>
              <TrophyText>
                2nd
              </TrophyText>
              <TrophyTextName>
                Game Anti MEntok
              </TrophyTextName>
              <TrophyHR />
            </TrophyBox>
          </TrophyContainer>
        </TrophySection>

        <TrophySection>
          <TrophyContainer>
            <TrophyBox>
              <TrophyIcons>
                <BsFillTrophyFill />
              </TrophyIcons>
              <TrophyText>
                1st
              </TrophyText>
              <TrophyTextName>
                Erafone National Region Palembang
              </TrophyTextName>
              <TrophyHR />
            </TrophyBox>
          </TrophyContainer>
        </TrophySection>

        <TrophySection>
          <TrophyContainer>
            <TrophyBox>
              <TrophyIcons>
                <BsFillTrophyFill />
              </TrophyIcons>
              <TrophyText>
                2nd
              </TrophyText>
              <TrophyTextName>
                BARDI MLBB Championship
              </TrophyTextName>
              <TrophyHR />
            </TrophyBox>
          </TrophyContainer>
        </TrophySection>

      </AchievementsTrophy>



      </MobileLegendSection>
    
    </>
  );
}

export default MobileLegend;