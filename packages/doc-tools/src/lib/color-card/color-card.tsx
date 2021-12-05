import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ColorCardProps {}

const StyledColorCard = styled.div`
    color: pink;
`;

export function ColorCard(props: ColorCardProps) {
    return (
        <StyledColorCard>
            <h1>Welcome to ColorCard!</h1>
        </StyledColorCard>
    );
}

export default ColorCard;
