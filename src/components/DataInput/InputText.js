const InputText = ({ placeholder, onChange, maxLength, name, value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered w-full text-base"
      onChange={onChange}
      name={name}
      value={value}
      required
    />
  );
};

export default InputText;
