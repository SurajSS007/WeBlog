import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './addpost.css';
import authaxios from "../../Axios/authaxios";
function AddPost() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        data.image = image
        console.log(data);
        authaxios.post('/blog', data)
            .then(res => {
                console.log(res);
                // window.location.replace('/')
            })
    };
    const [image, setImage] = useState('');

    function handleFileInputChange(e) {
        const file = e.target.files[0];
        UploadFile(file);
    }

    const UploadFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            setImage(reader.result)
        };
    };

    return (
 
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3> Add Blog </h3>
     
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Username" name="title" ref={register({ required: true })} />
                    {errors.U_username && 'Username is required.'}

                </div>
                <div className="form-group">
                    <label>Upload Image</label>
                    <input type="file" className="form-control" name="image" onChange={handleFileInputChange} ref={register({ required: false })} />
                    {errors.U_avatar && 'avatar is required.'}
                 </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" placeholder="Enter description" name="description" ref={register({ required: true })} />
                    {errors.U_qualification && 'Qualification is required.'}
                </div>

                <div className="form-group">
                    <label>Text</label>
                    <input type="text" className="form-control" placeholder="Enter Text" name="text" ref={register({ required: true })} />
                    {errors.U_address && 'Address is required.'}
                </div>
          
                <Button type="submit" className="btn btn-primary btn-block" variant='primary'>Add MyBlog</Button>
                <p className="forgot-password text-right">
                    Already registered <a href="Login">sign in?</a>
                </p>
            </div>
        </div>
    </form>
            
   
    )
}

export default AddPost
