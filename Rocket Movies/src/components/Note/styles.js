import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.RED_900};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    align-items: start;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > h2 {
        height: 40px;
        text-align: left;
        margin: 15px 0;


        font-weight: 400;
        font-size: 16px;
        overflow: hidden;
        
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;

export const MiniStars = styled.div `
    display: flex;
    color: ${({ theme }) => theme.COLORS.RED};

    > svg {
        width: 12px;
        height: 12px;
        margin: 8px 6px 0 0;
    }
`;