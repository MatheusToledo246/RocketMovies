import styled from "styled-components";

export const Container = styled.div`
     > svg {
        width: 20px;
        height: 20px;
        margin: 10px 10px 0 0;
    }
     color: ${({ theme }) => theme.COLORS.RED};
`;