import { useState } from "react";
import Checkbox from "./Checkbox";

const Sidebar = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  return (
    <div className="min-h-screen p-4 shadow-lg rounded-md">
      <div>
        <div className="flex justify-between mb-2">
          <p>Number of Stops</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <hr />
        <Checkbox
          label="Non Stop"
          checked={isChecked1}
          onChange={(e) => setIsChecked1(e.target.checked)}
          className="pt-3"
        />
        <Checkbox
          label="One Stop"
          checked={isChecked2}
          onChange={(e) => setIsChecked2(e.target.checked)}
        />
        <Checkbox
          label="Multi Stop"
          checked={isChecked3}
          onChange={(e) => setIsChecked3(e.target.checked)}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Sidebar;
