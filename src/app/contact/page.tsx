import React from "react";

function ContactPage() {
  return (
    <div className="w-full ">
      <form action="" className="flex flex-col w-1/2 mx-auto gap-1">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="h-10 rounded-lg shadow-sm outline-none"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="h-10 rounded-lg shadow-sm outline-none"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id=""
          className=" rounded-lg shadow-sm focus:outline-none"
        />
        <button
          type="submit"
          className="bg-slate-900 text-white sm:px-5 sm:py-2 rounded-lg shadow-md w-1/4 mx-auto mt-2 text-center"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
