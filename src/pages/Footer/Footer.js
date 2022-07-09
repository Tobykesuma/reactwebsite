import React, { useRef } from 'react';
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
import emailjs from '@emailjs/browser';



const Footer = () => {
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            '',
            '',
            form.current,
            ''
        ).then((result) =>{
            console.log(result.text);
            console.log('message sent');
        }, (error) => {
            console.log(error.text);
        });
    };


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
                <FooterForm ref={form} onSubmit={sendEmail}>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                    <Button fontBig type='submit' value='Send'>Subscribe</Button>
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
                        <FooterLink to='/comingsoon'>
                            Coming Soon
                        </FooterLink>
                    </FooterLinkItems>

                     <FooterLinkItems>
                        <FooterLinkTitle>
                            Social Media
                        </FooterLinkTitle>
                        <FooterLink to='https://www.instagram.com/teamm11_esports/' target='_blank'>
                            Instagram
                        </FooterLink>
                        <FooterLink to='https://www.youtube.com/c/TeamM11ESports' target='_blank'>
                            Youtube
                        </FooterLink>
                        <FooterLink to='https://www.facebook.com/TeamM11Esports' target='_blank'>
                            Facebook
                        </FooterLink>
                        <FooterLink to='https://twitter.com/M11Team' target='_blank'>
                            Twitter
                        </FooterLink>
                        <FooterLink to='https://www.tiktok.com/@teamm11_esports' target='_blank'>
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