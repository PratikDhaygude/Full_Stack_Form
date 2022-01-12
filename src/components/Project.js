import React, { useState } from "react";
// import { useNavigate } from 'react-router';
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../components/Project.css";

//!
//!"react-scripts": "^5.0.0"
//!"eslint": "^8.6.0",
// import {useNavigate} from 'react-router-dom';

const Project = () => {
  const history = useHistory();

  const [data, setData] = useState({
    title: "",
    objectives: "",
    scope: "",
    plan: "",
    deliverables: "",
    incentives: "",
    conditions: "",
    posts: [],
  });

  // const navigate = useNavigate();

  // const componentDidMount = () => {
  //   this.getBlogPost();
  // };

  // const getBlogPost = () => {
  //   axios.get("/project")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log("Data: ", data);
  //       setData({ posts: data });
  //       // this.setState({ posts: data });
  //       console.log("Data has been received!!");
  //     })
  //     .catch(() => {
  //       alert("Error retrieving data!!!");
  //     });
  // };

  // const displayBlogPost = (posts) => {
  //   if (!posts.length) return null;

  //   return posts.map((post, index) => (
  //     <div key={index}>
  //       <h3>{post.title}</h3>
  //       <h3>{post.body}</h3>
  //       <h3>{post.scope}</h3>
  //       <h3>{post.plan}</h3>
  //       <h3>{post.deliverables}</h3>
  //       <h3>{post.incentives}</h3>
  //       <h3>{post.conditions}</h3>
  //     </div>
  //   ));
  // };

  let name, value;

  function handleInputs(e) {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {
      title,
      objectives,
      scope,
      plan,
      deliverables,
      incentives,
      conditions,
    } = data;

    axios({
      url: "/administrator",
      method: "POST",
      data: data,
    })
      .then(() => {
        console.log("Data has been sent to the server");
      })
      .catch(() => {
        console.log("Internal server error");
      });

    history.push("/administrator");
    // navigate('/administrator');
  };

  return (
    <div className="create">
      <h2>Enter Project Details</h2>

      <form method="POST">
        <label>Project Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />
        <label>Project Goal and Objectives:</label>
        <textarea
          required
          name="objectives"
          id="objectives"
          value={data.objectives}
          onChange={(e) => handleInputs(e)}
          className="inputField"
        />

        <label>Project Scope:</label>
        <input
          type="text"
          name="scope"
          id="scope"
          value={data.scope}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project Plan</label>
        <textarea
          name="plan"
          id="plan"
          value={data.plan}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project Deliverables: </label>
        <textarea
          name="deliverables"
          id="deliverables"
          value={data.deliverables}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project incentives: </label>
        <textarea
          name="incentives"
          id="incentives"
          value={data.incentives}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <label>Project Terms and Conditions: </label>
        <textarea
          name="conditions"
          id="conditions"
          value={data.conditions}
          onChange={(e) => handleInputs(e)}
          className="inputField"
          required
        />

        <br />
        {/* <button 
          type="submit" 
          value="submit" 
          className="button-style"
        //   onClick={Post}
        >Submit
        </button> */}
        <input
          type="submit"
          name="submit"
          id="submitBtn"
          value="SUBMIT"
          onClick={PostData}
        ></input>

        {/* <div>{displayBlogPost(data.posts)}</div> */}
        {/* <div>{displayBlogPost(data.posts)}</div> */}
      </form>
    </div>
  );
};

export default Project;
