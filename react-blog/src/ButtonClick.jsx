export const ButtonClick = () => {
  function handleClick() {
    alert('Button Clicked!');
  }

  const fruit = (name) => {
    alert(`Fruit Clicked! ${name}`);
  };

  return (
    <div className="ButtonClick">
      <h1>Button Click Component</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => fruit('Apple')}>Apple</button>
      <button onClick={() => fruit('Banana')}>Banana</button>
    </div>
  );
};
