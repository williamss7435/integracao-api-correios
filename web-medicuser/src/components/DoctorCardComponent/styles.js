import styled from 'styled-components';

export const Card = styled.div`
    background: #fff;
    
    display: flex;
    flex-direction: column;

    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 5px;
    margin-bottom: 16px;
    div.name {
        font-weight: bold;
        width: 100%;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 5px;
    }

    button {
        border: none;
        font-weight: bold;
        color: #fff;
        transition: 0.7s;
        background: #1a3852;
        padding: 5px;
        border-radius: 5px;
        margin-top: 10px;
        
    :hover {
        background: #173e5f;
        color: #6693b9;
    }
    }

`;

export const CardItem = styled.div`

    display: flex;
    border: 1px solid #f0f0f0;
    div {
        font-weight: bold;
        padding: 0 5px;
        border: 1px solid #f0f0f0;
        width: 50px;
    }

    span {
        padding-left: 3px;
        width: 100%;
    }
`;