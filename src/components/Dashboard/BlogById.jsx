import React, { useState, useEffect } from "react";
import { Card, Button, Col, Row, Container, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './dashboard.css';
import axios from "../../axios";

function BlogById({ match }) {
    const [getBlogById, setGetBlogById] = useState([]);
    useEffect(() => {
        fetchItem()
            .then(res => {
                setGetBlogById(res.data)
            });
    }, [])
    const fetchItem = async () => {
        const blog = await axios.get(`/blog/${match.params.id}`)
        return blog
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col> <Image src={getBlogById.image} alt='no img found' rounded style={{ "borderWidth": "2px", 'borderColor': "#5D6D7E", 'borderStyle': 'solid' }} /></Col>
                    <Col style={{ "borderWidth": "2px", 'borderColor': "#5D6D7E", 'borderStyle': 'solid' }}>
                        <Row>{getBlogById.title}</Row>
                        <Row>{getBlogById.description}</Row>
                    </Col>
                </Row>
                <Row style={{ "borderWidth": "2px", 'borderColor': "#5D6D7E", 'borderStyle': 'solid','textAlign':'center' }}>
                    {getBlogById.text}
                </Row>
            </Container>
        </div>
    )
}

export default BlogById
