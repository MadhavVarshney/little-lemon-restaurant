import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { generateRandTime, submitForm } from "../../../utils/fakeApi";
import { useNavigate } from "react-router-dom";
import pages from '../../../utils/pages';

const updateTimes = (availableTimes, date) => {
    const res = generateRandTime(new Date(date));
    return (res.length !== 0) ? res : availableTimes;
}

const initializeTimes = initializeAvailableTimes => [...initializeAvailableTimes, ...generateRandTime(new Date())];

const Booking = () => {

    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitData = formData => {
        const res = submitForm(formData);
        if (res) {
            navigate(pages.get('confirmedBooking').path);
        }
    }
    return (
        <>
            <div className="page-heading">
                <h2>Table reservation</h2>
            </div>
            <BookingForm
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitData}
            ></BookingForm>
        </>
    )
}

export default Booking; 