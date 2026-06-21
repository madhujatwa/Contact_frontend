export default function Contact() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <input className="w-full border p-2 mb-3" placeholder="Your Name" />
      <input className="w-full border p-2 mb-3" placeholder="Email" />
      <textarea className="w-full border p-2 mb-3" placeholder="Message" />

      <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Send Message
      </button>
    </div>
  );
}