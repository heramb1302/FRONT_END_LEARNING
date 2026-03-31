export const LiftAdduser = ({ setUserName }) => {
  return (
    <div>
      <br />
      <hr />
      <h2>Lift Add User</h2>

      <input
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Enter user name"
      />

      <br />
      <hr />
    </div>
  );
};
