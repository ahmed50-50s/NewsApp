import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function Login() {
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("Required"),
      password: Yup.string()
        .matches(/^[A-z][a-z0-9]{5,8}/, "Invalid password format")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-500 mb-6">
          Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
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
          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
                className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <label className="ml-2 text-sm text-green-500">Remember Me</label>
            </div>

            {/* Forgot Password */}
            <Link to="" className="text-green-400 text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>

          {/* Don't have an account? */}
          <p className="text-center text-green-500 mt-4">
            Do not have an account?{" "}
            <Link to="/register" className="text-green-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
