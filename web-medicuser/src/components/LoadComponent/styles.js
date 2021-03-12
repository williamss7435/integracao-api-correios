import styled, {keyframes} from 'styled-components';

import logo from '../../assets/images/icon-medicuser-blue.png';

const blink = keyframes`
    0%, 50%, 100% {
    opacity: 1;
    }
    
    25%, 75% {
    opacity: 0;
    }
    }
    
    @keyframes flash {
    0%, 50%, 100% {
    opacity: 1;
    }
    
    25%, 75% {
    opacity: 0;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-weight: bold;
        color: #1a3852;
        font-size: 16px;
    }
`;

export const Logo = styled.img.attrs(props => ({
    src: logo
}))`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    animation: ${blink} 2s linear infinite;
`;