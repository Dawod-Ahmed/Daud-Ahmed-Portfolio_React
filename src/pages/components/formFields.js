import React from "react";
import { Field, ErrorMessage } from "formik";

const FormFields = (props) => {
  const { type, className, name, id, placeholder } = props;

  return (
    <>
      <div className="form-floating ">
        <Field
          as={name === "detail" ? "textarea" : ""}
          //   as="textarea"
          type={type}
          className={`bg-transparent ${className} ${
            name === "detail" ? "border" : "border-0 border-bottom"
          } input form-control text-white   `}
          name={name}
          id={id}
          placeholder={placeholder}
        />
        <label htmlFor={id} className="h-auto floatinglbl ">
          &nbsp; {placeholder}
        </label>

        <ErrorMessage
          component="span"
          name={name}
          className="px-3 error text-danger "
        />
      </div>
    </>
  );
};

export default FormFields;
// ${
//     errors.name && touched.name ? "border-danger" : ""
//   }
