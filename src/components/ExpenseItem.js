import './ExpenseItem.css';
function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>22 de Junio de 2021</div>
            <div className="expense-item__description">
                <h2>Amazon dot echo con reloj</h2>
                <div className="expense-item__price">38.99</div>
            </div>
        </div>
    );
}

export default ExpenseItem;