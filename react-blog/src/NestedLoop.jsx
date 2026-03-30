export const NestedLoop = () => {
  const collageData = [
    {
      name: 'Collage A',
      city: 'City A',
      website: 'www.collagea.com',
      student: [
        {
          name: 'Student A',
          age: 20,
          email: 'studenta@example.com',
        },
        {
          name: 'Student B',
          age: 22,
          email: 'studentb@example.com',
        },
      ],
    },
    {
      name: 'Collage B',
      city: 'City B',
      website: 'www.collageb.com',
      student: [
        {
          name: 'Student C',
          age: 21,
          email: 'studentc@example.com',
        },
        {
          name: 'Student D',
          age: 23,
          email: 'studentd@example.com',
        },
      ],
    },
    {
      name: 'Collage C',
      city: 'City C',
      website: 'www.collagec.com',
      student: [
        {
          name: 'Student E',
          age: 20,
          email: 'studente@example.com',
        },
        {
          name: 'Student F',
          age: 22,
          email: 'studentf@example.com',
        },
      ],
    },
  ];
  console.log(collageData);

  return (
    <div>
      <h1>Nested Loop</h1>
      {collageData.map((collage, index) => (
        <div
          key={index}
          style={{ border: '1px solid black', padding: '10px', margin: '10px' }}
        >
          <h2>{collage.name}</h2>
          <ul>
            <li>City: {collage.city}</li>
            <li>Website: {collage.website}</li>
            <li>
              Students:
              <ul>
                {collage.student.map((student, studentIndex) => (
                  <li key={studentIndex}>
                    Name: {student.name}, Age: {student.age}, Email:{' '}
                    {student.email}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
