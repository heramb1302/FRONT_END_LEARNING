export function ToDo() {
  return (
    <div className="ToDo">
      <h1>To Do Component</h1>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
        alt="CameraImage"
      />
      <ul>
        <li>Learn React</li>
        <li>Build a To Do App</li>
        <li>Have fun coding!</li>
      </ul>
      <button onClick={() => alert('Button Clicked!')}>Click Me</button>
    </div>
  );
}
