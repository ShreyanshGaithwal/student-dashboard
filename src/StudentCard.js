import React from 'react';

function StudentCard({ name, grade, attendance }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    width: '150px',
    backgroundColor: (grade === 'A' || grade === 'A+') ? '#008000' : '#ffa500',
  };

  return (
    <div style={cardStyle}>
      <h4>{name}</h4>
      <p>Grade: {grade}</p>
      <p>Attendance: {attendance}%</p>
    </div>
  );
}

export default StudentCard;
