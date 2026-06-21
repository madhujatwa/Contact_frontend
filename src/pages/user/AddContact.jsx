import ContactForm from "../../components/contact/ContactForm";
import { addContact } from "../../services/contactService";
import { useNavigate } from "react-router-dom";

const AddContact = () => {

    const navigate = useNavigate();

    const handleSubmit = async (data) => {

        try {

            const formData = new FormData();

            Object.keys(data).forEach((key) => {

                formData.append(key, data[key]);

            });

            await addContact(formData);

            alert("Contact Added Successfully");

            navigate("/user/contacts");

        } catch (error) {

            console.log(error);

            alert("Failed to add contact");

        }

    };

    return (

        <div className="max-w-4xl mx-auto mt-8">

            <ContactForm onSubmit={handleSubmit} />

        </div>

    );

};

export default AddContact;