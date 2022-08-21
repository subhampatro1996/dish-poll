import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
const Login = (props) => {
  const {toggle} = props
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const [userNameError, setuserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [error,setError] = useState('')

  const [successmsg, setSuccessmsg] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "amar",
      password: "amar123",
    },
    {
      id: 2,
      username: "akbar",
      password: "akbar123",
    },
    {
      id: 3,
      username: "antony",
      password: "antony123",
    },
    {
      id: 4,
      username: "john",
      password: "john123",
    },
    {
      id: 5,
      username: "paul",
      password: "paul123",
    },
  ]);
  const history = useHistory()

  const handleinputChange = (e) => {
    if (e.target.name === "userName") {
      const res = e.target.value;
      setSuccessmsg("");
      setuserNameError("");
      setuserName(res);
    } else if (e.target.name === "password") {
      const res = e.target.value;
      setSuccessmsg("");
      setPasswordError("");
      setPassword(res);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== "") {
      setuserNameError("");
        const validUser = users.find((user)=>{
            return user.username === userName && user.password === password
        })
        if(validUser){
            setSuccessmsg('Login SuccessFull')
            setuserName('')
            setPassword('')
            setError('')
            history.push('/')
            toggle()
            const user = {
                name : validUser.username,
                id : validUser.id
            }
            localStorage.setItem("user",JSON.stringify(user))
        }else{
            setError('user does not exist')
            setSuccessmsg('')
        }
    } else {
      setuserNameError("Username Required");
    }

    if (password !== "") {
    } else {
      setPasswordError("Password Required");
    }
  };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="card shadow"
        style={{
          marginTop: "110px",
          minHeight: "400px",
          width: "90%",
        }}
      >
        <div className="w-50" style={{ margin: "0 auto" }}>
          <div className="mb-6 mt-5">
            <label
              htmlFor="exampleInputuserName1"
              className="form-label"
              style={{
                display: "flex",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              userName address
            </label>
            <input
              type="text"
              className="form-control p-2"
              id="exampleInputuserName1"
              aria-describedby="userNameHelp"
              name="userName"
              onChange={handleinputChange}
              value={userName}
            />

            {userNameError && (
              <span
                className="error-msg"
                style={{ color: "red"}}
              >
                {userNameError}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{
                display: "flex",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control p-2"
              id="exampleInputPassword1"
              name="password"
              onChange={handleinputChange}
              value={password}
            />
            {passwordError && (
              <span
                className="error-msg"
                style={{ color: "red"}}
              >
                {passwordError}
              </span>
            )}

            {error && <span style={{color:"red"}}>{error}</span>}
            {successmsg && <span style={{color:"green"}}>{successmsg}</span>}

          </div>

          <button type="submit" className="btn btn-primary m-3 w-75">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
