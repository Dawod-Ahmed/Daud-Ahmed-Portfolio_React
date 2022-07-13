import React, { useEffect } from "react";
import { FormField } from "../../components/pagesExport";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  ContactRightArrow,
  SelfHireImage,
  // Upworklogo,
} from "../../../assets/assets";
import axios from "axios";
// import { useForm } from "@formspree/react";

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Swal from "sweetalert2";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is Invalid").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  detail: Yup.string().required("Detail is required"),
});

const ContactForm = () => {
  // const [state, handleSubmit] = useForm("mayvzygj");

  const UpworkProfileCTA = () => {
    // location.hre
    window.location.href =
      "https://www.upwork.com/freelancers/~01b5302c92f0a61e20";
  };

  const verifyVideo = () => {
    Swal.fire({
      text: "Your Message is sent!,Thanks",
      icon: "success",
      showConfirmButton: false,
      timer: 3000000,
    });
  };

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <>
      <section className="contact-section-parent py-5 mb-5 flex-column flex-lg-row ">
        <div className="contact-left-content position-relative">
          <h1 className="heading  freelancing-heading">
            <span className="heading-first">Let's</span>
            {/* <img src="" alt="" /> */}
            <img
              src={ContactRightArrow}
              alt="img"
              className="contact-form-right-icon px-5 pb-3"
            />
            <br />
            <span className="heading-second ">Connect</span>
          </h1>
          <p id="testpara" className="general-text pt-3 pb-5 px-md-2 px-md-3">
            If you have any queries, please do not hesitate to send me a
            message. I will reply to you in just a few minutes, and I will be
            happy to help you with your web development query.
          </p>

          <div className="open-for-porject position-absolute rounded-circle d-flex justify-content-center align-items-center text-center p-lg-4 p-xl-3">
            Open for new project{" "}
          </div>
          <div className="background-text">Inquires</div>
        </div>

        <div className="card contact-right-form">
          <MouseParallaxContainer
            className="parallax"
            containerStyles={{
              width: "100%",
              overflow: "visible",
              gridTemplateColumns: "auto auto auto auto auto",
            }}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.08}
              factorY={0.06}
              updateStyles={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <img src={SelfHireImage} className="card-img-top" alt="img" />
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <div className="card-body">
            <h5 className="card-title general-text ">Upwork</h5>
            <p className="card-text general-text">
              The world best freelancing marketplace to hire professional
              freelancers.
            </p>
            <div className="hireme-cta-parent d-flex align-items-center justify-content-center py-3">
              <p className="hireMe-text general-text mb-0 px-4">Hire me on</p>
              <div
                className="btn btn-primary hireme-cta"
                onClick={UpworkProfileCTA}
              >
                {" "}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="contact-right-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              number: "",
              subject: "",
              detail: "",
            }}
            validationSchema={SignupSchema}
            // onSubmit={handleForm}
            onSubmit={(values) => {
              axios
                .post("https://formcarry.com/s/smYVGwkdJ3v", values, {
                  headers: { Accept: "application/json" },
                })
                .then(function (response) {
                  if (response.status === 200) {
                    alert(
                      "Your form is submmitted,We will get back to you soon,Thanks"
                    );
                  }
                })
                .catch(function (error) {
                  console.log(error);
                  alert(error);
                });
            }}
          >
            {({ errors, touched, getFieldMeta }) => (
              <Form
                className=" form-floating  mb-3 row g-3 d-flex  justify-content-end form main-form-parent"
                // onSubmit={handleSubmit}
              >
                <FormField
                  type="text"
                  className={`name-input ${
                    errors.name && touched.name ? "border-danger" : ""
                  }`}
                  name="name"
                  id="floatingNameInput"
                  placeholder="Name"
                />

                <FormField
                  type="email"
                  className={`email-input ${
                    errors.email && touched.email ? "border-danger" : ""
                  }`}
                  name="email"
                  id="floatingEmailInput"
                  placeholder="Email address"
                />

                <FormField
                  type="text"
                  className={`number-input ${
                    errors.number && touched.number ? "border-danger" : ""
                  }`}
                  name="number"
                  id="floatingNumberInput"
                  placeholder="Contact Number (Optional)"
                />
                <FormField
                  type="text"
                  className={`subject-input ${
                    errors.subject && touched.subject ? "border-danger" : ""
                  }`}
                  name="subject"
                  id="floatingSubjectInput"
                  placeholder="Subject"
                />

                <FormField
                  type="text"
                  className={`detail-input ${
                    errors.detail && touched.detail ? "border-danger" : ""
                  }`}
                  name="detail"
                  id="floatingtextareaInput"
                  placeholder="Please write details here"
                />

                <button
                  type="submit"
                  className="btn form-btn mx-2"
                  onClick={() => verifyVideo()}
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div> */}
      </section>
    </>
  );
};

export default ContactForm;

{
  /* <div className="nameinpput-parent form-floating ">
                  <Field
                    type="text"
                    className={`bg-transparent text-white border-0 border-bottom name-input input form-control  ${
                      errors.name && touched.name ? "border-danger" : ""
                    }`}
                    name="name"
                    id="floatingNameInput"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="floatingNameInput "
                    className="h-auto text-white floatinglbl "
                  >
                    &nbsp; Name{" "}
                  </label>

                  {errors.name && touched.name ? (
                    <div className="error_msg text-danger">{errors.name}</div>
                  ) : null}
                </div> */
}
{
  /* <div className="emailinpput-parent form-floating ">
                  <Field
                    type="email"
                    className={`email-input form-control  ${
                      errors.email && touched.email ? "border-danger" : ""
                    }`}
                    name="email"
                    id="floatingEmailInput"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="floatingEmailInput "
                    className="h-auto text-muted  "
                  >
                    &nbsp; Email address{" "}
                  </label>

                  {errors.email && touched.email ? (
                    <div className="error_msg text-danger">{errors.email}</div>
                  ) : null}
                </div> */
}
{
  /* <div className="numberinpput-parent form-floating ">
                  <Field
                    type="text"
                    className={`number-input form-control  ${
                      errors.number && touched.number ? "border-danger" : ""
                    }`}
                    name="number"
                    id="floatingNumberInput"
                    placeholder="Contact Number (Optional)"
                  />
                  <label
                    htmlFor="floatingNumberInput "
                    className="h-auto text-muted  "
                  >
                    &nbsp; Contact Number (Optional){" "}
                  </label>

                  {errors.number && touched.number ? (
                    <div className="error_msg text-danger">{errors.number}</div>
                  ) : null}
                </div> */
}

{
  /* 
                
                
                
                
                
                <div className="textareainpput-parent form-floating ">
                  <Field     
                    type="textarea" 
                    as="textarea"  className={`textarea-input form-control form-textarea  textarea ${
                      errors.detail && touched.detail ? "border-danger" : ""
                    }`}
                      name="detail"
                      id="floatingtextareaInput"
                    placeholder="Please write details here"
                  />
                  <label
                    htmlFor="floatingtextareaInput "
                    className="h-auto text-muted  "
                  >
                    &nbsp; Please write details here
                  </label>

                  {errors.detail && touched.detail ? (
                    <div className="error_msg text-danger">{errors.detail}</div>
                  ) : null}
                </div> */
}
