import { useState } from "react";

const ContactForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    address: initialData.address || "",
    website: initialData.website || "",
    linkedin: initialData.linkedin || "",
    favorite: initialData.favorite || false,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold">Add Contact</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full border rounded p-2"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border rounded p-2"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="w-full border rounded p-2"
        value={formData.phone}
        onChange={handleChange}
      />

      <textarea
        name="address"
        placeholder="Address"
        className="w-full border rounded p-2"
        value={formData.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="website"
        placeholder="Website"
        className="w-full border rounded p-2"
        value={formData.website}
        onChange={handleChange}
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn"
        className="w-full border rounded p-2"
        value={formData.linkedin}
        onChange={handleChange}
      />

      <input
        type="file"
        name="image"
        onChange={handleChange}
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="favorite"
          checked={formData.favorite}
          onChange={handleChange}
        />
        Favourite Contact
      </label>

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded"
        type="submit"
      >
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;