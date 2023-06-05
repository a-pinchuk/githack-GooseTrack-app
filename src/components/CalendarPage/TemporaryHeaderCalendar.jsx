import React from 'react';
import { setNextDate, setPreviousDate } from 'redux/date/dateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from 'redux/date/selectors';
export const TemporaryHeaderCalendar = () => {
  const currentDate = useSelector(selectDate);
  const dispatch = useDispatch();

  function formatDate() {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(currentDate);
    return date.toLocaleDateString('en-US', options);
  }

  const handlePreviousDate = () => {
    dispatch(setPreviousDate());
  };

  const handleNextDate = () => {
    dispatch(setNextDate());
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '46px',
          marginBottom: '38px',
        }}
      >
        <h2 style={{ margin: '0' }}>Calendar</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ marginRight: '10px' }}>Feedback</button>
          <button style={{ marginRight: '10px' }}>iconMoon</button>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'lightblue',
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '38px',
        }}
      >
        <div>
          <button>{formatDate()}</button>
          <button onClick={handlePreviousDate}> {'<'}</button>
          <button onClick={handleNextDate}>{'>'}</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button>Month</button>
          <button>Day</button>
        </div>
      </div>
    </>
  );
};
