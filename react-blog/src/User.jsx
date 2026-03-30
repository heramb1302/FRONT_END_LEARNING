export const User = ({ name = 'Pls Log in' }) => {
  return (
    <div
      className="User"
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        color: 'green',
      }}
    >
      <h1>User Component</h1>

      {name ? <p>Welcome, {name}</p> : <p>Please log in</p>}
    </div>
  );
};
