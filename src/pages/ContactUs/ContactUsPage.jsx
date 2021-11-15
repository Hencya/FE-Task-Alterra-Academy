import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Form from "../../components/ContactUs/Form";

export default function ContactUsPage() {
  return (
    <div className="row row-cols-sm-1 row-cols-sm-2">
      <ContactUs />
      <Form />
    </div>
  );
}
