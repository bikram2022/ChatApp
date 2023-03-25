import React from 'react'
import { useState } from 'react';
import bot_img from '../assests/bot-img.jpg'
import add_img_icon from '../assests/add-image-icon.png'
import './signup.css'
import signup_page_image from "../assests/signup-page-image.jpg"

function Signup() {

  const [_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //image upload states
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  async function uploadImage(image) {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'dv4useqb');

    try {
      setUploadingImg(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/dwmulsq3j/image/upload', {//https://api.cloudinary.com/dwmulsq3j/image/upload
        method: "post",
        body: data,
      });
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;

    }
    catch (error) {
      setUploadingImg(false);
      console.log(error);

    }
  }

  async function handleSignUp(e) {
    e.preventDefault();

    if (!image) return alert("Please upload profile picture");
    const url = await uploadImage(image);
    console.log(url);
  }



  function validateImage(e) {
    const file = e.target.files[0];

    if (file.size >= 1048576) {
      return alert("Max file size is 1MB");
    }
    else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));

      // console.log(file)
      // console.log(URL.createObjectURL(file))
    }
  }


  return (
    <div className='wrapper'>
      <img className="signup-image" src={signup_page_image} alt="signup_page_image"/>
      <form onSubmit={handleSignUp} className='form-wrapper'>
        <h2>Create a new account</h2>
        <br/>
          <div className="form-group">
            <img className="signup-profile-img" src={imagePreview || bot_img} alt="bot_img" />
            <label htmlFor="img-upload">
              <img src={add_img_icon} className='add-img-icon' alt="addImage" />
            </label>
            <input id="img-upload" type="file" hidden accept='img/*' onChange={validateImage} />
          </div>
          <br />
          <div className="form-group">
            {/* <label className='signup-label' htmlFor="signup-name">Name</label><br /> */}
            <input id="signup-name" type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={_name}></input>
          </div>
          <br />
          <div className="form-group">
            {/* <label className='signup-label' htmlFor="signup-email-id">Email address</label><br /> */}
            <input id="signup-email-id" type="email" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} value={email}></input>
          </div>
          <br />
          <div className="form-group">
            {/* <label className='signup-label' htmlFor="signup-pass">Password</label><br /> */}
            <input id="signup-pass" type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
          </div>
          <br />
          <button className='signup-button' type='submit'>{uploadingImg ? "Creating account....." : "Create account"}</button>
      </form>
    </div>
  )
}

export default Signup