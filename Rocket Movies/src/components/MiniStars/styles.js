import styled from "styled-components";

export const Container = styled.div`
     > svg {
        width: 12px;
        height: 12px;
        margin: 8px 6px 0 0;
    }
     color: ${({ theme }) => theme.COLORS.RED};
`;