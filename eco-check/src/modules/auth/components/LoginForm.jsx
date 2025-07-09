import React, { useState } from "react";
import { login } from "../services/authService";
import "./css/LoginPage.css";

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await login(email, password);
      const data = res.data;
      console.log("✅ BE response:", data);

      if (data.result?.authenticated) {
        localStorage.setItem("token", data.result.token);
        localStorage.setItem("user", JSON.stringify(data.result.user));
        onLoginSuccess();
      } else {
        setError("Sai thông tin đăng nhập!");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("Đăng nhập thất bại. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              Smarter Emissions Check <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                with ECO-Check
              </span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              ECO-Check is your online solution for vehicle emissions testing.
              Schedule your inspection easily and help protect our environment.
              Join us in making clean air a reality for everyone.
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <h3 className="fw-normal mb-4 text-center">
                  Login to your account
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="email"
                      id="formEmail"
                      className="form-control"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      id="formPassword"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="subscribeCheckbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="subscribeCheckbox"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100 mb-4"
                  >
                    Login
                  </button>

                  <div className="text-center mb-3">
                    <p className="mb-2">or sign up with:</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                         <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <a href="#!" className="text-muted me-3">
                      Forgot password?
                    </a>
                    <a href="#!" className="text-primary">
                      Register
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
