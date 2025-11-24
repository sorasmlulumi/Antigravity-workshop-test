import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return;

        onAddExpense({ description, amount, category });
        setDescription('');
        setAmount('');
        setCategory('Food');
    };

    return (
        <div className="glass-card">
            <h2>Add New Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="e.g., Lunch at Cafe"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Amount (THB)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;
