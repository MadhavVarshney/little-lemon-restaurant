import { fireEvent, screen, render } from "@testing-library/react";
import BookingForm from './BookingForm';


describe('Booking form', () => {
    const availableTimes = ['20:00', '20:30'];
    const today = new Date().toISOString().split('T')[0];
    const guests = '5';
    const occasion = 'birthday';
    const time = availableTimes[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('fields should have rendered in the page', async () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData}></BookingForm>
        )
        const dateInput = screen.getByTestId('date');
        const timeInput = screen.getByTestId('time');
        const timeOptions = await screen.findAllByTestId('booking-time-option');
        const guestInput = screen.getByTestId('guests');
        const occasionInput = screen.getByTestId('occasion');
        const occasionOption = await screen.findAllByTestId('occasion-option');
        const submitButton = screen.getByRole('button');

        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveValue("");

        expect(timeInput).toBeInTheDocument();
        expect(timeOptions.length).toBe(2)

        expect(guestInput).toBeInTheDocument();
        expect(guestInput).toHaveValue(null);

        expect(occasionInput).toBeInTheDocument();
        expect(occasionOption.length).toBe(2);

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeEnabled();
    });


    test('error messages should be displayed when form submitted with no values', () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange}>
            </BookingForm>
        )

        const submitBtn = screen.getByRole('button');
        fireEvent.click(submitBtn);

        const dateError = screen.getByTestId('date-error');
        const timeError = screen.getByTestId('time-error');
        const guestError = screen.getByTestId('guest-error');
        const occasionError = screen.getByTestId('occasion-error');

        expect(dateError).toBeInTheDocument();
        expect(timeError).toBeInTheDocument();
        expect(guestError).toBeInTheDocument();
        expect(occasionError).toBeInTheDocument();

    });

    test('should submit the data on Submit Button', () => {
        render(
            <BookingForm availableTimes={availableTimes} submitData={submitData} dispatchOnDateChange={dispatchOnDateChange}>
            </BookingForm>
        )

        const dateInput = screen.getByTestId('date');
        const timeInput = screen.getByTestId('time');
        const guestInput = screen.getByTestId('guests');
        const occasionInput = screen.getByTestId('occasion');
        const submitButton = screen.getByRole('button');

        fireEvent.change(dateInput, { target: { value: today } });
        fireEvent.change(timeInput, { target: { value: time } });
        fireEvent.change(guestInput, { target: { value: guests } });
        fireEvent.change(occasionInput, { target: { value: occasion } });

        fireEvent.click(submitButton);

        expect(submitData).toHaveBeenCalledWith({
            date: today,
            time: time,
            guests: guests,
            occasion: occasion
        });
    });


});