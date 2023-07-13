import React, { useState, useEffect } from "react";
import InputContainer from "../miscellaneous/InputContainer";
import PhContainer from "../miscellaneous/PhContainer";

const Details = () => {
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [nameValidation, setNameValidation] = useState({
    validation: true,
    errorMessage: "",
  });
  const [phoneValidation, setPhoneValidation] = useState({
    validation: true,
    errorMessage: "",
  });
  const [emailValidation, setEmailValidation] = useState({
    validation: true,
    errorMessage: "",
  });
  const [confirmEmailValidation, setConfirmEmailValidation] = useState({
    validation: true,
    errorMessage: "",
  });

  const checkName = (data) => {
    if (data.length < 2) {
      setNameValidation({
        validation: false,
        errorMessage: "Please enter a valid name",
      });
    } else {
      setNameValidation({ validation: true, errorMessage: "" });
    }
    setName(data);
  };

  const checkEmail = (data) => {
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    if (!emailRegex.test(data)) {
      setEmailValidation({
        validation: false,
        errorMessage: "Please enter a valid email address",
      });
    } else {
      setEmailValidation({ validation: true, errorMessage: "" });
    }
    setEmail(data);
  };

  const checkConfirmEmail = (data) => {
    if (data !== email) {
      setConfirmEmailValidation({
        validation: false,
        errorMessage: "Confirm Email doesn't match",
      });
    } else {
      setConfirmEmailValidation({ validation: true, errorMessage: "" });
    }
    setConfirmEmail(data);
  };

  const checkPhone = (data) => {
    const filterRegex = /^\+\d+$/;
    const value = data.match(filterRegex);
    console.log(value);
    value ? setPhoneno(value) : setPhoneno("");

    const validateRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

    const isValidPhoneNumber = validateRegex.test(value);

    if (!isValidPhoneNumber) {
      setPhoneValidation({
        validation: false,
        errorMessage: "Enter a valid Phone Number",
      });
    } else {
      setPhoneValidation({ validation: true, errorMessage: "" });
    }
  };

  return (
    <div>
      <div className="space-y-[6px]">
        <h2 className="text-2xl font-semibold text-greyscaleG2">
          Enter your details
        </h2>
        <p className="text-[15px] text-greyscaleG3 leading-6">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details
        </p>
      </div>
      <form className="w-full mt-8 space-y-6">
        <div className="input-container-row">
          <InputContainer
            label={"Full Name"}
            type={"text"}
            getInput={checkName}
            validation={nameValidation}
            currentValue={name}
          />

          <PhContainer
            label={"Phone number"}
            type={"text"}
            getInput={checkPhone}
            validation={phoneValidation}
            currentValue={phoneno}
          />
        </div>
        <div className="input-container-row">
          <InputContainer
            label={"Email"}
            type={"email"}
            getInput={checkEmail}
            validation={emailValidation}
            currentValue={email}
          />
          <InputContainer
            label={"Confirm Email"}
            type={"email"}
            getInput={checkConfirmEmail}
            validation={confirmEmailValidation}
            currentValue={confirmEmail}
          />
        </div>
      </form>
    </div>
  );
};

export default Details;
