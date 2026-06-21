import ContactCard from "./ContactCard";

const ContactTable = ({ contacts, onDelete }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500 text-xl">
        No Contacts Found
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ContactTable;