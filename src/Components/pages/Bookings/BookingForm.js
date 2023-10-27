import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { generateRandTime } from "../../../utils/fakeApi";

// const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
// const defaultDate = new Date().toISOString().split('T')[0];

const BookingForm = ({
    availableTimes,
    dispatchOnDateChange,
    submitData
}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [isSubmit, setSubmit] = useState(false);

    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = 'Please choose a valid time';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion';
    const invalidNumberOfGuestsErrorMessage =
        'Please enter a number between 1 and 10';

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isGuestValid = () => guests !== '';
    const isOccasionValid = () => occasion !== '';

    const isValidateForm = () => isDateValid() && isTimeValid() && isGuestValid() && isOccasionValid();

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        if (isValidateForm()) {
            submitData({ date, time, guests, occasion });
            clearForm();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Container>
                    <Row className="form-row">
                        <Col lg={6} xs={12} className="form-label-wrapper">
                            <label htmlFor="date">Choose date</label>
                        </Col>
                        <Col lg={6} xs={12} className="form-input-wrapper">
                            <input type="date" id="date" value={date} onChange={handleDateChange} data-testid="date" />
                            {!isDateValid() && isSubmit ? <p className="error-message" data-testid="date-error">{invalidDateErrorMessage}</p> : null}
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col lg={6} xs={12} className="form-label-wrapper">
                            <label htmlFor="time">Choose time</label>
                        </Col>
                        <Col lg={6} xs={12} className="form-input-wrapper">
                            <select id="time" value={time} onChange={e => setTime(e.target.value)} data-testid="time">
                                <option value="">--Select--</option>
                                {availableTimes.map(times => {
                                    return (
                                        <option data-testid="booking-time-option" key={times}>{times}</option>
                                    )
                                })}
                            </select>
                            {!isTimeValid() && isSubmit ? <p className="error-message" data-testid="time-error">{invalidTimeErrorMessage}</p> : null}
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col lg={6} xs={12} className="form-label-wrapper">
                            <label htmlFor="guests">Number of guests</label>
                        </Col>
                        <Col lg={6} xs={12} className="form-input-wrapper">
                            <input type="number" placeholder="0" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} data-testid="guests" />
                            {!isGuestValid() && isSubmit ? <p className="error-message" data-testid="guest-error">{invalidNumberOfGuestsErrorMessage}</p> : null}
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col lg={6} xs={12} className="form-label-wrapper">
                            <label htmlFor="occasion">Occasion</label>
                        </Col>
                        <Col lg={6} xs={12} className="form-input-wrapper">
                            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} data-testid="occasion">
                                <option value="">--Select--</option>
                                <option data-testid="occasion-option" value="birthday">Birthday</option>
                                <option data-testid="occasion-option" value="anniversary">Anniversary</option>
                            </select>
                            {!isOccasionValid() && isSubmit ? <p className="error-message" data-testid="occasion-error">{invalidOccasionErrorMessage}</p> : null}
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col style={{ textAlign: "center" }}>
                            <Button type="submit" >Make Your reservation</Button>
                            {/* disabled={!isValidateForm()} */}
                        </Col>
                    </Row>
                </Container>
            </form>

        </>
    )
}

export default BookingForm;