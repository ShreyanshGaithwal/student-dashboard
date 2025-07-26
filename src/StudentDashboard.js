import React, { useState } from 'react';
import StudentCard from './StudentCard';

const initialStudents = [
  { name: 'Alice', grade: 'A', attendance: 90 },
  { name: 'Bob', grade: 'B', attendance: 70 },
  { name: 'Charlie', grade: 'A+', attendance: 95 },
  { name: 'David', grade: 'C', attendance: 60 }
];

function StudentDashboard() {
  const [showFiltered, setShowFiltered] = useState(false);

  const toggleFilter = () => {
    setShowFiltered(prev => !prev);
  };

  const filteredStudents = showFiltered
    ? initialStudents.filter(s => s.attendance > 75)
    : initialStudents;

  return (
    <div>
      <p>Total Students: {filteredStudents.length}</p>
      <button onClick={toggleFilter}>
        {showFiltered ? 'Show All Students' : 'Show >75% Attendance'}
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {filteredStudents.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            grade={student.grade}
            attendance={student.attendance}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
