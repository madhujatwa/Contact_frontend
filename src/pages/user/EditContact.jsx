import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ContactForm from "../../components/contact/ContactForm";

import {
  getContact,
  updateContact,
} from "../../services/contactService";

const EditContact = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [contact, setContact] = useState(null);

  useEffect(() => {

    fetchContact();

  }, []);

  const fetchContact = async () => {

    try {

      const data = await getContact(id);

      setContact(data);

    } catch (err) {

      console.log(err);

    }

  };

  const handleUpdate = async (data) => {

    try {

      const formData = new FormData();

      Object.keys(data).forEach((key) => {

        formData.append(key, data[key]);

      });

      await updateContact(id, formData);

      alert("Contact Updated Successfully");

      navigate("/user/contacts");

    } catch (err) {

      console.log(err);

      alert("Update Failed");

    }

  };

  if (!contact) {

    return (
      <div className="text-center mt-20">
        Loading...
      </div>
    );

  }

  return (

    <div className="max-w-4xl mx-auto mt-8">

      <ContactForm
        initialData={contact}
        onSubmit={handleUpdate}
      />

    </div>

  );

};

export default EditContact;