import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InputTextProps {}

const StyledInputText = styled.input`
    color: pink;
`;

export function InputText(props: InputTextProps) {
    return (
        <StyledInputText>
            <h1>Welcome to InputText!</h1>
        </StyledInputText>
    );
}

export default InputText;
