export async function requestHandler(selectedMethod, id, data) {
  return new Promise(async (resolve, reject) => {
    let endOfUrl = '';

    if (id) {
      endOfUrl = '/' + id;
    }

    const response = await fetch(`http://localhost:3333/api/todo${endOfUrl}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: selectedMethod,
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();

    if (response.status === 200) {
      resolve(jsonResponse);
    }

    if (response.status !== 200 && jsonResponse.message) {
      reject(jsonResponse.message);
    }
  });
}
