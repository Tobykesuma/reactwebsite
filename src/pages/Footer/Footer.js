import React from 'react';
import {
    FooterContainer ,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    FooterForm,
    FormInput,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight,
    FooterCCWrap,
    FooterLogoCC,
    WebsiteRights
} from './FooterElements';
import { Button } from '../../globalStyle';



const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Be the first to know TEAM M11 lates updates and announcements!
                </FooterSubHeading>
                <FooterSubText>
                    Subscribe us Now!
                </FooterSubText>
                <FooterForm>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                    <Button fontBig>Subscribe</Button>
                </FooterForm>
            </FooterSubscription>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            About Us
                        </FooterLinkTitle>
                        <FooterLink to='/about'>
                            About us
                        </FooterLink>
                        <FooterLink to='/faq'>
                            F.A.Q
                        </FooterLink>
                        <FooterLink to='/teams'>
                            Teams
                        </FooterLink>
                        <FooterLink to='/news'>
                            News
                        </FooterLink>
                        <FooterLink to='/schedule'>
                            Schedule
                        </FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Teams
                        </FooterLinkTitle>
                        <FooterLink to='/team/dota2'>
                            Dota 2
                        </FooterLink>
                        <FooterLink to='/team/pubgmobile'>
                            PUBG Mobile
                        </FooterLink>
                        <FooterLink to='/team/mlbb'>
                            Mobile Legend
                        </FooterLink>
                        <FooterLink to='/team/valorant'>
                            Valorant
                        </FooterLink>
                        <FooterLink to='/team/comingsoon'>
                            Coming Soon
                        </FooterLink>
                    </FooterLinkItems>

                     <FooterLinkItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to='' target='_blank'>
                            Instagram
                        </FooterLink>
                        <FooterLink to='' target='_blank'>
                            Youtube
                        </FooterLink>
                        <FooterLink to='' target='_blank'>
                            Facebook
                        </FooterLink>
                        <FooterLink to='' target='_blank'>
                            Twitter
                        </FooterLink>
                        <FooterLink to='' target='_blank'>
                            Tiktok
                        </FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>

            <FooterCopyRight>
                <FooterCCWrap>
                    <FooterLogoCC></FooterLogoCC>
                    <WebsiteRights>
                        TEAM M11 ESPORTS © 2022 | ALL RIGHTS RESERVED
                    </WebsiteRights>
                    <WebsiteRights>
                        DESIGN & DEVELOPED BY TOBI KESUMA
                    </WebsiteRights>
                </FooterCCWrap>
            </FooterCopyRight>
        </FooterContainer>
    </>
  )
}

export default Footer