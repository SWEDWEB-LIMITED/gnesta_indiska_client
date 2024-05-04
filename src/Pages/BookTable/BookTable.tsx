import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const BookTable: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_s89e2j9", "template_gtpr0e8", form.current, {
          publicKey: "QfrgjdnPthuXQeWP1",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            Swal.fire("Success!", "Bord bokat framgångsrikt.", "success");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            Swal.fire("Error!", "En oväntad fel uppstod.", "error");
            form.current?.reset();
          }
        );
    }
  };

  return (
    <div className="min-h-screen flex  items-center font-semibold justify-center py-16 ">
      <div className="max-w-xl w-full mx-auto bg-[#ffaa36] p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center  mb-6">Boka ett bord</h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <label className="text-sm ">Namn</label>
          <input
            type="text"
            name="user_name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#ea062b]"
            required
          />

          <label className="text-sm ">E-post</label>
          <input
            type="email"
            name="user_email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#ea062b]"
            required
          />

          <label className="text-sm ">Kontaktnummer</label>
          <input
            type="tel"
            name="contact_number"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#ea062b]"
            required
          />

          <label className="text-sm ">Bokningsdatum</label>
          <input
            type="date"
            name="booking_date"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#ea062b]"
            required
          />

          <label className="text-sm ">Bokningstid (HH:MM)</label>
          <input
            type="time"
            name="booking_time"
            className="p-3 border w-full border-gray-300 rounded-md focus:outline-none focus:border-[#ea062b]"
            required
          />

          <label className="text-sm ">Hur många gäster </label>
          <input
            type="text"
            name="food_name"
            className="p-3 border w-full border-gray-300 rounded-md focus:outline-none focus:border-[#ea062b]"
            required
          />

          <label className="text-sm ">Särskilt meddelande</label>
          <textarea
            name="special_message"
            className="p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-[#ea062b]"
          />

          <button
            type="submit"
            className="btn btn-outline font-bold py-3 px-6 rounded-md hover:bg-red-800 transition duration-300"
          >
            Boka Bord
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTable;
