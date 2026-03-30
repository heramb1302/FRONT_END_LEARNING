export const ReuseComponent = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-primary mb-4">Reuse Component Example</h1>
      {data.map((user) => (
        <div className="row" key={user.id}>
          <p key={user.id} className="card-text fs-5">
            ID: {user.id}, Name: {user.name}, Age: {user.age}
          </p>
        </div>
      ))}
    </div>
  );
};
