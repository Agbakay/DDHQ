import React, { useState } from "react";

const Subscribe = ({
  buttonColor = "bg-brandGreen",
  hoverColor = "bg-green-700",
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (!email) {
      setError("Enter your email address!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // If valid
    console.log("Form submitted with email:", email);
    setSuccess("✅ You have successfully joined the waitlist!");
    setEmail("");
  };

  return (
    <div className="mt-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 sm:gap-0"
      >
        <div className="flex items-center justify-center">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="h-[58px] px-5 border sm:w-[500px] bg-white"
          />
          <button
            type="submit"
            className={`h-[59px] ${buttonColor} ${hoverColor} w-[200px] text-white px-5 transition-colors duration-300`}
          >
            Join the Waitlist
          </button>{" "}
        </div>
      </form>

      {/* Error & success messages */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-600 mt-2">{success}</p>}
    </div>
  );
};

export default Subscribe;
