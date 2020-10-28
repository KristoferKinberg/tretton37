import styled from "styled-components";

interface Props {
    dangerouslySetInnerHTML: any;
}

export const StyledBase = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    margin-bottom: 30px;
    width: 300px;
    margin: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: all 200ms;
    -o-transition: all 200ms;
    -moz-transition: all 200ms;
    -webkit-transition: all 200ms;
    box-shadow: 5px 5px 10px 0 rgba(0,0,0,.25);
    -moz-box-shadow: 5px 5px 10px 0 rgba(0,0,0,.25);
    -webkit-box-shadow: 5px 5px 10px 0 rgba(0,0,0,.25);
  
    &:hover {
        cursor: pointer;
        right: -5px;
        bottom: -5px;
        
        transition: all 200ms;
        -o-transition: all 200ms;
        -moz-transition: all 200ms;
        -webkit-transition: all 200ms;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
      }
`;

export const StyledCoworker = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 530px;
    height: 650px;
    border: 1px solid #cecece;
    background: #fff;
`;

export const StyledCoworkerHeader = styled.div`
    height: 225px;
    overflow: hidden;
    position: relative;
`;

export const StyledCoworkerHeaderImageWrapper = styled.div`
    position: absolute;
    height: 150px;
    width: 100%;
    overflow: hidden;
    top: 0;
    border-bottom: 1px solid #cecece;
`;

export const StyledCoworkerHeaderImage = styled.img`
    position: relative;
    max-width: none;
    width: 600px;
    top: -50px;
    left: -50px;
    filter: blur(10px);
    -moz-filter: blur(10px);
    -webkit-filter: blur(10px);
`;

export const StyledCoworkerHeaderProfileImageWrapper = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #555;
    top: 75px;
    margin: auto;
`;

export const StyledCoworkerHeaderProfileImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const StyledCoworkerBody = styled.div`
    margin-top: 2em;
    padding: 0 3em 3em 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledCoworkerBodyName = styled.span`
    font-size: 1.5em;
    font-weight: 900;
    color: #444;
`;

export const StyledCoworkerBodyEmail = styled.a`
    color: #777;
    font-size: 1.1em;
    text-decoration: none;
    
    &:hover { d
        color: #222;
    }
`;

export const StyledIconWrapper = styled.a`
    color: #333;
    padding: 0 10px;
`;

export const StyledCoworkerBodySocial = styled.div`
    margin: 1.5em 0 .5em 0;
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const StyledCoworkerBodyText = styled.div<Props>`
    font-size: .85em;
    line-height: 1.8em;
    color: #555;
    text-align: center;
`;
