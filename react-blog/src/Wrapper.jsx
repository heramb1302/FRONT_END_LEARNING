export const Wrapper = ({ children }) => {
  return (
    <div style={{ border: '2px solid blue', padding: '20px', margin: '20px' }}  >
      <h1>Wrapper Component</h1>
      {children}
    </div>
  );
};
