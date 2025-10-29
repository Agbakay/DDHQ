import React from "react";
import image from "../assets/Cnpontact.png";
import image2 from "../assets/email.png";
import image3 from "../assets/support.png";
import image4 from "../assets/contact_.png";
import image5 from "../assets/waitlist09.png";
import image_25 from "../assets/partners31.png";

const Contact = () => {
  return (
    <>
      <div>
        {/* Contact Hero Section */}
        <div className="hero lg:h-[500px] h-[400px] flex items-center justify-center text-center lg:px-[8%] px-6">
          <div>
            <h3 className="text-lg text-white font-semibold mb-3">
              Your One-Stop Help Center
            </h3>
            <h1 className="lg:text-5xl text-3xl text-white font-semibold mb-5">
              Contact Us <br />
              We’re Here to Help!
            </h1>
            <p className="text-white lg:px-[30%] px-0">
              Get quick answers to the most common questions about Detty
              December HQ, including event bookings, payments, refunds, and more
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form px-5 lg:px-[18%] py-28 bg-amber-50">
          <div className="row lg:flex gap-20">
            <div className="col">
              <div className="contact-text">
                <h1 className="heading text-3xl lg:text-5xl mb-3 font-semibold">
                  Drop A Line
                </h1>
                <p className="mb-5">
                  Have questions, feedback, or need assistance? We’re here to
                  help! Reach out to us and our support team will be happy to
                  assist you.
                </p>
              </div>
              <form action="">
                <div className="grid-cols-2 grid gap-5">
                  <div className="flex-col flex gap-3 ">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      className="border-1 py-3 px-3 rounded-sm"
                    />
                  </div>
                  <div className="flex-col flex gap-3">
                    <label htmlFor="fullname">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      className="border-1 py-3 px-3 rounded-sm "
                    />
                  </div>
                </div>
                <div className="flex-col flex gap-3 mb-5 mt-4">
                  <label htmlFor="fullname">Message</label>
                  <textarea
                    name=""
                    id=""
                    required
                    placeholder="Enter your message"
                    className="h-[200px] border-1 px-3 py-5 focus:border-brandOrange rounded-sm"
                  ></textarea>
                  <button
                    type="submit"
                    className="py-4 w-full bg-brandOrange rounded-sm text-white mt-5"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col">
              <img
                src={image}
                alt=""
                className="w-full h-full m-auto block object-contain"
              />
            </div>
          </div>
        </div>
        {/* Stop */}
        {/*  */}
        <div className="lg:px-[18%] py-28">
          <div className="lg:flex gap-32 ">
            <div className="basis-3/4">
              <h2 className="text-2xl text-brandOrange font-semibold mb-5">
                Contact Information
              </h2>
              <h1 className="lg:text-5xl text-3xl font-semibold">
                Get in Touch We're Here for You!
              </h1>
            </div>
            <div>
              <p>
                We’re here to help! Reach out to us through any of our contact
                channels, and our support team will be happy to assist you.
              </p>
            </div>
          </div>
          <div className="lg:flex gap-5 items-center  mt-10">
            <div className="bg-amber-200 px-10 py-10 rounded-2xl">
              <img src={image2} alt="" />
              <h2 className="font-semibold my-5">Email</h2>
              <a
                className="hover:text-brandGreen"
                href="mailto:support@dettydecemberhq.com"
              >
                support@dettydecemberhq.com
                <br />
                <br />
              </a>
            </div>
            <div className="bg-amber-200 px-10 py-10 rounded-2xl">
              <img src={image4} alt="" />
              <h2 className="font-semibold my-5">Phone Contact</h2>
              <a
                className="hover:text-brandGreen"
                href="mailto:support@dettydecemberhq.com"
              >
                Reach customers specifically interested in nightlife, events.
              </a>
            </div>
            <div className="bg-amber-200 px-10 py-10 rounded-2xl">
              <img src={image3} alt="" />
              <h2 className="font-semibold my-5">Help & Support</h2>
              <a
                className="hover:text-brandGreen"
                href="mailto:support@dettydecemberhq.com"
              >
                Connect with a support representative in real time
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="py-28 lg:px-[20%] px-5">
          <div className="lg:flex justify-between items-center gap-28">
            <div className="basis-1/2 ">
              <h1 className="text-3xl lg:text-5xl font-semibold lg:leading-[55px] mb-5">
                Join the Detty December HQ Community
              </h1>
              <p className="mb-10">
                Stay connected, stay updated, and be part of the ultimate event
                experience! Follow us on social media, engage with fellow
                fun-seekers, and never miss an update on the hottest events,
                exclusive deals, and special rewards.
              </p>
              <div className="socials mb-10 flex gap-5 ">
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-facebook   text-brandGreen hover:text-white "></i>
                </span>
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-instagram text-brandGreen hover:text-white  "></i>
                </span>
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-x-twitter  text-brandGreen hover:text-white  "></i>
                </span>
                <span className="flex justify-center items-center w-5 h-5 border-1 border-green-600 rounded-full p-5 hover:bg-brandOrange hover:border-white">
                  <i className="fa-brands fa-tiktok  text-brandGreen hover:text-white "></i>
                </span>
              </div>
            </div>
            <div>
              <img src={image5} alt="" width={500} />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="px-5 lg:px-[18%] py-24">
          <div className="wrapper">
            <div className="row lg:flex gap-20 justify-between items-center bg-green-100 px-20 py-10 rounded-lg">
              <div>
                <h1 className="heading text-3xl lg:text-5xl font-semibold mb-5">
                  Need Help?
                </h1>
                <h3 className="text-brandGreen font-semibold text-2xl mb-5">
                  Chat with Us on WhatsApp!
                </h3>
                <p className="mb-10">
                  Got questions? Our support team is available to assist you
                  anytime.
                </p>
                <a
                  href="#"
                  className="py-3 px-6 text-white bg-brandOrange rounded-sm hover:bg-brandGreen"
                >
                  Chat with us on whatsApp
                </a>
              </div>
              <div>
                <img src={image_25} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Contact;
