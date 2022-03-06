import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.10.9.70:8000/api",
});

export default apiClient;
