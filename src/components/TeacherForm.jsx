import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const classes = [
  "Chemistry II",
  "English Advanced",
  "Algebra I",
  "Computer Science",
];

export default function TeacherForm({ name }) {
  return (
    <Formik
      initialValues={{
        fullName: name,
        teacherId: "",
        contact: "",
        class: "",
      }}
      validationSchema={Yup.object({
        fullName: Yup.string().required("Please enter your name"),
        teacherId: Yup.string()
          .required("Please enter your Teacher's ID")
          .min(8, "ID should be a minimun of 8 characters"),
        class: Yup.string()
          .oneOf([...classes], "Please select a class")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmiting }) => {
        console.table(values);
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
          htmlFor="teacherId"
        >
          Teacher ID <span>*</span>
        </label>
        <Field
          style={{ outline: "1px", outlineColor: "black" }}
          className="py-2 px-2 "
          name="teacherId"
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
        <label
          className="mt-4 text-sm text-gray-500 w-full flex bg-white pt-2 pl-2"
          htmlFor="class"
        >
          Select a class
        </label>
        <Field className="py-2 px-2  bg-white" name="class" as="select">
          {classes.map((c) => {
            return <option value={c}>{c}</option>;
          })}
        </Field>
        <button
          className=" py-4 mt-10 mb-10 mx-auto w-1/2 bg-orange-400 text-white text-lg rounded-xl hover:bg-orange-500"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
