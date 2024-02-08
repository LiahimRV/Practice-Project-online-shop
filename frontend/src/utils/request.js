export function request(url, method, data) {
	return fetch(url, {
		headers: {
			'content-type': 'application/json',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error('Ошибка при выполнении запроса:', error);
			throw error;
		});
}
