export function Printdata() {
  const username = undefined;
  const user = {
    name: 'John Doe',
    age: 30,
  };
  const fruits = ['Apple', 'Banana', 'Orange', 'Kivi', 'mango'];

  return (
    <div className="Printdata">
      <h1>Printdata Component</h1>
      <p>UserName: {username ? username : 'Not provided'}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        </tbody>
      </table>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
