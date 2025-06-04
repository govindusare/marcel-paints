import React from "react";

function ContactUsForm() {
  return (
    <div className="flex flex-col items-center justify-center gap-[1.5rem] mx-0 my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem] bg-gray-200 rounded-none sm:rounded-[2.625rem] overflow-hidden">
      {/* Contact Us Header */}
      <div className="text-center space-y-3 mt-[2.813rem] sm:mt-[5.625rem]">
        <h1 className="text-[1.5rem] sm:text-[4.5rem] font-semibold leading-[1.875rem] sm:leading-[5rem] text-gradient">
          Reach Out to Us
        </h1>
        <p className="text-[0.875rem] sm:text-[2rem] font-normal text-[#293036]">
          Anytime from Anywhere
        </p>
      </div>

      <div className="flex items-center flex-col-reverse sm:flex-row gap-4 p-[1rem] sm:p-[7.188rem]">
        {/* Contact Us Details */}
        <div className="text-[1.125rem] font-normal text-[#232323] space-y-8 py-6 sm:py-0 w-full sm:w-1/2">
          <div className="space-y-3 w-full sm:w-[21.25rem]">
            <h3 className="text-[1.5rem] font-semibold">Contact Us</h3>
            <p className="text-[#888888]">
              Email, call or complete the form to solve your queries
            </p>
            <p>Email: info@marcelpaints.com</p>
            <p>Call: +91 7878 7878 78</p>
            <p>Corporate Office:</p>
            <p className="text-[#888888]">Maharashtra, India 411014</p>
          </div>
          <div className="space-y-3 w-full sm:w-[21.25rem]">
            <p>Customer Support</p>
            <p className="text-[#888888]">
              Our support team is available around the clock to address any
              concerns or queries you may have.
            </p>
          </div>
        </div>

        {/* Contact Us Form */}
        <div className="bg-[#FFFFFF] shadow-lg sm:rounded-[2.625rem] rounded-[1.25rem] w-full sm:w-[38.25rem] p-[1.25rem] sm:p-[2.875rem] text-sm sm:text-base">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="rounded-2xl border-1 border-[#BFBFBF] outline-none col-span-2 sm:col-span-1 p-[1rem] sm:p-[1.25rem]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-2xl border-1 border-[#BFBFBF] outline-none col-span-2 sm:col-span-1 p-[1rem] sm:p-[1.25rem]"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border-1 border-[#BFBFBF] outline-none col-span-2 sm:col-span-1 p-[1rem] sm:p-[1.25rem]"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="rounded-2xl border-1 border-[#BFBFBF] outline-none col-span-2 sm:col-span-1 p-[1rem] sm:p-[1.25rem]"
              />
              <textarea
                placeholder="How can we help?"
                className="rounded-2xl border-1 border-[#BFBFBF] outline-none p-[1.25rem] col-span-2"
              ></textarea>
              <button className="col-span-2 bg-gradient text-base sm:text-lg text-white py-[0.75rem] sm:py-[1.125rem] rounded-3xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
