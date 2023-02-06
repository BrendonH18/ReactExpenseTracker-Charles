const InputExpense = () => {
    return (
        <div className="form-group">
            <center><span className='col-3' ><strong>DATE</strong><input id='dateinput' type='date' /></span><span className='col-3'><strong>DESCRIPTION</strong><input id='descriptioninput' type="text" /></span><span className='col-3'><strong>AMOUNT</strong><input id='amountinput' type="number" /></span><span className='col-3'><strong>MERCHANT</strong><input id='merchantinput' type="text" /></span><span><button className="btn btn-primary" id="submitbutton">SUBMIT</button></span></center>
        </div>
    );
}

export default InputExpense;

