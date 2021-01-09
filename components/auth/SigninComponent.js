import { useState } from "react";
import { signin } from "../../Hooks/auth";
import Toaster from "react-hot-toast";
import { useRouter } from 'next/router'
import { authenticate } from '../../Hooks/auth'


const SigninComponent = () => {
  const router = useRouter()

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          email: "",
          password: "",
          error: "",  
          loading: false,
          message: data.message,
          showForm: false,
        });
        authenticate(data);
        router.push('/experiences')
        
      }
    });
  };
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const showLoading = () => (loading ? <div>Loading</div> : "");
  const showError = () =>
    error
      ? toast.error(
          { error },
          {
            style: {
              borderRadius: "10px",
            },
          }
        )
      : "";
  const showMessage = () =>
    message
      ? toast(
          { message },
          {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }
        )
      : "";

  const signupForm = () => {
    return (
      <>
        <main>
          <div>
            <Toaster />
          </div>
          <section className="absolute w-full h-full">
            <div className="absolute top-0 w-full h-full"></div>
            <div className="container mx-auto px-4 h-full">
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-gray-600 text-sm font-bold">
                          Sign in with
                        </h6>
                      </div>
                      <div className="btn-wrapper text-center">
                        <button
                          className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                          type="button"
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src="/images/google.svg"
                          />
                          Google
                        </button>
                      </div>
                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-500 text-center mb-3 font-bold">
                        <small>Or sign in with credentials</small>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                          >
                            Name
                          </label>
                          <input
                            onChange={handleChange("name")}
                            value={name}
                            type="text"
                            className="animate-custom px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Name"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                          >
                            Email
                          </label>
                          <input
                            onChange={handleChange("email")}
                            value={email}
                            type="email"
                            className="animate-custom px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Email"
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                          >
                            Password
                          </label>
                          <input
                            onChange={handleChange("password")}
                            value={password}
                            type="password"
                            className="animate-custom px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Password"
                          />
                        </div>
                        <div>
                          <label className="animate-custom inline-flex items-center cursor-pointer">
                            <input
                              id="customCheckLogin"
                              type="checkbox"
                              className="animate-custom form-checkbox text-gray-800 ml-1 w-5 h-5"
                            />
                          </label>
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                      <a href="#pablo" className="text-gray-300">
                        <small>Forgot password?</small>
                      </a>
                    </div>
                    <div className="w-1/2 text-right">
                      <a href="#pablo" className="text-gray-300">
                        <small>Create new account</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <style jsx>{`
            .main{
            background-image: url('/public/images/banner.jpg'); 
            background-size: 100%; 
            background-repeat: no-repeat;"
            }

            .animate-custom{
                transition: all 0.15s ease 0s;
            }
            `}</style>
      </>
    );
  };
  return (
    <>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
    </>
  );
};

export default SigninComponent;
