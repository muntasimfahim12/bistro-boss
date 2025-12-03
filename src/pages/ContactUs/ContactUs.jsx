import React, { useState } from "react";
import OrderCover1 from "../../assets/contact/banner.jpg";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const ContactUs = () => {
  const [darkMode, setDarkMode] = useState(false);



  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 border rounded hover:bg-purple-600 hover:text-white transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Cover */}
      <Cover
        img={OrderCover1}
        title="CONTACT US"
        subtitle="Would you like to try a dish?"
      />

      {/* Location Title */}
      <SectionTitle subTitle="---Visit Us---" title="OUR LOCATION" />

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-center text-gray-500 mb-10">
          Feel free to contact us. Submit your queries and we will respond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: "❓", title: "Help Center" },
            { icon: "☎️", title: "Call Us Now" },
            { icon: "💬", title: "Chat With Us" },
            { icon: "✉️", title: "Email Us Now" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    Get Question? We have an answer.
                  </p>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Title */}
      <SectionTitle subTitle="---Send Us a Message---" title="CONTACT FORM" />

      {/* Form + Map */}
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-10 lg:px-20 py-10 gap-10">
        {/* Form */}
        <form className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <TextField label="First Name" required fullWidth />
            <TextField label="Last Name" required fullWidth />
          </div>

          <TextField label="Email" type="email" required fullWidth />
          <TextField label="Phone Number" type="tel" fullWidth />
          <TextField label="Message" multiline rows={4} required fullWidth />

          <FormControlLabel
            control={<Checkbox required />}
            label="You agree to our friendly privacy policy."
          />

       
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              padding: { xs: "12px 20px", sm: "14px 40px" },
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "600",
              borderRadius: "10px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1976d2",
                boxShadow: "0px 6px 18px rgba(0,0,0,0.25)",
              },
            }}
          >
            Send Message
          </Button>
        </form>

        {/* Map */}
        <div className="flex-1 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
          <iframe
            title="location-map"
            className="w-full h-full rounded-lg border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509604!2d144.9537353153166!3d-37.81627974202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773e0f2c17d15a!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sbd!4v1697037041234!5m2!1sen!2sbd"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
