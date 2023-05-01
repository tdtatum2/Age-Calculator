import { useState, useEffect } from 'react';
import { differenceInDays } from 'date-fns';
import arrowIcon from './assets/icon-arrow.svg';
import './App.scss';
import 'animate.css';

function App() {
  const currentDate = new Date();
  const currentYear =currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDay();

  const [birthYear, setBirthYear] = useState(currentYear);
  const [birthMonth, setBirthMonth] = useState(currentMonth);
  const [birthDay, setBirthDay] = useState(currentDay);

  const [differenceYears, setDifferenceYears] = useState("--");
  const [differenceMonths, setDifferenceMonths] = useState("--");
  const [differenceDays, setDifferenceDays] = useState("--");

  const [animate, setAnimate] = useState(false);

  const handleDayChange = (e) => {
    setBirthDay(e.target.value)
    e.target.setCustomValidity('');
  }

  const handleMonthChange = (e) => {
    setBirthMonth(e.target.value)
  }

  const handleYearChange = (e) => {
    setBirthYear(e.target.value)
  }

  const handleFormSubmit = (e) => {
    if ((birthMonth === '4' || birthMonth === '6' || birthMonth === '9' || birthMonth === '11') && birthDay > 30) {
      e.target[0].setCustomValidity("Invalid date.");
      e.target[0].reportValidity();
    } else if (birthMonth === '2' && birthDay > 28) {
      e.target[0].setCustomValidity("Invalid date.");
      e.target[0].reportValidity();
    } else {
      var birthDate = new Date(birthYear, birthMonth - 1, birthDay);
      var amountOfDays = differenceInDays(currentDate, birthDate);
      var diffYear = 0;
      var diffMonth = 0;
      var diffDay = 0;
      while (amountOfDays > 365) {
        diffYear += 1;
        amountOfDays -= 365;
      } while (amountOfDays > 30) {
        diffMonth += 1;
        amountOfDays -= 30;
      } diffDay = amountOfDays;

      setDifferenceYears(diffYear);
      setDifferenceMonths(diffMonth);
      setDifferenceDays(diffDay);
    }    

    e.preventDefault();
  }

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  
  
  }, [differenceYears, differenceDays, differenceMonths])
  

  return (
    <div className="container">
      <section className="user-input">
        <form className="user-birthday" onSubmit={e => handleFormSubmit(e)}>
          <div className="form-inputs">
            <label htmlFor="birth-day" className="form-label">
              <h2>DAY</h2>
              <input type="number" name="birth-day" id="birth-day" min="1" max="31" required onChange={e => handleDayChange(e)} placeholder='DD' />
            </label>
            <label htmlFor="birth-month" className="form-label">
              <h2>MONTH</h2>
              <input type="number" name="birth-month" id="birth-month" min="1" max="12" required onChange={e => handleMonthChange(e)} placeholder='MM' />
            </label>
            <label htmlFor="birth-year" className="form-label">
              <h2>YEAR</h2>
              <input type="number" name="birth-year" id="birth-year" min="1" max={currentYear} required onChange={e => handleYearChange(e)} placeholder='YYYY' />
            </label>
          </div>
          <div className="form-submit">
            <hr />
            <button type="submit"><img src={arrowIcon} alt="Arrow icon for submit button" /></button>
          </div>
        </form>
      </section>
      <section className="output">
        <h1><span className={animate ? "coloured-number sliding" : "coloured-number"}>{differenceYears}</span> years</h1>
        <h1><span className={animate ? "coloured-number " : "coloured-number"}>{differenceMonths}</span> months</h1>
        <h1><span className={animate ? "coloured-number " : "coloured-number"}>{differenceDays}</span> days</h1>
      </section>
    </div>
  );
}

export default App;