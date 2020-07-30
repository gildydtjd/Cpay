import React, { Component } from 'react'
import "./loginBody.css";
import $ from 'jquery';

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
      <div className="Login_body">
      <div className="login-form">
        <h1>LOGIN</h1>
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

          <div>
            <button type="submit">LOGIN</button>
          </div>
        </form>

        <div className="catpion">
          <a href="" alt="">Forget Password?</a>
        </div>
        
      </div>
      </div>
    )
  }
}
