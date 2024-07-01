import React from 'react'

const ContactUs = () => {
  return (
      <div className="min-h-[10vh] p-10 w-[600px] mx-auto mobile:w-[380px] xxs:w-[300px]">
        <div className="flex justify-center items-center ">
          <div className=" flex items-center flex-col mb-8">
            <h1 className="text-3xl font-semibold text-center">
              Contact Us Form
            </h1>
            <div className="flex gap-1 my-4">
              <div className="w-14 h-[5px] rounded-full bg-primary"></div>
              <div className="w-4 h-[5px] rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
        <div className=" bg-lightGrey border-primary p-6 rounded-lg w-full">
          <div className="w-full  mb-3">
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-whtie p-2 outline-none rounded-md w-full"
            />
          </div>
          <div className="w-full  mb-3">
            <p>Email</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-whtie p-2 outline-none rounded-md w-full"
            />
          </div>
          <div className="w-full  mb-3">
            <p>Message</p>
            <textarea
              name=""
              placeholder="Your message"
              id=""
              rows={4}
              className="bg-whtie p-2 outline-none resize-none rounded-md w-full"
            ></textarea>
          </div>
          <div>
            <button className="text-white bg-primary p-2 w-full outline-none rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>

  );
}

export default ContactUs
