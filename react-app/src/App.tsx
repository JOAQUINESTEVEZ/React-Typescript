import { useState } from "react";
import { ExpenseList } from "./components/expense-tracker/components/ExpenseList";
import { ExpenseFilter } from "./components/expense-tracker/components/ExpenseFilter";
import { ExpenseForm } from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
