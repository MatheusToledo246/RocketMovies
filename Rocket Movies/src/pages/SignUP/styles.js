import styled from "styled-components";
import ImgPng from '../../assets/img.png';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: justify;

    >h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.RED};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
        margin-left: -158px;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY};
    }

    > a {
        font-size: 16px;
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.RED};

        svg {
            margin-right: 8px;
    }
    }

`;

export const Img = styled.div`
    flex: 1;
    background: url(${ImgPng}) no-repeat center center;
    background-size: cover;
`;