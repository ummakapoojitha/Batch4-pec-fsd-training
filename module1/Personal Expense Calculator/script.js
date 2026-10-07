```javascript
let expenses = [];

const expenseForm = document.getElementById("expenseForm");
const expenseItems = document.getElementById("expenseItems");
const totalExpense = document.getElementById("totalExpense");
const expenseCount = document.getElementById("expenseCount");
const clearButton = document.getElementById("clearButton");


// Add Expense
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("expenseName").value;
    const amount = Number(
        document.getElementById("expenseAmount").value
    );
    const category =
        document.getElementById("expenseCategory").value;

    const expense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    displayExpenses();

    expenseForm.reset();
});


// Display Expenses
function displayExpenses() {

    expenseItems.innerHTML = "";

    let total = 0;

    if (expenses.length === 0) {

        expenseItems.innerHTML =
            "<p id='emptyMessage'>No expenses added yet.</p>";

        totalExpense.textContent = "₹0";
        expenseCount.textContent = "0";

        return;
    }

    expenses.forEach(function (expense) {

        total = total + expense.amount;

        const item = document.createElement("div");

        item.className = "expense-item";

        item.innerHTML =
            "<div class='expense-info'>" +
                "<h3>" + expense.name + "</h3>" +
                "<p>Category: " + expense.category + "</p>" +
            "</div>" +

            "<div>" +
                "<span class='expense-amount'>₹" +
                    expense.amount +
                "</span>" +

                "<button class='delete-btn' " +
                    "onclick='deleteExpense(" +
                    expense.id +
                    ")'>" +
                    "Delete" +
                "</button>" +
            "</div>";

        expenseItems.appendChild(item);
    });

    totalExpense.textContent = "₹" + total;
    expenseCount.textContent = expenses.length;
}


// Delete Expense
function deleteExpense(id) {

    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    displayExpenses();
}


// Clear All
clearButton.addEventListener("click", function () {

    if (expenses.length === 0) {
        alert("No expenses to clear.");
        return;
    }

    expenses = [];

    displayExpenses();
});


// Show empty list when page loads
displayExpenses();
```