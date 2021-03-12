import styled from 'styled-components';

import logo from '../../assets/images/icon-medicuser-white.png';

export const Container = styled.div`
    background: #1a3852;
    padding: 5px;
    flex-direction: row;
    display: flex;
    box-shadow: 1px 1px 1px solid black;
    align-items: center;
    align-content: center;
    justify-items: center;

    @media(min-width: 992px) {
        height: 100vh;
        flex-direction: column;
    }
    
`;

export const Logo = styled.img.attrs({
    src: logo
})`
    width: 50px;
    height: 50px;
    margin: 0 10px 5px 0;

    @media(min-width: 992px) {
        margin: 10px;
    }
`;

export const Button = styled.button`
    background: none;
    border: none;
    font-weight: bold;
    color: #fff;
    transition: 0.7s;

    padding: 5px;
    
    border-radius: 5px;

    :hover {
        background: #173e5f;
        color: #6693b9;
    }
`;