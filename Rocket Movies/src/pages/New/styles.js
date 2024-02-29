import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 768px;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        width: 100%;
        height: 100vh;
        grid-area: content;
        overflow-y: auto;
    }
    .inputs {
        display: flex;
        gap: 40px;
        margin: 40px 0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        height: 90px;
        gap: 24px;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
        padding: 16px;

        border-radius: 8px;

    }
    .buttons {
        display: flex;
        gap: 40px;

    }
`;

export const Form = styled.form`
    margin:  38px auto;
    padding: 0 123px;

    > h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin: 40px 0 24px 0;
    }

    > a {
        font-size: 16px;
        margin: 40px 0 24px 0;
        color: ${({ theme }) => theme.COLORS.RED};

        svg {
            margin-right: 10px;
        }
    }
`;
