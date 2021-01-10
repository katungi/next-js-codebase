import { useState } from "react";
import { signup } from "../../Hooks/auth";
import LoginGoogle from "./LoginGoogle";


const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  const signupForm = () => {
    return (
      <>
        <main>
          <section class="absolute w-full h-full">
            <div
              class="absolute top-0 w-full h-full bg-gray-900"
              style="background-image: url(./assets/img/register_bg_2.png); background-size: 100%; background-repeat: no-repeat;"
            ></div>
            <div class="container mx-auto px-4 h-full">
              <div class="flex content-center items-center justify-center h-full">
                <div class="w-full lg:w-4/12 px-4">
                  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                    <div class="rounded-t mb-0 px-6 py-6">
                      <div class="text-center mb-3">
                        <h6 class="text-gray-600 text-sm font-bold">
                          Sign in with
                        </h6>
                      </div>
                      <div class="btn-wrapper text-center">
                        <LoginGoogle />
                      </div>
                      <hr class="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div class="text-gray-500 text-center mb-3 font-bold">
                        <small>Or sign in with credentials</small>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={handleChange("name")}
                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Enter thy name"
                            style="transition: all 0.15s ease 0s;"
                          />
                        </div>
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={handleChange("email")}
                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Email"
                            style="transition: all 0.15s ease 0s;"
                          />
                        </div>
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-gray-700 text-xs font-bold mb-2"
                            for="grid-password"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={handleChange("password")}
                            class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Password"
                            style="transition: all 0.15s ease 0s;"
                          />
                        </div>
                        <div></div>
                        <div class="text-center mt-6">
                          <button
                            class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="button"
                            style="transition: all 0.15s ease 0s;"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="flex flex-wrap mt-6">
                    <div class="w-1/2">
                      <a href="#pablo" class="text-gray-300">
                        <small>Forgot password?</small>
                      </a>
                    </div>
                    <div class="w-1/2 text-right">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        If you already have an account:
                      </label>
                      <Link href="/signin">
                        <a href="#pablo" class="text-gray-300">
                          <small>Register</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
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
