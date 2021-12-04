import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StyledComponentsProps {}

const StyledStyledComponents = styled.div`
    color: pink;
`;

export function StyledComponents(props: StyledComponentsProps) {
    return (
        <StyledStyledComponents>
            <h1>Welcome to StyledComponents!</h1>
        </StyledStyledComponents>
    );
}

export default StyledComponents;
