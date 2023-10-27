import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Booking from './Booking';

describe('Booking page', () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test('should have one or more available booking time options', async () => {
        render(
            <MemoryRouter>
                <Booking></Booking>
            </MemoryRouter>
        );

        const timeOptions = await screen.findAllByTestId('booking-time-option');

        expect(timeOptions.length).toBeGreaterThan(1);
    });

    test('time format should match with the regex', async () => {
        render(
            <MemoryRouter>
                <Booking></Booking>
            </MemoryRouter>
        )

        const timeOptions = await screen.findAllByTestId('booking-time-option');
        timeOptions.forEach(time => {
            expect(time.value).toMatch(timeFormat);
        });
    });

    // test('should have updated the time slots when date is changed', async () => {
    //     render(
    //         <MemoryRouter>
    //             <Booking></Booking>
    //         </MemoryRouter>
    //     )

    //     const selectedDate = '2023-11-28';
    //     const dateInput = screen.getByTestId('date')
    //     const initialTimeSlots = await screen.findAllByTestId('booking-time-option');

    //     fireEvent.change(dateInput, { target: { value: selectedDate } });
    //     fireEvent.blur(dateInput);

    //     const updatedTimeSlots = await screen.findAllByTestId('booking-time-option');
    //     expect(initialTimeSlots.length).not.toBe(updatedTimeSlots.length);
    // });
});