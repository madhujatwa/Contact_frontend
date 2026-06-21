import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getContact } from "../../services/contactService";

const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    try {
      const data = await getContact(id);
      setContact(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!contact) {
    return (
      <div className="text-center mt-20 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">

      <div className="flex justify-center">

        <img
          src={
            contact.image
              ? contact.image
              : `https://ui-avatars.com/api/?name=${contact.name}`
          }
          alt={contact.name}
          className="w-36 h-36 rounded-full border object-cover"
        />

      </div>

      <div className="mt-6 space-y-3">

        <h2 className="text-3xl font-bold text-center">
          {contact.name}
        </h2>

        <p>
          <strong>Email :</strong> {contact.email}
        </p>

        <p>
          <strong>Phone :</strong> {contact.phone}
        </p>

        <p>
          <strong>Address :</strong> {contact.address}
        </p>

        <p>
          <strong>Website :</strong> {contact.website}
        </p>

        <p>
          <strong>LinkedIn :</strong> {contact.linkedin}
        </p>

        <p>
          <strong>Favourite :</strong>{" "}
          {contact.favorite ? "⭐ Yes" : "No"}
        </p>

      </div>

      <div className="flex justify-center mt-8">

        <Link
          to={`/user/edit-contact/${contact.id}`}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Edit Contact
        </Link>

      </div>

    </div>
  );
};

export default ContactDetails;