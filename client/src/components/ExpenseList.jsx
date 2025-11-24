function ExpenseList({ expenses }) {
    if (!expenses.length) {
        return (
            <div className="glass-card" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                <p>No expenses recorded yet.</p>
            </div>
        );
    }

    return (
        <div className="glass-card">
            <h2>Recent Transactions</h2>
            <ul className="expense-list">
                {expenses.map((expense) => (
                    <li key={expense.id} className="expense-item">
                        <div className="expense-info">
                            <h3>{expense.description}</h3>
                            <div className="expense-meta">
                                <span className="category-badge">{expense.category}</span>
                                <span>{new Date(expense.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <div className="expense-amount">
                            ฿{parseFloat(expense.amount).toFixed(2)}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
