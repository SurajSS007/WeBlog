import React, { useState, useEffect } from 'react'
import authaxios from "../../Axios/authaxios";
import { Card,Button } from "react-bootstrap";
import './GetPost.css';

function GetPosts() {
    useEffect(() => {
        fetchItem()
            .then(res => {
                setPosts(res.data)
                console.log(res.data);
            });
    },[])
    const [post, setPosts] = useState([]);
    const fetchItem = async () => {
        const course = await authaxios.get(`/user/getPosts`)
        return course
    };

    return (
      <div className="containMain">
      { post.blogs && post.blogs.map(item => {
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

export default GetPosts
