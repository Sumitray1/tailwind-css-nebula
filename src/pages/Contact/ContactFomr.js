import React from "react";

function ContactFomr() {
  return (
    <div className=" p-20 rounded-r-lg bg-primary  mob:p-4 mob:rounded-none  ">
      <form className="flex flex-col gap-y-10">
        <h1 className="text-4xl font-semibold mb-5 text-white">Message us</h1>

        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0">
          <input
            type="text"
            placeholder="First name"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />

          <input
            type="text"
            placeholder="Last name"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex space-x-10 sm:flex-col sm:space-y-10 sm:space-x-0">
          <input
            type="email"
            placeholder="Email"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />

          <input
            type="number"
            placeholder="number"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray- w-full"
          />
        </div>

        <div className="flex space-x-10">
          <textarea
            type="text"
            rows={5}
            placeholder="Message"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex justify-left mob:mb-6">
          <button className="text-white bg-secondary px-14 py-3 rounded max-w-max mob:px-29 mob:ml-1 mob:tracking-wide">
            Send A Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactFomr;
