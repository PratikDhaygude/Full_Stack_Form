import React from "react";
import { useState, useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
// import "./Administration.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { useHistory } from "react-router-dom";
import axios from "axios";

const Administrator = () => {
  // const navigate = useNavigate();
  // const history = useHistory();

  // const [userData, setUserData] = useState({});

  const [user, setUser] = useState({
    title: "",
    objectives: "",
    scope: "",
    plan: "",
    deliverables: "",
    incentives: "",
    conditions: "",
    posts: [],
  });

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("/project")
      .then((res) => setNotes(res.data))
      .catch((error) => console.log(error));
  });

  // const componentDidMount = () => {
  //   getBlogPost();
  // };

  // const getBlogPost = () => {
  //   axios
  //     .get("/project")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log("Data: ", data);
  //       setUser({ posts: data });
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

  // const callAdministrator = async () =>{
  //   try {
  //     const res = await fetch('/administrator', {
  //       method: "GET",
  //       headers:{
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       credentials: "include"
  //     });

  //     const data = await res.json();
  //     console.log(data)

  //     if(!res.status === 200){
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     // navigate('/project');
  //     // history.push('/project')
  //   }
  // }

  // useEffect(() => {
  //   callAdministrator();
  // }, [])

  return (
    <div className="accor">
    {notes.map((note, key) => (
      <Accordion multiple>
        <AccordionTab
          header="Project:"
          // {userData.title}
          headerClassName="color"
        >
          <div className="Content">
            <Row>
              <Col>
                <b>Project Title:</b><>{note.title}</>
                <br></br>
                <br></br>
                <b>Project Goal and Objectives:</b><>{note.objectives}</>
                <br></br>
                <br></br>
                <b>Project Scope:</b><>{note.scope}</>
                <br></br>
                <br></br>
                <b>Project Plan:</b><>{note.plan}</>
                <br></br>
                <br></br>
              </Col>
              <Col>
                <b>Project Deliverables:</b><>{note.deliverables}</>
                <br></br>
                <br></br>
                <b>Project Incentives:</b><>{note.incentives}</>
                <br></br>
                <br></br>
                <b>Project Terms and Conditions:</b><>{note.conditions}</>
              </Col>
            </Row>
          </div>
          <div className="Button">
            <Button
              label="Approve"
              icon="pi pi-check"
              iconPos="right"
              className="p-button-success p-button-raised p-button-rounded"
            />
            <Button
              label="Reject"
              icon="pi pi-times"
              iconPos="right"
              className="p-button-danger p-button-raised p-button-rounded"
            />
          </div>
        </AccordionTab>
      </Accordion>        
      ))}
    </div>
  );
};

export default Administrator;
