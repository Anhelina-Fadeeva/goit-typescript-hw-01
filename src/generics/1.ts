import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error.message}`);
  }
}

fetchData<any>('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(err => console.error(err));
