import React, { useState, useEffect } from "react";
import FlagWithCode from "./FlagWithCode";

const PhContainer = ({ label, type, getInput, validation }) => {
  const [inputVal, setInputVal] = useState();
  const [phoneno, setPhoneno] = useState();
  const [countryVal, setCountryVal] = useState({});
  const [currentValidation, setCurrentValidation] = useState(validation);

  useEffect(() => {
    setCurrentValidation(validation);
  }, [validation]);

  const onValueSet = (value) => {
    setInputVal(value);
    if(inputVal) {
      const phoneno= inputVal.replace(/^\+\d+\s*/, ""); 
      getInput(phoneno)
    }
  };

  const fetchCountryVal = (value) => {
    const countryCode = value.countryCode.replace("+", "");
    setInputVal(countryCode);
    setCountryVal(value.countryCode);
    if(inputVal) {
      const phoneno= inputVal.replace(countryCode, ""); 
      getInput(phoneno)
    }
  };

  return (
    <div>
      <label
        className={`input-container ${
          !currentValidation.validation ? "border-redNCS" : "border-greyscaleG6"
        }`}
      >
        <span
          className={`input-label label-up ${
            !currentValidation.validation ? "text-redNCS" : "text-greyscaleG3"
          }`}
        >
          {label}
        </span>
        <div className="flex">
          <FlagWithCode
            fetchCountryVal={fetchCountryVal}
            countryVal={inputVal}
          />
          <input
            className="input-field"
            type={type}
            value={inputVal}
            onChange={(e) => onValueSet(e.target.value)}
          />
        </div>
      </label>
      {!currentValidation.validation ? (
        <span className="text-redNCS text-xs">{currentValidation.errorMessage}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default PhContainer;
