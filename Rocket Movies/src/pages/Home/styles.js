import styled from "styled-components";

export const Container = styled.div`

`;
export const Brand = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;
    padding: 0 80px;
    margin-top: 50px;
    margin-bottom: 40px;

`;

export const Content = styled.button`
    height: 222px;
    margin: 0 80px 24px;
    padding-bottom: 24px;
    
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.RED_900};
    border: none;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 0 32px;
    text-align: justify;

    > h1 {
        padding-top: 32px;
        max-width: 500;
        font-size: 24px;
    }

    > p {
        font-size: 16px;
        height: 38px;
        overflow: hidden;

        margin: 15px 0 30px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }


   
`;
export const NewNote = styled.button`
    width: 207px;
    height: 48px;
    
    display: flex;
    align-items: center;
    padding: 0 32px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > svg {
        width: 16px;
        height: 16px;
        margin-right: 2.5px;
    }
`;

export const Tags = styled.div`
    display: flex;
    margin: 15px 0;
    gap: 8px;
    > :first-child {
        margin-left: 0;
    }

    > Tag {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    }

    
`;