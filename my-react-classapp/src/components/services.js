import React, { useState, useEffect } from "react";
import { data } from "autoprefixer";
import axios from "axios";
import { cars1, cars2, cars3, cars4, cars5 } from "../images/";

function ServicesFunc() {
  const productData = [
    {
      title: "BMW",
      description: "The best car in the world",
      photo: cars1,
    },
    {
      title: "CAR",
      description: "cars from all over the world",
      photo: cars2,
    },
  ];

  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitData = [
      {
        title: name,
        description: description,
      },
    ];
    console.log(submitData);
  };

  const [username, setUserName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);

  const handleSubmitUser = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/user-register/", {
        name: username,
        email: email,
        phone: phone,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    const userData = JSON.parse(localStorage.getItem("myusers")) || [];
    let user = {
      uName: username,
      uEmail: phone,
      uPhone: email,
    };
    userData.push(user);
    localStorage.setItem("myusers", JSON.stringify(userData));
    setUserName("");
    setEmail("");
    setPhone("");
  };
  // const { userData, setUserData } = useState([]);
  // useEffect(() => {
  //   const response = axios
  //     .get("http://127.0.0.1:8000/loan/")
  //     .then(function (response) {
  //       setUserData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <div className=" bflex-wrap p-12">
        <div className="w-full">
          <div className="w-1/2">
            <h1 className="text-gray-900 text-2xl">Add Product</h1> <br />
            <form onSubmit={handleSubmit}>
              <label>Product Name</label> <br />
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-60 border-2 border-gray-900"
              />{" "}
              <br />
              <label>Product Description</label> <br />
              <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="w-60 border-2 border-gray-900"
              />{" "}
              <br />
              <br />
              <input
                type="submit"
                className="bg-green-600 hover:bg-green-700 rounded px-6 py-2 text-white"
                value="save data"
              />
            </form>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-gray-900 text-2xl">Product</h1>
          <div className="flex flex-wrap">
            {productData.map((data, index) => (
              <div key={index} className="w-1/4 min-w-32">
                <div className="m-2 p-4 grid bg-gray-200 rounded-xl">
                  <img src={data.photo} className="w-full rounded-xl" />
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="w-full">
          <h1 className="text-gray-900 text-2xl">Product</h1>
          <div className="flex flex-wrap">
            {userData.map((data, index) => (
              <div key={index} className="w-1/4 min-w-32">
                <div className="m-2 p-4 grid bg-gray-200 rounded-xl">
                  <img src={data.photo} className="w-full rounded-xl" />
                  <h1 className="text-2xl font-bold">{data.name}</h1>
                  <p>{data.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="w-full">
          {username} {phone} {email}
          <div className="w-1/3 pt-6">
            <h1>User registration</h1>

            <form onSubmit={(event) => handleSubmitUser(event)}>
              <label>Name</label>
              <input
                type="text"
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                className="w-full p-2 border-2 border-green-800"
              />
              <label>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="w-full p-2 border-2 border-green-800"
              />
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full p-2 border-2 border-green-800"
              />
              <br />
              <br />
              <button
                className="bg-green-600 hover:bg-green-700 rounded px-6 py-2 text-white"
                onClick={() => handleSubmitUser}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServicesFunc;
