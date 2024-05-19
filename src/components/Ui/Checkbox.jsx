/* eslint-disable react/prop-types */
const Checkbox = ({ label, checked, onChange, className = "", ...props }) => {
  return (
    <label className={`flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
        {...props}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
