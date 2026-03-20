
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import "./Contact.css";
export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectDetail: ""
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const isValid =
    form.name.trim() &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.projectDetail.trim().length > 10;

  function handleChange(e) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid || sending) return;

    setSending(true);

    try {
      await emailjs.send(
        "service_2rmexaw",
        "template_u26ud7j",
        form,
        "aKYBvf22AGTvSG7ZU"
      );

      setSent(true);
      setForm({ name: "", email: "", projectDetail: "" });

    } catch (err) {
      alert("Failed to send. Try again.");
    }

    setSending(false);
  }

  return (
    <section className="contactSection">
      <h1>Get In Touch</h1>
      <p>Please contact me directly at devansh6264@gmail.com or through this form</p>

      <form onSubmit={handleSubmit} noValidate>

        <label htmlFor="name-input">Your name</label>
        <input
          id="name-input"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          required
        />

        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@gmail.com"
          required
        />

        <label htmlFor="project-input">Project Details</label>
        <textarea
          id="project-input"
          name="projectDetail"
          value={form.projectDetail}
          onChange={handleChange}
          placeholder="Goal, timeline, scope, success metrics..."
          required
        />

        <button type="submit" disabled={!isValid || sending}>
          {sending ? "Sending..." : sent ? "Sent ✓" : "Send Message"}
        </button>

      </form>
    </section>
  );
}
