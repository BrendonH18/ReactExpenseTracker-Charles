import { useState } from "react";
import { Form, Button, Container, Row, Col} from "react-bootstrap";

const InputExpense = (props) => {
    const {expenses, setExpenses} = props
    const [formdata, setFormdata] = useState({})
    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setFormdata(prev => ({...prev, [key]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(formdata).length !== 4) return
        let newFormData = formdata
        newFormData.date = handleDate(formdata.date)
        const joined = expenses.concat(newFormData)
        setExpenses(joined)
        setFormdata({})
    }
    
    const handleDate = (date) =>{
        if (!date) return
        const elements = date.split("-")
        return `${elements[1]}/${elements[2]}/${elements[0]}`
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDate" >
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" value={formdata.date || ""} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="What did you buy?" name="description" value={formdata.description || ""} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" min="0.00" max="10000.00" step="0.01" name="amount" value={formdata.amount || ""} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formMerchant">
                            <Form.Label>Merchant</Form.Label>
                            <Form.Control type="text" placeholder="From who?" name="merchant" value={formdata.merchant || ""} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="success" type="submit" className="mx-auto ">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Container>
      </Form>
)
}

export default InputExpense;

