import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";

const FlagWithCode = ({ fetchCountryVal, countryVal }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryData, setCountryData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const modifiedCountryData = res.data
          .map((country) => {
            let countryCode;
            if (country.idd.suffixes?.length > 1) {
              countryCode = country.idd.root + country.idd.suffixes[0];
            } else {
              countryCode = country.idd.root + country.idd.suffixes;
            }
            if (countryCode && country.name.common && country.flags.svg) {
              return {
                countryName: country.name.common,
                countryIcon: country.flags.svg,
                countryCode: countryCode,
              };
            }
          })
          .filter((country) => country);
        setCountryData(modifiedCountryData);
        setSelectedCountry(modifiedCountryData[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (countryData) {
      const filteredCountry = countryData.find(
        (country) => country.countryCode.slice(1) === countryVal
      );
      if (filteredCountry) {
        setSelectedCountry(filteredCountry);
        fetchCountryVal(filteredCountry);
      }
    }
  }, [countryVal, countryData]);

  const setActiveCountry = (data) => {
    setSelectedCountry(data);
    fetchCountryVal(data);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {!isLoading && countryData.length > 0 && (
        <>
          <div
            className="flex space-x-2 pr-3 hover:cursor-pointer"
            onClick={() => toggleModal()}
          >
            <img
              className="w-6 h-6"
              src={selectedCountry.countryIcon}
              alt={selectedCountry.countryName}
            />
          </div>
          <ul
            className={`w-full space-y-2 mt-8 rounded-xl text-greyscaleG2 h-72 overflow-y-auto absolute z-10 left-0 bg-white ${
              isModalOpen ? "" : "hidden"
            }`}
          >
            {countryData.map((country) => {
              return (
                <li
                  className="flex p-2 space-x-2 w-40 hover:cursor-pointer"
                  key={country.countryName}
                  onClick={() => setActiveCountry(country)}
                >
                  <img
                    className="w-6 h-6"
                    src={country.countryIcon}
                    alt={country.countryName}
                  />
                  <span className="w-30 h-6 overflow-hidden">
                    {country.countryName}
                  </span>
                  <div className="w- text-end">
                    <span className="text-greyscaleG3">
                      {country.countryCode}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default FlagWithCode;
