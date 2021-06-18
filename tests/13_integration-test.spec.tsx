import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {mocked} from 'ts-jest';
import user from '@testing-library/user-event';
import {submitForm} from '../src/fifaTournamentRegistration/Api';
import App from '../src/fifaTournamentRegistration/App';

jest.mock('../src/fifaTournamentRegistration/Api');

const mockSubmitForm = mocked(submitForm);

test('should allow user to make a successful registration', async () => {
  // Mock submit form handler
  mockSubmitForm.mockResolvedValueOnce({ success: true });
  const testData = { name: 'Darek', team: 'Manchester United' };

  // Render whole Application
  const { findByLabelText, findByText } = render(<App />);

  // Check if we are on Home Page
  expect(await findByText(/welcome on FIFA 21 tournament page/i)).toBeInTheDocument();

  // Start registration
  user.click(await findByText(/register here/i));

  // Type name
  fireEvent.change(await findByLabelText(/name/i), {
    target: { value: testData.name },
  });

  // Go next
  user.click(await findByText(/next/i));

  // Type team
  fireEvent.change(await findByLabelText(/team/i), {
    target: {value: testData.team},
  });

  // Go to Review Page
  fireEvent.click(await findByText(/review provided information/i));

  // Check if data is correct
  expect(await findByLabelText(/name/i)).toHaveTextContent(testData.name);
  expect(await findByLabelText(/team/i)).toHaveTextContent(testData.team);

  // Confirm registration
  user.click(await findByText(/confirm/i, { selector: 'button' }));

  // Check if submit handler was called with proper data
  expect(mockSubmitForm).toHaveBeenCalledWith(testData);
  expect(mockSubmitForm).toHaveBeenCalledTimes(1);

  // Check if we are on Success Page
  expect(await findByText(/you did it/i)).toBeInTheDocument();

  // Go to Home Page
  user.click(await findByText(/home/i));

  // Check if we are back on Home Page
  expect(await findByText(/welcome on FIFA 21 tournament page/i)).toBeInTheDocument();
});
