import { render } from '@testing-library/react';

import ColorCard from './color-card';

describe('ColorCard', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ColorCard />);
        expect(baseElement).toBeTruthy();
    });
});
