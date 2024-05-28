import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the Bookingform heading', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const setAvailableTimes = jest.fn(); // Mock function

  render(<BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});
