import apiClient from "../utils/ApiClient";

// Add Contact
export const addContact = async (formData) => {
  const response = await apiClient.post("/contacts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Get All Contacts
export const getContacts = async () => {
  const response = await apiClient.get("/contacts");
  return response.data;
};

// Get Single Contact
export const getContact = async (id) => {
  const response = await apiClient.get(`/contacts/${id}`);
  return response.data;
};

// Update Contact
export const updateContact = async (id, formData) => {
  const response = await apiClient.put(`/contacts/${id}`, formData);
  return response.data;
};

// Delete Contact
export const deleteContact = async (id) => {
  const response = await apiClient.delete(`/contacts/${id}`);
  return response.data;
};

// Search Contacts
export const searchContacts = async (keyword, page = 0, size = 6) => {
  const response = await apiClient.get(
    `/contacts/search?keyword=${keyword}&page=${page}&size=${size}`
  );

  return response.data;
};

export const toggleFavourite = async (id) => {
  const response = await apiClient.patch(`/contacts/${id}/favorite`);
  return response.data;
};

export const uploadImage = async (id, imageUrl) => {
  const response = await apiClient.patch(
    `/contacts/${id}/image?imageUrl=${encodeURIComponent(imageUrl)}`
  );
  return response.data;
};