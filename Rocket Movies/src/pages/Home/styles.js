import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

`;
export const Brand = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;
    padding: 0 80px;
    margin-top: 50px;
    margin-bottom: 40px;
`;
export const Search = styled.div`

`;
export const Content = styled.div`
    height: 222px;
    margin: 0 80px 24px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.RED_900};

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

    > p {

    }

    > svg {
        width: 16px;
        height: 16px;
        margin-right: 2.5px;
    }
`;