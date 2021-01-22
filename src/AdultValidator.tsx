import React, {useState} from 'react';

export const AdultValidator = ({min = 4, max = 120}) => {
  const [age, setAge] = useState(0);
  const [ageEntered, setAgeEntered] = useState(false);

  const handleChange = (event) => {
    setAge(Number(event.target.value));
    setAgeEntered(true);
  }

  const getValidationError = () => {
    if (age < min) {
      return 'Are you really so young?';
    }
    if (age > max) {
      return 'Are you really so old?';
    }
    return 'This page is available only for adult people';
  }

  const isValid = !ageEntered || (age >= 18 && age <= max);

  return (
    <div>
      <label htmlFor="age">Put your age here</label>
      <input
        id="age"
        type="number"
        value={age}
        onChange={handleChange}
      />
      {isValid ?  <div>You are grown up!</div> : <div role="alert">{getValidationError()}</div>}
    </div>
  );
};
