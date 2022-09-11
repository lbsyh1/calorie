import { v4 as uuidv4 } from "uuid";

// CRUD (Create, Read, Update, Delete)
export const getCalories = async () => {
  const response = await fetch("http://localhost:8000/calories");
  const data = await response.json();
  return data;
};

export const createCalorie = async (data) => {
  const response = await fetch("http://localhost:8000/calories", {
    method: "POST",
    body: JSON.stringify({ id: uuidv4(), ...data }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response;
};
