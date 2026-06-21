import { useEffect, useState } from "react";
import ContactTable from "../../components/contact/ContactTable";

import {
  getContacts,
  deleteContact,
  searchContacts,
} from "../../services/contactService";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  const [keyword, setKeyword] = useState("");

  const [page, setPage] = useState(0);

  const [totalPages, setTotalPages] = useState(1);

  const loadContacts = async () => {
    try {
      const data = await getContacts();

      // Backend pagination support
      if (data.content) {
        setContacts(data.content);
        setTotalPages(data.totalPages);
      } else {
        setContacts(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    try {
      const data = await searchContacts(keyword, page);

      setContacts(data.content);

      setTotalPages(data.totalPages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (keyword === "") {
      loadContacts();
    } else {
      handleSearch();
    }
  }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this contact?")) return;

    await deleteContact(id);

    loadContacts();
  };

  return (
    <div className="container mx-auto p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          My Contacts
        </h1>

      </div>

      {/* Search */}

      <div className="flex gap-3 mb-6">

        <input
          type="text"
          placeholder="Search Contact..."
          className="border rounded-lg px-4 py-2 w-full"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 rounded-lg"
        >
          Search
        </button>

      </div>

      <ContactTable
        contacts={contacts}
        onDelete={handleDelete}
      />

      {/* Pagination */}

      <div className="flex justify-center gap-3 mt-8">

        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {page + 1} of {totalPages}
        </span>

        <button
          disabled={page + 1 >= totalPages}
          onClick={() => setPage(page + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default ViewContacts;