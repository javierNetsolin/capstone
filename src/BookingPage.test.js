import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage, {initializeTimes, updateTimes}  from './Bookingpage';
import { MemoryRouter } from 'react-router-dom';


// describe ('InitializeTimes', () => {
// test('return initial array', () => {
//     render(<BookingPage />);
//     const expectedTimes = [
//         '17:00',
//         '18:00',
//         '19:00',
//         '20:00',
//         '21:00',
//         '22:00'
//       ];
//     expect(initializeTimes(expectedTimes)).toEqual(expectedTimes);
// });
// });

// test('updateTimes return the same value from state', () => {
//     render(<BookingPage />);
//     const initialTimes = [
//         '17:00',
//         '18:00',
//         '19:00',
//         '20:00',
//         '21:00',
//         '22:00'
//       ];
//       const action = {type: 'change_date'};
//     expect(updateTimes(initialTimes, action)).toEqual(initialTimes)
// })

describe('Booking page', () => {
  // const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('should have one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId('booking-time-option');

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    // timeOptions.forEach(timeOption =>
    //   expect(timeOption.value).toMatch(timeFormat)
    // );
  });

  // test('should update available booking time options when changing booking date', async() => {
  //   render(
  //     <MemoryRouter>
  //       <BookingPage />
  //     </MemoryRouter>
  //   );

  //   const bookingDate = new Date();
  //   const dateInput = screen.getByTestId('booking-time-option');
  //   const initialTimeOptions = await screen.findAllByTestId('booking-time-option');
  //   fireEvent.change(dateInput, { target: { value: bookingDate } });
  //   fireEvent.blur(dateInput);
  //   const updatedTimeOptions = await screen.findAllByTestId('booking-time-option');

  //   expect(dateInput).toHaveValue(bookingDate);

  //   expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  // });

  //test('', () => {});
});