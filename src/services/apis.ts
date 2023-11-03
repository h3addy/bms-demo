import axios from "axios";

export const fetchData = async () => {
  const response = axios.get("https://dummyjson.com/products");
  return response;
};
