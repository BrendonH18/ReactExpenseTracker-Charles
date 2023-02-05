import logo from './logo.svg';
import './App.css';
import Header from './Header';
import InputExpense from './inputExpense';
import DisplayExpense from './displayExpense';

function App() {
  return (
    <div className="App">
      <Header />
      <InputExpense />
      <DisplayExpense />
    </div>
  );
}

setTimeout(() => {
  const submitButton = document.getElementById('submitbutton')
  submitButton.addEventListener('click', () => {
    const expenseTable = document.getElementById('expensetable');
    expenseTable.appendChild(addExpense());
  })
}, 2000)

function addExpense() {
  const inputValues = document.querySelectorAll('input')
  const expenseItem = document.createElement('tr')
  inputValues.forEach((e) => {
    const tableData = document.createElement('td')
    tableData.innerText = e.value
    expenseItem.appendChild(tableData)
    e.value = null
  })
  const deleteButton = document.createElement('td')
  deleteButton.innerText = 'X'
  deleteButton.style['backgroundColor'] = 'white'
  expenseItem.appendChild(deleteButton)

  deleteButton.addEventListener('click', () => {
    deleteButton.parentElement.remove()
    console.log('event fired')
  })
  return expenseItem
}








export default App;
