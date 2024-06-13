import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm'; // Adjust the path as necessary

describe('BookingForm HTML5 validation attributes', () => {
  test('Date input has required attribute', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={jest.fn()} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
  });

  test('Number of guests input has min and max attributes', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={jest.fn()} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('Time select has options', () => {
    const availableTimes = ['17:00', '18:00'];
    render(<BookingForm availableTimes={availableTimes} submitForm={jest.fn()} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    availableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('Occasion select has options', () => {
    render(<BookingForm availableTimes={['17:00', '18:00']} submitForm={jest.fn()} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('Anniversary')).toBeInTheDocument();
  });
});
