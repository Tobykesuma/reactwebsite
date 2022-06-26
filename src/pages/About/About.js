import React from 'react';
import {
    AboutSection,
    AboutTitle,
    AboutLeft,
    AboutCardBackGround,
    AboutCard,
    AboutSub,
    AboutBottomSection,
    AboutBottom,
    AboutRight,
    AboutBottomLink,
    AboutIMG,

} from './AboutElements';

const About = () => {
  return (
    <>
        <AboutSection>
            <AboutLeft>
                <AboutCardBackGround>
                    <AboutCard>
                        <AboutIMG />
                    </AboutCard>
                </AboutCardBackGround>
            </AboutLeft>

            <AboutRight>
                <AboutTitle>
                    ABOUT US
                </AboutTitle>
                <AboutSub>
                    Berdiri pada awal April 2021 Team M11 Esports Divisi Dota  2 berhasil meraih bebrapa kompetisi tingkat Indonesia dan International. Pada bulan Oktober 2021 Team M11 Esports menambah Divisi baru yaitu PUBGM Ladies. Dan pada tahun 2022 Team M11 Esports menambah 2 Divisi yaitu MLBB dan Valorant.
                </AboutSub>
                <AboutBottomSection>
                    <AboutBottomLink to='/about'>
                        <AboutBottom>
                            FOR PARTNERSHIP
                        </AboutBottom>
                    </AboutBottomLink>
                </AboutBottomSection>
            </AboutRight>

        </AboutSection>

    </>
  )
}

export default About;