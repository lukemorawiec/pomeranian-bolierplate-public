import { render, screen, act } from '@testing-library/react';
import { UnitTests } from './UnitTests';
import userEvent from '@testing-library/user-event';

describe('UnitTests', () => {
  test('loads and displays Header with result', async () => {
    // given
    const { container } = render(<UnitTests prop1={1} />);
    const div = container.getElementsByClassName('result-value');

    // when
    await act(async () => {
      await userEvent.click(screen.getByText('Kliknij mnie'));
    });

    //then
    expect(container.getElementsByTagName('p')[0]).toBeDefined();
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent(
      'kliknięto'
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Unit Tests');
    expect(div[0]).toHaveTextContent('result: 25.64');
  });
});
