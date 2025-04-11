import React from "react";
import Link from "next/link";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const useForm = (initialValues: FormValues) => {
  const [values, setValues] = React.useState<FormValues>(initialValues);
  const [errors, setErrors] = React.useState<FormErrors>({});

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const validate = React.useCallback(() => {
    const newErrors: FormErrors = {};

    // Basic validation rules
    if (!values.name) newErrors.name = "Name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!values.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        // Handle form submission
        console.log("Form submitted:", values);
        alert("Form submitted successfully!");
      }
    },
    [validate, values]
  );

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

const FormSolution: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Custom Form Hook (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates a custom hook for form handling with
          validation and error management.
        </p>

        {/* Form Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={4}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Hook Implementation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Hook Implementation</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-black">
              {`const useForm = (initialValues: FormValues) => {
  const [values, setValues] = React.useState<FormValues>(initialValues);
  const [errors, setErrors] = React.useState<FormErrors>({});

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const validate = React.useCallback(() => {
    const newErrors: FormErrors = {};
    
    if (!values.name) newErrors.name = "Name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (values.email && !/\\S+@\\S+\\.\\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!values.message) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values]);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        console.log("Form submitted:", values);
        alert("Form submitted successfully!");
      }
    },
    [validate, values]
  );

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};`}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Type-safe with TypeScript interfaces</li>
            <li>Form validation with error handling</li>
            <li>Automatic error clearing on input</li>
            <li>Reusable across different forms</li>
            <li>Optimized with useCallback</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/starter/form"
          className="text-blue-600 hover:underline"
        >
          View Starter Version
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default FormSolution;
