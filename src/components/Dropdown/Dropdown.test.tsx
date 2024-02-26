import { render } from '@testing-library/react';

import { Dropdown } from './Dropdown';

describe('Molecules/Dropdown', () => {
  it('renders component successfully', () => {
    const onChange = jest.fn();

    const { getByLabelText } = render(<Dropdown value="month" onChange={onChange} label="Test" />);

    expect(getByLabelText(/dropdown/i)).toBeInTheDocument();
  });
});
