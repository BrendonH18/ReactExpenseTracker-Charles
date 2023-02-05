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
    const inputArray = Array.from(document.querySelectorAll('input'))
    if (inputArray.some(input => input.value.trim() === '')) {
      return
    }
    const expenseRow = addNewTableRow()
    expenseTable.appendChild(expenseRow);
  })
}, 2000)

function addNewTableRow() {
  const inputValues = document.querySelectorAll('input')
  const expenseItem = document.createElement('tr')
  inputValues.forEach((e) => {
    const tableData = document.createElement('td')
    tableData.innerText = e.value
    expenseItem.appendChild(tableData)
    e.value = null
  })
  const deleteButton = createDeleteButton()
  console.log(typeof (deleteButton))
  expenseItem.appendChild(deleteButton)

  return expenseItem
}

function createDeleteButton() {
  const td = document.createElement('td')
  td.innerText = 'X'
  td.className = "btn btn-primary"
  td.addEventListener('click', () => {
    td.parentElement.remove()
    console.log('event fired')
    console.log('createDeleteButton ran', td)

  })
  return td
}


export default App;
