import React, { Component } from 'react';
import './Ent.css';
import Header from './Header';
import Footer from './Footer';
import err from "./files/404.png"

class Error extends Component{
    render() {
        return (
          <div>
            <Header />
            <div class = "conterror">
                <div class = "error">
                    <img src = {err}></img>
                    <p>Щось пішло не так</p>
                </div>
            </div>
            <Footer />
          </div>
        );
      }
}

export default Error;
