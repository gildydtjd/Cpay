import React, { Component } from 'react'
import "./loginBody.css";
import $ from 'jquery';
import Header from '../header/Header';

export default class LoginBody extends Component {
  render() {
    let id = $('#id');
    let pw = $('#pw');
    let btn = $('#btn');

    $(btn).on('click', function() {
      if($(id).val() ===""){
        $(id).next('label').addClass('warning');
        setTimeout(function() {
          $('label').removeClass('warning');
        }, 1500);
      }
      else if($(pw).val() ===""){
        $(pw).next('label').addClass('warning');
        setTimeout(function() {
          $('label').removeClass('warning');
        }, 1500);
      }
    });

    return (
      <div style={{width:'80%', marginLeft :'10%'}}>
        <Header />
      <div className="Login_body">
      <div className="login-form">
        <h1>로그인</h1>
        <form action="">
          <div className="int-area">
            <input type="text" name="id" id="id"
            autoComplete="off" required/>
              <label for="id">USER NAME</label>
          </div>

          <div className="int-area">
            <input type="password" name="pw" id="pw"
            autoComplete="off" required/>
              <label for="pw">PASSWORDE</label>
          </div>

          <div style={{marginTop:'20px'}}>
            <button type="submit" style={{backgroundColor:'white', border:'none', fontSize:'20px'}}>LOGIN</button>
          </div>
        </form>

        <div className="catpion" style={{marginTop:'10px'}}>
          <a href="/" alt="">Forget Password?</a>
        </div>
        
      </div>
      </div>
      </div>
    )
  }
}
