// import { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { authContext } from "../context/authContext.js";
// import { BASE_URL } from "../config";
// import { toast } from "react-toastify";

/**const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
      toast.error("Please enter a valid email address.");
    }

    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      toast.error("Password must be at least 6 characters.");
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }

        toast.success("Welcome Back!");

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: result.user,
            role: result.role,
            token: result.token,
          },
        });

        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("role", result.role);
        localStorage.setItem("token", result.token);

        setEmail("");
        setPassword("");
        setLoading(false);

        if (result.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/my-account");
        }
      } catch (error) {
        setErrors({ email: "Login failed. Please try again." });
        toast.error("Login failed. Please try again");
        setLoading(false);
      }
    }
  };

  async function handleGoogleAuth() {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/auth/google`, {
        method: "POST",
      });
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Error during authentication:", error);
      toast.error("Google Authentication failed. Please try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Log in to Exclusive</h2>
        <p className="text-gray-600 mb-6">Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">{errors.password}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-bold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="px-4 py-2 bg-blue-500 text-white rounded mb-2"
        >
          Login with Google
        </button>
        <div className="flex justify-between mt-4">
          <Link to="/forgot-password" className="text-gray-600 font-semibold">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-black font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};**/

// export default LoginForm;

import { AUTH_URL } from "../config";
import { toast } from "react-toastify";

const LoginPage = () => {
  const handleGoogleAuth = async () => {
    try {
      window.location.href = `${AUTH_URL}/auth/google/callback`;
    } catch (error) {
      toast.error("Google Authentication failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-1/2">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
