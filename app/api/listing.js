import Client from "./client";

const endPoint = "/listings";
const getListings = () => Client.get(endPoint);

export default {
  getListings,
};
