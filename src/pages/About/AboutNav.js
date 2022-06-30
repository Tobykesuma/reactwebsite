import React from 'react';
import {
    AboutNavSection,
    AboutNavBG,
    AboutTitleNav,
    AboutNavTitle,
    AboutNavSubSection,
    AboutNavSub,
    AboutNavFlexSpace,
    ContactAbout,
    ContactTitle,
    ContactContainer,
    ContactOptionSection,
    ContactOption,
    ContactButton,
    ContactForm,
    ContactInput,
    ContactTextarea,
    ContactName,
    ContactName2,


} from './AboutElements';


const AboutNav = () => {
  return (
    <>
        <AboutNavSection>
            <AboutNavBG>
            </AboutNavBG>
            <AboutTitleNav>
                    <AboutNavTitle>
                        ABOUT US
                    </AboutNavTitle>
                </AboutTitleNav>
                <AboutNavFlexSpace>
                    {/* <AboutNavSubSection>
                    <AboutNavSub>
                        Berdiri pada awal April 2021 Team M11 Esports Divisi Dota  2 berhasil meraih bebrapa kompetisi tingkat Indonesia dan International. Pada bulan Oktober 2021 Team M11 Esports menambah Divisi baru yaitu PUBGM Ladies. Dan pada tahun 2022 Team M11 Esports menambah 2 Divisi yaitu MLBB dan Valorant.
                    </AboutNavSub>
                </AboutNavSubSection> */}
                </AboutNavFlexSpace>
        </AboutNavSection>

        <ContactAbout>
                    <ContactTitle>
                        CONTACT
                    </ContactTitle>
                    {/* <ContactContainer>
                        <ContactOptionSection> */}
                            {/* <ContactOption>
                                <ContactName>
                                    Email
                                </ContactName>
                                <ContactName2>
                                    teamm11bali@gmail.com
                                </ContactName2>
                            </ContactOption> */}
                        {/* </ContactOptionSection>
                    </ContactContainer> */}
        </ContactAbout>
    
    </>
  )
}

export default AboutNav;