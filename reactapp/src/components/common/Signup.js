import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginSignup.css";

const Signup = () => {
  const navigate = useNavigate();

 
  const [email, setEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
   
    if (password !== confirmPassword) {
      toast("Password not matched!", {
        type: "error",
        theme: "colored",
      });
      return;
    }
   
   
   

  
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="main">
          <ToastContainer />
          <section className="signup">
            <div className="containerLogin">
              <div className="signup-content">
                <div className="signup-form">
                  <h2 className="form-title">Sign Up</h2>
                  <form
                    method="POST"
                    className="register-form"
                    id="register-form"
                    onSubmit={(e) => handleSignup(e)}
                  >
                    
                    <div className="form-group">
                      <label>
                        <i className="zmdi zmdi-account material-icons-name"></i>
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Your Name"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <i className="zmdi zmdi-email"></i>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <i className="zmdi zmdi-phone-in-talk"></i>
                      </label>
                      <input
                        id="mobileNumber"
                        name="mobileNumber"
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="Your Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <i className="zmdi zmdi-lock"></i>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <i className="zmdi zmdi-lock-outline"></i>
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Repeat your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group form-button">
                      <input
                        type="submit"
                        name="submitButton"
                        id="submitButton"
                        className="form-submit"
                        value="Register"
                      />
                    </div>
                  </form>
                </div>
                <div className="signup-image">
                  <figure>
                    <img src="/signup-image.jpg" alt="sing up" />
                  </figure>
                  <Link
                    to="/login"
                    className="signup-image-link"
                    id="signinLink"
                  >
                    I am already member
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Signup;
