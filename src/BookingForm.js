import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function BookingForm({ availableTimes = [], setAvailableTimes, submitForm }) {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: availableTimes.length > 0 ? availableTimes[0] : '',
      guests: '1',
      occasion: 'Birthday',
    },
    validationSchema: Yup.object({
      date: Yup.string().required('Date is required'),
      time: Yup.string().required('Time is required'),
      guests: Yup.number()
        .min(1, 'Must be at least 1 guest')
        .max(10, 'Must be 10 guests or less')
        .required('Number of guests is required'),
      occasion: Yup.string().required('Occasion is required'),
    }),
    onSubmit: (values) => {
      console.log('submit form', values);
      submitForm(values);
      // Reset the form
      formik.resetForm();
    },
  });

  const handleDateChange = (e) => {
    if (setAvailableTimes) {
      setAvailableTimes({ type: 'UPDATE_TIMES', payload: e.target.value });
    }
    formik.setFieldValue('date', e.target.value);
  };

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit}>
      <h2>Reserve a Table</h2>
      
      <label htmlFor="res-date">choose date</label>
      <input
        type="date"
        id="res-date"
        data-testid="booking-time-option"
        {...formik.getFieldProps('date')}
        onChange={handleDateChange}
        required
      />
      {formik.touched.date && formik.errors.date ? (
        <div className='error'>{formik.errors.date}</div>
      ) : null}
      
      <label htmlFor="res-time">choose time</label>
      <select
        id="res-time"
        {...formik.getFieldProps('time')}
        className="custom-select"
      >
        <option value="" label="Select time" />
        {availableTimes.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {formik.touched.time && formik.errors.time ? (
        <div className='error'>{formik.errors.time}</div>
      ) : null}
      
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        {...formik.getFieldProps('guests')}
      />
      {formik.touched.guests && formik.errors.guests ? (
        <div className='error'>{formik.errors.guests}</div>
      ) : null}
      
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        {...formik.getFieldProps('occasion')}
        className="custom-select"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <div className='error'>{formik.errors.occasion}</div>
      ) : null}
      
      <button type="submit" aria-label="On Click" disabled={!formik.isValid || !formik.dirty}>
        Make Your reservation
      </button>
    </form>
  );
}
