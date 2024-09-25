import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import pinkVector from "../../assets/pink-vector.png";
import blueVector from "../../assets/blue-vector.png";
import styles from "./login.module.css";
import Input from "../../components/input";
import Button from "../../components/button";
import { login } from "../../state/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email && password) {
      const postData = {
        username: email,
        password,
      };
      dispatch(login(postData));
    }
  };

  useEffect(() => {
    if (data?.accessToken) {
      localStorage.setItem("token", data.accessToken);
      navigate("/dashboard/users");
    }
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard/users");
    }
    if (data?.message) {
      toast(data.message);
    }
  }, [data, navigate]);

  const isValid = () => {
    const { email, password } = formData;
    if (email && password) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.mainWrapper}>
        <img src={blueVector} alt="blue" className={styles.blue} />
        <div className={styles.leftWrapper}>
          <img src={pinkVector} alt="pink" className={styles.pink} />
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.center}>
            <h4>Login into your account</h4>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Email Id:</label>
                <Input
                  type="text"
                  placeholder="info@provistechnologies.com"
                  name="email"
                  value={formData.email}
                  handleChange={handleChange}
                  icon={Mail}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  handleChange={handleChange}
                  icon={LockKeyhole}
                />
              </div>
              <div className={styles.forget}>
                <Link to="">Forget Password?</Link>
              </div>
              <div>
                <Button
                  type="submit"
                  color="primary"
                  disabled={!isValid() || loading}
                >
                  Login Now
                </Button>
              </div>
            </form>
            <div className={styles.divideWrapper}>
              <div className={styles.divider} />
              <span className={styles.text}>OR</span>
              <div className={styles.divider} />
            </div>
            <Link to="">
              <Button type="button" color="secondary">
                Signup Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
