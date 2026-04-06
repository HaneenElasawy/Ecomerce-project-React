import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AppContext } from "../context/AppContext";

export default function ContactPage() {
  const { darkMode } = useContext(AppContext);

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string(),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message must be at most 500 characters"),
  });

  return (
    <div
      className={
        darkMode
          ? "min-h-[80vh] flex items-center justify-center bg-gray-900 p-6"
          : "min-h-[80vh] flex items-center justify-center bg-gray-50 p-6"
      }
    >
      <div
        className={
          darkMode
            ? "w-full max-w-2xl bg-gray-800 text-white rounded-2xl shadow-xl p-8 border border-gray-700"
            : "w-full max-w-2xl bg-white rounded-2xl shadow p-8"
        }
      >
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
            setStatus("We will get to you soon.");
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, status }) => (
            <Form className="space-y-5">
              {status && (
                <p
                  className={
                    darkMode
                      ? "bg-green-900 text-green-200 p-3 rounded-lg"
                      : "bg-green-100 text-green-700 p-3 rounded-lg"
                  }
                >
                  {status}
                </p>
              )}

              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <Field
                  type="text"
                  name="email"
                  className={
                    darkMode
                      ? "w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                      : "w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  }
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className={
                      darkMode
                        ? "w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                        : "w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }
                    placeholder="Enter first name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className={
                      darkMode
                        ? "w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                        : "w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }
                    placeholder="Enter last name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <Field
                  type="text"
                  name="phone"
                  className={
                    darkMode
                      ? "w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                      : "w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  }
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  rows="6"
                  className={
                    darkMode
                      ? "w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                      : "w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  }
                  placeholder="Enter your message"
                />
                <ErrorMessage
                  name="message"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}