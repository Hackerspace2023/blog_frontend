import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const submitClick = () => {
    if (!email || !password) {
      toast.error("All fields are required!"); //toast-notification message
    } else {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div>
      <Header />
      <section className="pl-[10rem] flex justify-center flex-wrap mb-[4rem]">
        <div className="mr-[4rem] border px-4 py-6 border-gray-500 rounded-lg  mt-[5rem]">
          <h1 className="text-2xl font-semibold ml-[1rem] mb-4">Log In</h1>

          <form className="container ml-[1rem] w-[25rem] ">
            <div className=".my-[2rem]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-gray-500 w-[23.5rem]  rounded "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="my-[2rem]">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                className="mt-1 p-2 border border-gray-500 w-[23.5rem] rounded "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              onClick={submitClick}
              type="button"
              className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 ml-[1rem]">
            <p className="text-black">
              New to My Blog?{" "}
              <Link to="/" className="text-blue-700 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
