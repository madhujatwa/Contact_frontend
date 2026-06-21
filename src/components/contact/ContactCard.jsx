import { Link } from "react-router-dom";

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition">

      <div className="flex justify-center">
        <img
          src={
            contact.image
              ? contact.image
              : "https://ui-avatars.com/api/?name=" + contact.name
          }
          alt={contact.name}
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">{contact.name}</h2>

        <p className="text-gray-500">{contact.email}</p>

        <p>{contact.phone}</p>

        <div className="flex justify-center gap-2 mt-4">

          <Link
            to={`/user/contact/${contact.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            View
          </Link>

          <Link
            to={`/user/edit-contact/${contact.id}`}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Edit
          </Link>

          <button
            onClick={() => onDelete(contact.id)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>

        </div>
      </div>

    </div>
  );
};

export default ContactCard;