import React, { useState, useEffect } from "react";
import FlagWithCode from "./FlagWithCode";

const PhContainer = ({ label, type, getInput, validation, currentValue }) => {
  const [inputVal, setInputVal] = useState("");
  const [countryVal, setCountryVal] = useState("");
  const [currentValidation, setCurrentValidation] = useState(validation);

  // this useEffect is to filter is set the data to the parent to later validate if required
  useEffect(() => {
    setInputVal(currentValue);
    onValueSet(currentValue)
  }, [currentValue]);

  useEffect(() => {
    setCurrentValidation(validation);
  }, [validation]);

  const onValueSet = (value) => {
    console.log(value)
    getInput(value)
    setCountryVal(value);
  };

  const fetchCountryVal = (value) => {
    setInputVal(value.countryCode)
  };
  console.log(inputVal)

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
            countryVal={countryVal}
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
        <span className="text-redNCS text-xs">
          {currentValidation.errorMessage}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default PhContainer;
