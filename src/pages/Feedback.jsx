import React, { useState } from "react";
import { RiFeedbackLine } from "react-icons/ri";
import { GlobalContext } from "../components/ContextApi";

const Feedback = () => {
  const { isDarkTheme, toast } = GlobalContext();
  const [show, setShow] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return toast.error("Please fill all fields");
    }

    toast.success(`Thanks ${form.name}!`);
    setForm({ name: "", email: "", message: "" });
    setShow(false); // close after submit
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center px-4 bg-black/40 backdrop-blur-sm z-50">
      
      <div
        className={`relative w-full max-w-md p-6 rounded-xl shadow-lg ${
          isDarkTheme ? "bg-slate-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-xl font-bold hover:text-red-500"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center mb-4 flex justify-center items-center gap-2">
          <RiFeedbackLine /> Feedback
        </h2>

        {/* Form */}
        <form onSubmit={submitHandle} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 rounded-md border outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 rounded-md border outline-none"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your feedback..."
            rows={4}
            className="w-full p-2 rounded-md border outline-none"
          />

          <button className="w-full py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
