import React, { useState } from "react";
import CreditCard from "../../assets/CreditCard.svg";
import RadioButton from "../../assets/RadioButton.svg";
import InputContainer from "../miscellaneous/InputContainer";
import PaymentConfirm from "../PaymentConfirm";

const CardInfo = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVC] = useState("");

  const [cardNameValidation, setCardNameValidation] = useState({
    validation: true,
    errorMessaage: "",
  });
  const [cardNumberValidation, setCardNumberValidation] = useState({
    validation: true,
    errorMessaage: "",
  });
  const [expireDateValidation, setExpireDateValidation] = useState({
    validation: true,
    errorMessaage: "",
  });
  const [cvvValidation, setCVCValidation] = useState({
    validation: true,
    errorMessaage: "",
  });

  const checkCardName = (data) => {
    if (data.length < 2) {
      setCardNameValidation({
        validation: false,
        errorMessage: "Please enter a valid name",
      });
    } else {
      setCardNameValidation({ validation: true, errorMessage: "" });
    }
    setCardName(data);
  };

  //todo validations.. more clear validations are need to be implemented
  const checkCardNumber = (data) => {
    setCardNumber(data);
    if (data.length > 12) {
      setCardNumberValidation({
        validation: false,
        errorMessage: "Please enter a valid card number",
      });
    } else {
      setCardNumberValidation({
        validation: true,
        errorMessage: "",
      });
    }
  };

  const checkExpiryDate = (data) => {
    const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const isValidExpirationDate = expirationRegex.test(data);
    if (!isValidExpirationDate) {
      setExpireDateValidation({
        validation: false,
        errorMessage: "Please enter expiration date",
      });
    } else {
      setExpireDateValidation({
        validation: true,
        errorMessage: "",
      });
    }
    setExpiryDate(data);
  };

  const checkCvv = (data) => {
    setCVC(data);
    if (data.length >3) {
      setCVCValidation({
        validation: false,
        errorMessage: "Please enter correct CVV",
      });
    } else {
      setCVCValidation({
        validation: true,
        errorMessage: "",
      });
    }
  };

  return (
    <div className="pt-6 space-y-8">
      <div className="space-y-[6px]">
        <h2 className="text-2xl font-semibold text-greyscaleG2">Pay With</h2>
        <p className="text-[15px] text-greyscaleG3 leading-6">
          Safe and secure payment processing gauranteed
        </p>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex space-x-[22px]">
          <img src={CreditCard} alt={CreditCard} />
          <span className="font-semibold text-greyscaleG2">Card</span>
        </div>
        <img src={RadioButton} alt={RadioButton} />
      </div>
      <div className="my-6 ">
        <form className="w-full space-y-6">
          <div className="input-container-row">
            <InputContainer
              label={"Name on Card"}
              type={"text"}
              getInput={checkCardName}
              validation={cardNameValidation}
              placeholder={"John Doe"}
              currentValue={cardName}
            />
            <InputContainer
              label={"Card Number"}
              type={"number"}
              getInput={checkCardNumber}
              validation={cardNumberValidation}
              placeholder={"•••• •••• ••••"}
              currentValue={cardNumber}
            />
          </div>
          <div className="input-container-row">
            <InputContainer
              label={"Expiry Date"}
              type={"text"}
              getInput={checkExpiryDate}
              validation={expireDateValidation}
              placeholder={"MM/YY"}
              currentValue={expiryDate}
            />
            <InputContainer
              label={"CVV/CVC"}
              type={"number"}
              getInput={checkCvv}
              validation={cvvValidation}
              placeholder={"•••"}
              currentValue={cvv}
            />
          </div>
        </form>
      </div>
      <hr className="" />
      <PaymentConfirm />
    </div>
  );
};

export default CardInfo;
