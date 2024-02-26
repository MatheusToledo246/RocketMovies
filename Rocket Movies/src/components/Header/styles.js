import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

`;
export const Search = styled.div`
    width: 100%;
    padding: 30px 64px 0;

`;
export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        width: 155px;
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;
        align-items: end;
        margin-right: 9px;

        button {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            background: none;
            border: none;
            width: 28px;
        }


        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }   
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;