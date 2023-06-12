export async function getAllCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const result = await response.json()
  return result;
}