import React, { useState, useEffect } from 'react'
import axios from "../../axios";
import { Card,Button } from "react-bootstrap";

function GetPosts() {
    useEffect(() => {
        fetchItem()
            .then(res => {
                setPosts(res.data)
            });
    },[])
    const [Post, setPosts] = useState([]);
    const fetchItem = async () => {
        const course = await axios.get(`/user/getPosts`)
        console.log(course);
        return course
    };

    return (
        <div>
        {Post.map(item =>{
            return  <Card style={{ width: '18rem' }}>
            <Card.Img variant="right" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>  
        })}
        </div>
    )
}

export default GetPosts
