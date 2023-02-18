import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function StudentForm({ name, onFormSubmit }) {
  return (
    <Formik
      initialValues={{
        fullName: name,
        universityId: "",
        contact: "",
      }}
      validationSchema={Yup.object({
        fullName: Yup.string().required("Please enter your name"),
        universityId: Yup.string()
          .required("Please enter your Teacher's ID")
          .min(8, "ID should be a minimun of 8 characters"),
        contact: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmiting }) => {
        onFormSubmit(values);
        setSubmiting(false);
      }}
    >
      <Form className="w-full max-w-md px-4 flex flex-col">
        <label
          className="mt-4 text-sm text-gray-500 w-full flex bg-white py-2 pl-2"
          htmlFor="fullName"
        >
          Full Name<span>*</span>
        </label>
        <Field
          style={{ outline: "1px", outlineColor: "black" }}
          className="py-2 px-2 "
          name="fullName"
          type="text"
        />
        <label
          className="mt-4 text-sm text-gray-500 w-full flex bg-white py-2 pl-2"
          htmlFor="universityId"
        >
          University roll number <span>*</span>
        </label>
        <Field
          style={{ outline: "1px", outlineColor: "black" }}
          className="py-2 px-2 "
          name="universityId"
        />
        <label
          className="mt-4 text-sm text-gray-500 w-full flex bg-white py-2 pl-2"
          htmlFor="contact"
        >
          Contact Number
        </label>
        <Field
          style={{ outline: "1px", outlineColor: "black" }}
          className="py-2 px-2 "
          name="contact"
          type="text"
        />

        <button
          className=" py-4 mt-20 mx-auto w-1/2 bg-orange-400 text-white text-lg rounded-xl hover:bg-orange-500"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
