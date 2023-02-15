import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const classes = [
  "Chemistry II",
  "English Advanced",
  "Algebra I",
  "Computer Science",
];

export default function TeacherForm({ name, onFormSubmit }) {
  return (
    <Formik
      initialValues={{
        fullName: name,
        teacherId: "",
        contact: "",
      }}
      validationSchema={Yup.object({
        fullName: Yup.string().required("Please enter your name"),
        teacherId: Yup.string()
          .required("Please enter your Teacher's ID")
          .min(8, "ID should be a minimun of 8 characters"),
      })}
      onSubmit={(values, { setSubmiting }) => {
        // console.log(values);
        onFormSubmit(values);
        setSubmiting = false;
      }}
    >
      <Form
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   console.log("value");
        // }}
        className="w-full max-w-md px-4 flex flex-col"
      >
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
        <ErrorMessage name="fullName" />
        <label
          className="mt-4 text-sm text-gray-500 w-full flex bg-white py-2 pl-2"
          htmlFor="teacherId"
        >
          Teacher ID <span>*</span>
        </label>
        <Field
          style={{ outline: "1px", outlineColor: "black" }}
          className="py-2 px-2 "
          name="teacherId"
        />
        <ErrorMessage name="teacherId" />
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
          className=" py-4 mt-10 mb-10 mx-auto w-1/2 bg-orange-400 text-white text-lg rounded-xl hover:bg-orange-500"
          type="submit"
        >
          Next
        </button>
      </Form>
    </Formik>
  );
}
