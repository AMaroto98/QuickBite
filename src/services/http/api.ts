const API_URL = "/available-meals.json";

export const getFood = async () => {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  return data;
};
