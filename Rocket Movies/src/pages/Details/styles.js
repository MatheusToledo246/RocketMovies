import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    height: 100vh;


    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 0 126px;
    }
    
`;

export const Content = styled.div`
    max-width: auto;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

   > button:first-child {
    align-self: first;
   }

    >p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
        font-weight: 500;
    }
`;

export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    >h1 {
        font-size: 36px;
        font-weight: 500;
        margin-right: 19px;
    }

`;

export const Profile = styled.div`
    display: flex;
    margin-top: 25px;
    align-items: center;
    
    > img {
        width: 16px;
        height: 16px;
        border-color: red;
        border-radius: 50%;
        margin-right: 8px;
        
    }


    > svg {
        color: ${({ theme }) => theme.COLORS.RED};
        margin: 0 8px;
    }
`;

export const ArrowLeft = styled(Link)`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    margin-top: 40px;
    
    > svg {
        margin-right: 10px;
        color: ${({ theme }) => theme.COLORS.RED};
    }

`;

export const Tags = styled.div`
    display: flex;
    margin: 40px 0;
    gap: 8px;
    > :first-child {
        margin-left: 0;
    }
`;