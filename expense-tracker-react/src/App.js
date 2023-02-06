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
  checkLocalStorage()
  const submitButton = document.getElementById('submitbutton')
  submitButton.addEventListener('click', () => {
    const expenseTable = document.getElementById('expensetable');
    const inputArray = Array.from(document.querySelectorAll('input'))
    if (inputArray.some(input => input.value.trim() === '')) {
      return
    }
    const expenseRow = addNewTableRow()
    expenseTable.appendChild(expenseRow);
    updateLocalStorage()
  })
}, 100)

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
  expenseItem.appendChild(deleteButton)

  return expenseItem
}

function createDeleteButton() {
  const td = document.createElement('td')
  td.innerText = 'X'
  td.className = "btn btn-primary"
  td.addEventListener('click', () => {
    td.parentElement.remove()
    updateLocalStorage()

  })
  return td
}

function checkLocalStorage() {
  const storedExpensesHTML = document.getElementById('expensetable');
  if (localStorage.getItem('storedExpensesHTML') === null) {
    localStorage.setItem('storedExpensesHTML', '')
  } else {
    storedExpensesHTML.innerHTML = localStorage.getItem('storedExpensesHTML');
    const persistedExpenseRows = document.querySelectorAll('tr');
    persistedExpenseRows.forEach((tr) => tr.lastChild.addEventListener('click', () => {
      tr.remove();
      updateLocalStorage()
    }))
  }
  return storedExpensesHTML
}

function updateLocalStorage() {
  const storedExpensesHTML = document.getElementById('expensetable').innerHTML;
  localStorage.setItem('storedExpensesHTML', storedExpensesHTML)
}

export default App;
