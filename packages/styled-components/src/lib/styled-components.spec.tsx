import { render } from '@testing-library/react';

import StyledComponents from './styled-components';

describe('StyledComponents', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<StyledComponents />);
        expect(baseElement).toBeTruthy();
    });
});
