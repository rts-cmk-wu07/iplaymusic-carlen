const Input = ({ type, typeName }) => {
  return (
    <div>
      <label htmlFor={typeName}></label>
      <input type={type} name={typeName} id={typeName} />;
    </div>
  );
};

export default Input;
