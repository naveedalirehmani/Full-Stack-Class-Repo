import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

function SignUpPage(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    fullname: "",
    picture: "",
  });

  const base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onChangeListner = (e) => {
    let updatedUserData = userData;

    if (e.target.id) {
      const profile = e.target.files[0];
      base64(profile)
        .then((data) => {
          updatedUserData = { ...updatedUserData, [e.target.name]: data };
          setUserData(updatedUserData);
        })
        .catch((error) => {
          console.log("here", error);
        });
      return;
    }

    updatedUserData = { ...updatedUserData, [e.target.name]: e.target.value };
    setUserData(updatedUserData);
  };

  const createAccount = () => {
    if (!userData.password || !userData.confirm_password) {
      Toastify({
        text: "password fields are empty",
        duration: 3000,
        close: true,
        style: {
          background: "linear-gradient(to right, #db0000, #ff9100)",
        },
      }).showToast();
      return;
    }

    if (userData.password !== userData.confirm_password) {
      console.log(
        "inCreateAccount",
        userData.password,
        userData.confirm_password
      );
      Toastify({
        text: "Passwords do not match!",
        duration: 3000,
        close: true,
        style: {
          background: "linear-gradient(to right, #db0000, #ff9100)",
        },
      }).showToast();
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("users"));

    if (!allUsers) {
      localStorage.setItem("users", JSON.stringify([userData]));
    } else {
      allUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(allUsers));
    }
  };

  console.log(userData);

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              onChange={(e) => onChangeListner(e)}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => onChangeListner(e)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => onChangeListner(e)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              onChange={(e) => onChangeListner(e)}
              placeholder="Confirm Password"
            />
            <div className="flex justify-center">
              <div className="mb-3 w-96">
                <label
                  for="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Default file input example
                </label>
                <input
                  className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                  name="picture"
                  onChange={(e) => onChangeListner(e)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={createAccount}
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
