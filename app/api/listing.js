import Client from "./client";

const endPoint = "/listings";
const getListings = () => Client.get(endPoint);

const addListing = (item, onUploadProgress) => {
  const data = new FormData();
  data.append("title", item.title);
  data.append("price", item.price);
  data.append("categoryId", item.category.value);
  data.append("description", item.description);
  item.images.forEach((item, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: item,
    });
  });
  return Client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
