import styled from "styled-components";
import { Link } from 'react-router-dom';


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

export const Content = styled.div`
    padding: 0 64px;
    overflow-y: auto;

`;
export const NewNote = styled(Link)`
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