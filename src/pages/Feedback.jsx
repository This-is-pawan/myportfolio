import React, { useState } from "react";
import { RiFeedbackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../components/ContextApi";

const Feedback = () => {
  const navigate = useNavigate();
  const { isDarkTheme, toast } = GlobalContext();

  const [Xmark, setXmark] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return toast.error("Please fill all fields");
    }

    try {
      const res = await fetch("http://localhost:4000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`Thanks ${form.name}!`);
        navigate("/");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.msg || "Error sending feedback");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  // ❗ If closed → don't show anything
  if (Xmark) return null;

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      
      <div
        className={`relative w-full max-w-md p-6 rounded-xl shadow-lg ${
          isDarkTheme ? "bg-slate-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => setXmark(true)}
          className="absolute top-3 right-3 text-lg font-bold hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-center mb-4 flex justify-center items-center gap-2">
          <RiFeedbackLine /> Feedback
        </h2>

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

          <button
            className="w-full py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
