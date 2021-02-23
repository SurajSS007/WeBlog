import React, { useState, useEffect } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './dashboard.css';
import axios from "../../axios";

function Dashboard() {
  const [getBlog, setGetBlog] = useState([]);
  useEffect(() => {
    fetchItem()
      .then(res => {
        setGetBlog(res.data)
      });
  })
  const fetchItem = async () => {
    const blog = await axios.get(`/blog`)
    return blog
  };


  return (
    <div className="containMain">
      { getBlog && getBlog.map(item => {
        return <div className="contain">
          <Card  className="card" style={{ width: '18rem' }}>
              <Card.Img variant="top"  src={item.image} alt="No Img Found" style={{ height: 200 }} />
              <Card.Body>
              <Card.Title  style={{"textDecoration":'underline'}}>{item.title}</Card.Title>
                <Card.Subtitle  >{item.description}</Card.Subtitle>
                <br></br>
                <Button href={`/${item._id}`} variant="primary">Check BLOG</Button>
              </Card.Body>
            </Card>
        </div >
      })}
    </div>
  )
}

export default Dashboard