import './App.scss';

function App() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDay();

  return (
    <div className="container">
      <h1>{currentYear} {currentMonth} {currentDay}</h1>
      <h2>HELLO</h2>
    </div>
  );
}

export default App;
