import { render } from "@testing-library/react";
import BookingPage, {initializeTimes, updateTimes}  from './Bookingpage';



describe ('InitializeTimes', () => {
test('return initial array', () => {
    render(<BookingPage />);
    const expectedTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
    expect(initializeTimes(expectedTimes)).toEqual(expectedTimes);
});
});

test('updateTimes return the same value from state', () => {
    render(<BookingPage />);
    const initialTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
      const action = {type: 'change_date'};
    expect(updateTimes(initialTimes, action)).toEqual(initialTimes)
})