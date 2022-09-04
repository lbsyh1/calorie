// CRUD (Create, Read, Update, Delete)
export const getCalories = async () => {
  const response = await fetch("http://localhost:8000/calories");
  const data = await response.json();
  return data;
};
