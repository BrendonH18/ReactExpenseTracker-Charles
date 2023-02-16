import { Table } from "react-bootstrap";

const DisplayExpense = (props) => {
    const { expenses } = props

    const handleDeleteRow = (index) => {
        const {expenses, setExpenses} = props
        const newExpenses = expenses.filter((expense, i) => {
            return i !== index
        })
        setExpenses(newExpenses)        
    }

    const rows = expenses.map((row, index) => {
        return (
            <tr key = {index}>
                <td>{row.date}</td>
                <td>{row.description}</td>
                <td>{row.amount}</td>
                <td>{row.merchant}</td>
                <td><div className="btn btn-danger mx-auto d-block" onClick={(e) => handleDeleteRow(index)}>Delete</div></td>
            </tr>
        )
    })

    return (<Table striped bordered hover variant="dark">
        <thead >
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Merchant</th>
                <th>Delete?</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>

    </Table>)

    // return (
    //     <>
    //         <center><h3 className="DisplayExpense"></h3>

    //             <table className="table" id="expensetable"></table>
    //             <div className="col-4"></div></center>
    //     </>
    // );
}

export default DisplayExpense;