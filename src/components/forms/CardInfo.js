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

  const checkCardName = () => {};

  return (
    <div className="pt-6 pb-5 space-y-8">
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
          <div className="w-full flex space-x-6">
            <InputContainer
              label={"Name on Card"}
              type={"text"}
              getInput={checkCardName}
              validation={cardNameValidation}
              placeholder={"John Doe"}
            />
            <InputContainer
              label={"Card Number"}
              type={"number"}
              getInput={checkCardName}
              validation={cardNameValidation}
              placeholder={"•••• •••• ••••"}
            />
          </div>
          <div className="w-full flex space-x-6">
            <InputContainer
              label={"Expiry Date"}
              type={"text"}
              getInput={checkCardName}
              validation={cardNameValidation}
              placeholder={"MM/YY"}
            />
            <InputContainer
              label={"CVV/CVC"}
              type={"number"}
              getInput={checkCardName}
              validation={cardNameValidation}
              placeholder={"•••"}
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
