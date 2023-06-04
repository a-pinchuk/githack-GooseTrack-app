import React from 'react';

export const TemporaryHeaderCalendar = () => {
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
          <button>MARCH 2023</button>
          <button> {'<'}</button>
          <button>{'>'}</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button>Month</button>
          <button>Day</button>
        </div>
      </div>
    </>
  );
};
