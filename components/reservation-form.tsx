"use client";

import * as React from "react";

const inputClasses =
  "w-full rounded border border-foreground/15 bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";
const labelClasses = "mb-1.5 block text-sm font-semibold";

export function ReservationForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: front-end only demo. To receive real submissions, wire this up
    // to a backend endpoint or a service like Formspree / Netlify Forms,
    // then replace this handler with a real fetch()/POST call.
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>Full name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone number</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className={labelClasses}>Email address</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className={labelClasses}>Preferred date</label>
          <input id="date" name="date" type="date" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="time" className={labelClasses}>Preferred time</label>
          <input id="time" name="time" type="time" required className={inputClasses} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="guests" className={labelClasses}>Party size</label>
          <select id="guests" name="guests" required className={inputClasses}>
            <option value="">Select</option>
            <option>1–2 guests</option>
            <option>3–4 guests</option>
            <option>5–8 guests</option>
            <option>9+ guests (private event)</option>
          </select>
        </div>
        <div>
          <label htmlFor="area" className={labelClasses}>Preferred area</label>
          <select id="area" name="area" className={inputClasses}>
            <option value="">No preference</option>
            <option>Dining room</option>
            <option>Lounge / bar</option>
            <option>Patio</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClasses}>Occasion or special requests</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Birthday, anniversary, dietary needs..."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Send Reservation Inquiry
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        This form is front-end only. Connect it to a backend or a service such as Formspree/Netlify Forms to receive real submissions by email.
      </p>

      {submitted && (
        <div role="status" className="mt-4 rounded border border-secondary/30 bg-secondary/10 px-5 py-4 text-sm text-foreground">
          <p className="font-semibold text-primary">Thanks — we’ve received your request.</p>
          <p className="mt-1 text-muted-foreground">Our team will confirm your reservation shortly and follow up with any special requests.</p>
        </div>
      )}
    </form>
  );
}
