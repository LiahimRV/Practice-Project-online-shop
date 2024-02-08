export const searchByName = (searchText, productList) => {
	if (!searchText) {
		return productList;
	}
	return productList.filter(({ productName }) =>
		productName.toLowerCase().includes(searchText.toLowerCase()),
	);
};
