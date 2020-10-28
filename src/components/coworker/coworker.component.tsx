import React from 'react';
import { Coworker } from "../../types";
import {
    StyledBase,
    StyledCoworker,
    StyledCoworkerBody,
    StyledCoworkerBodyEmail,
    StyledCoworkerBodyName,
    StyledCoworkerBodySocial,
    StyledCoworkerBodyText,
    StyledCoworkerHeader, StyledCoworkerHeaderImage,
    StyledCoworkerHeaderImageWrapper,
    StyledCoworkerHeaderProfileImage,
    StyledCoworkerHeaderProfileImageWrapper, StyledIconWrapper
} from "./coworker.styles";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { FaStackOverflow} from 'react-icons/fa';

interface Social {
    url: string,
    icon: any,
}

interface Socials {
    [key: string]: Social;
}

interface Props {
    coworker: Coworker;
}

const CoworkerComponent = ({ coworker: { name, email, phoneNumber, office, mainText, imagePortraitUrl, ...rest }}: Props): JSX.Element => {
    const formatText = () => {
        const allowedLength = 225;

        return mainText && mainText.length > allowedLength
            ? `${mainText.substr(0, allowedLength)}...`
            : mainText;
    };

    const socials: Socials = {
        github: {
            url: 'https://github.com/',
            icon: AiFillGithub
        },
        twitter: {
            url: 'https://twitter.com/',
            icon: AiOutlineTwitter,
        },
        stackOverflow: {
            url: 'https://stackoverflow.com/users/',
            icon: FaStackOverflow,
        },
        linkedIn: {
            url: 'https://www.linkedin.com/',
            icon: AiFillLinkedin,
        },
    }

    const socialIcons = Object.keys(socials).filter((social: string): any => {
        // @ts-ignore
        return rest[social];
    }).map(social => {
        const Component = socials[social].icon;
        // @ts-ignore
        const link = `${socials[social].url}${rest[social]}`;

        return <StyledIconWrapper key={link} href={link} target="_blank">
            <Component size={25} />
        </StyledIconWrapper>
    });

    return (
        <StyledBase>
            <StyledCoworker>
                <StyledCoworkerHeader>
                    <StyledCoworkerHeaderImageWrapper>
                        <StyledCoworkerHeaderImage className="PresentationCard__header__image__elem" src={imagePortraitUrl} alt=""/>
                    </StyledCoworkerHeaderImageWrapper>

                    <StyledCoworkerHeaderProfileImageWrapper>
                        <StyledCoworkerHeaderProfileImage src={imagePortraitUrl} alt=""/>
                    </StyledCoworkerHeaderProfileImageWrapper>
                </StyledCoworkerHeader>

                <StyledCoworkerBody>
                    <div>
                        <StyledCoworkerBodyName>
                            { name }
                        </StyledCoworkerBodyName>
                    </div>

                    <div>
                        <StyledCoworkerBodyEmail href="mailto:user@domain.com?Subject=Hello%20User">
                            { email }
                        </StyledCoworkerBodyEmail>
                    </div>

                    <StyledCoworkerBodySocial>
                        { socialIcons }
                    </StyledCoworkerBodySocial>

                    <div>
                        <StyledCoworkerBodyText dangerouslySetInnerHTML={{ __html: formatText() }}>
                        </StyledCoworkerBodyText>
                    </div>

                </StyledCoworkerBody>
            </StyledCoworker>
        </StyledBase>
    );
};

export default CoworkerComponent;
