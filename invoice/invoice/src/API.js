import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/app",
});

export async function getCustomersAPI(payload) {
  const response = await client
    .post("/customer/customerList", payload, { params: { page: 1 } })
    .catch();
  return response.data;
}

export function addCustomerAPI(customer) {
  return client.post("/customer/add", customer);
}

export async function getItemsAPI(payload) {
  const response = await client
    .post("/item/itemList", payload, { params: { page: 1 } })
    .catch();
  return response.data;
}

export function addItemAPI(item) {
  return client.post("/item/add", item);
}
