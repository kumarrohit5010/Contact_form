import React from "react";


const ContactForm = () => {
  return (
    <div className="contact-container">
      
      {/* LEFT FORM */}
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-left"
      >
        <div className="contact-left-title">
          <h2>Get In Touch!</h2>
          <hr />
        </div>

        <input
          type="hidden"
          name="access_key"
          value={process.env.REACT_APP_CONTACT_API_KEY}
        />

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          className="contact-inpust"
          required
        />

        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          className="contact-inpust"
          required
        />

        {/* row 1 */}
        <div className="form-row">
          <input
            type="number"
            placeholder="Age"
            name="age"
            min="1"
            max="120"
            className="contact-inpust"
            required
          />

          <select name="gender" className="contact-inpust" required>
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* row 2 */}
        <div className="form-row">
          <select name="education" className="contact-inpust" required>
            <option value="" disabled selected>
              Education Level
            </option>
            <option value="high-school">High School</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PhD</option>
          </select>

          <input
            type="text"
            placeholder="Nationality"
            name="nationality"
            className="contact-inpust"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Enter your message here"
        ></textarea>

        <button type="submit">
          Submit
          <img src="/assets/arrow_icon.png" alt="arrow" />
        </button>
      </form>

      {/* RIGHT IMAGE */}
      <div className="contact-right">
        <img src="/assets/right_img.png" alt="contact" />
      </div>
    </div>
  );
};

export default ContactForm;