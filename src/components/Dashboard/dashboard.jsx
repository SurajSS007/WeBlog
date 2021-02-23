import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './dashboard.css';
// import axios from "../../Axios/axios";
import authaxios from "../../Axios/authaxios";
import UserContext from "../context/UserContext";

function Dashboard() {
  const msg = useContext(UserContext);
  const [getBlog, setGetBlog] = useState([]);
  useEffect(() => {
    fetchItem()
      .then(res => {
        setGetBlog(res.data)
      });
  })
  const fetchItem = async () => {
    const blog = await authaxios.get(`/blog`)
    return blog
  };


  return (
    <div className="containMain">
      <h1>{msg}</h1>
      { getBlog && getBlog.map(item => {
        return <div className="contain">
          <Card  className="card" style={{ width: '18rem' }}>
              <Card.Img variant="top"  src={item.image} alt="No Img Found" style={{ height: 200 }} />
              <Card.Body>
              <Card.Title  style={{"textDecoration":'underline'}}>{item.title}</Card.Title>
                <Card.Subtitle  >{item.description}</Card.Subtitle>
                <br></br>
                <Button href={`/BlogById/${item._id}`} variant="primary">Check BLOG</Button>
              </Card.Body>
            </Card>
        </div >
      })}
    </div>
  )
}

export default Dashboard
