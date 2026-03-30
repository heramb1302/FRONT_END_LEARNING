export const InputRefForward = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref} placeholder="Enter" />
    </div>
  );
};
