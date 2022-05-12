import React, { useEffect } from "react";
import { FormField } from "../../components/pagesExport";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ContactRightArrow } from "../../../assets/assets";
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is Invalid").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  detail: Yup.string().required("Detail is required"),
});

const ContactForm = () => {
  return (
    <>
      <section className="contact-section-parent">
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
          <p id="testpara" className="general-text pt-3 pb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the 1500s, when an unknown printer
            took..
          </p>

          <div className="open-for-porject position-absolute rounded-circle d-flex justify-content-center align-items-center text-center p-2">
            Open for new project{" "}
          </div>
          <div className="background-text">Inquires</div>
        </div>

        <div className="contact-right-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              number: "",
              subject: "",
              detail: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values

              console.log(values);
            }}
          >
            {({ errors, touched, getFieldMeta }) => (
              <Form className=" form-floating  mb-3 row g-3 d-flex  justify-content-end form main-form-parent">
                <FormField
                  type="text"
                  className={`name-input ${
                    errors.name && touched.name ? "border-danger" : ""
                  }`}
                  name="name"
                  id="floatingNameInput"
                  placeholder="Name"
                />

                {/* <div className="nameinpput-parent form-floating ">
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
                </div> */}
                <FormField
                  type="email"
                  className={`email-input ${
                    errors.email && touched.email ? "border-danger" : ""
                  }`}
                  name="email"
                  id="floatingEmailInput"
                  placeholder="Email address"
                />

                {/* <div className="emailinpput-parent form-floating ">
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
                </div> */}
                <FormField
                  type="text"
                  className={`number-input ${
                    errors.number && touched.number ? "border-danger" : ""
                  }`}
                  name="number"
                  id="floatingNumberInput"
                  placeholder="Contact Number (Optional)"
                />

                {/* <div className="numberinpput-parent form-floating ">
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
                </div> */}

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

                {/* <div className="textareainpput-parent form-floating ">
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
                </div> */}

                <button type="submit" className="btn form-btn mx-2">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
