import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Register() {
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "not less than 6")
        .max(12, "max is 12")
        .required("Required"),
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .matches(/^[A-z][a-z0-9]{5,8}/, "Invalid password format")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "should match password")
        .required("Required"),
      agree: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-500 mb-6">
          Register
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-green-500">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-green-500 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Abdo Ali"
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="text-red-500 text-md">{formik.errors.name}</p>
            ) : null}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-green-500">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-green-500 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="abdo@example.com"
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-500 text-md">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-green-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-green-500 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="••••••"
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-500 text-md">{formik.errors.password}</p>
            ) : null}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-green-500">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-3 py-2 border border-green-500 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="••••••"
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <p className="text-red-500 text-md">
                {formik.errors.confirmPassword}
              </p>
            ) : null}
          </div>

          {/* TermsCheckbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
              className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
            />
            <label className="ml-2 text-sm text-green-500">
              I accept the terms and conditions
            </label>
            {formik.errors.agree && formik.touched.agree ? (
              <p className="text-red-500 text-sm">{formik.errors.agree}</p>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Register
          </button>

          {/* Already have an account? */}
          <p className="text-center text-green-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
