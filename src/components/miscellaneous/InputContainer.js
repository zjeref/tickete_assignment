import React, { useState, useEffect } from "react";

const InputContainer = ({ label, type, getInput, validation, placeholder }) => {
  const [inputVal, setInputVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [currentValidation, setCurrentValidation] = useState(validation);

  useEffect(() => {
    setCurrentValidation(validation);
  }, [validation]);

  const onValueSet = (value) => {
    setInputVal(value);
    getInput(value);
  };

  return (
    <div className="">
      <label
        className={`input-container ${
          !currentValidation.validation ? "border-redNCS" : "border-greyscaleG6"
        }`}
      >
        <span
          className={`input-label ${isFocused || inputVal ? "label-up" : ""} ${
            !currentValidation.validation ? "text-redNCS" : "text-greyscaleG3"
          }`}
        >
          {label}
        </span>
        <input
          className="input-field"
          type={type}
          value={inputVal}
          placeholder={`${isFocused ? (placeholder ? placeholder : "") : ""}`} //if placeholder is empty then it returns empty string
          onChange={(e) => onValueSet(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
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

export default InputContainer;
