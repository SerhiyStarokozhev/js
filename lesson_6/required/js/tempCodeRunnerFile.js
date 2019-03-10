let countOptionalexpenses = {};
optionalExpensesItem.forEach( function (item, i) {
	item.addEventListener('input', () => {
		if (item.value) {
			countOptionalexpenses[i] = item.value;
		}
		const count = Object.getOwnPropertyNames(countOptionalexpenses);
		if (count.length==optionalExpensesItem.length) {
			btnOptionalExpenses.disabled = false;
		} 
	});
});