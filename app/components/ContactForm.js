"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: null, email: null, message: null });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function validateName(value) {
    const v = value.trim();
    if (!v) return "Name is required.";
    if (v.length < 2) return "Name must be at least 2 characters.";
    if (v.length > 80) return "Name must be at most 80 characters.";
    if (!/^[A-Za-z][A-Za-z .'-]*$/.test(v)) return "Use letters, spaces, apostrophes, periods or hyphens only.";
    return null;
  }

  function validateEmail(value) {
    const v = value.trim();
    if (!v) return "Email is required.";
    if (v.length > 120) return "Email must be at most 120 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email address.";
    return null;
  }

  function validateMessage(value) {
    const v = value.trim();
    if (!v) return "Message is required.";
    if (v.length < 10) return "Message must be at least 10 characters.";
    if (v.length > 1000) return "Message must be at most 1000 characters.";
    return null;
  }

  function setField(nameKey, value) {
    if (nameKey === "name") setName(value);
    if (nameKey === "email") setEmail(value);
    if (nameKey === "message") setMessage(value);
  }

  function runValidation(field, value) {
    let err = null;
    if (field === "name") err = validateName(value);
    if (field === "email") err = validateEmail(value);
    if (field === "message") err = validateMessage(value);
    setErrors(prev => ({ ...prev, [field]: err }));
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const nameErr = validateName(trimmedName);
    const emailErr = validateEmail(trimmedEmail);
    const messageErr = validateMessage(trimmedMessage);
    setErrors({ name: nameErr, email: emailErr, message: messageErr });
    if (nameErr || emailErr || messageErr) return;

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, message: trimmedMessage }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send. Try again later.");
      }

      setStatus({ type: "success", message: "Thanks! I will get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => { setField("name", e.target.value); runValidation("name", e.target.value); }}
          onBlur={(e) => runValidation("name", e.target.value)}
          placeholder="Enter your full name"
          minLength={2}
          maxLength={80}
          pattern="[A-Za-z][A-Za-z .'-]*"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={errors.name ? "invalid" : undefined}
          required
        />
        {errors.name && <small id="name-error" className="field-error">{errors.name}</small>}
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => { setField("email", e.target.value); runValidation("email", e.target.value); }}
          onBlur={(e) => runValidation("email", e.target.value)}
          placeholder="your.email@company.com"
          maxLength={120}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={errors.email ? "invalid" : undefined}
          required
        />
        {errors.email && <small id="email-error" className="field-error">{errors.email}</small>}
      </div>

      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => { setField("message", e.target.value); runValidation("message", e.target.value); }}
          onBlur={(e) => runValidation("message", e.target.value)}
          placeholder="Tell me about your project or how we can collaborate..."
          minLength={10}
          maxLength={1000}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={errors.message ? "invalid" : undefined}
          required
        />
        {errors.message && <small id="message-error" className="field-error">{errors.message}</small>}
      </div>

      {status && (
        <div className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"}>
          {status.message}
        </div>
      )}

      <button
        className="btn-gradient-fill"
        type="submit"
        disabled={submitting || Boolean(errors.name || errors.email || errors.message)}
        aria-busy={submitting}
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}


