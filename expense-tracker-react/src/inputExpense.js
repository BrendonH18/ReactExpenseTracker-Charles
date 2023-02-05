const InputExpense = () => {
    return (
        <div className="InputExpense">

            <span><strong>DATE</strong><input id='dateinput' type='date' /></span><span><strong>DESCRIPTION</strong><input id='descriptioninput' type="text" /></span><span><strong>AMOUNT</strong><input id='amountinput' type="number" /></span><span><strong>MERCHANT</strong><input id='merchantinput' type="text" /></span><span><button id="submitbutton">SUBMIT</button></span>
        </div>
    );
}

export default InputExpense;

