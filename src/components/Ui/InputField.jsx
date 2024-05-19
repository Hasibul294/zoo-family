/* eslint-disable react/prop-types */

const InputField = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`text-sm focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default InputField;
