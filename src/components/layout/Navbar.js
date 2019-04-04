import React, { Component } from "react";

export default class Navbar extends Component {
  state = {
    redirect: false,
    search: ""
  };

  onSearchTrue = e => {
    e.preventDefault();
    this.forceUpdate();
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("search");

    //Cuando se toca la opción buscar...
    if (searchForm.classList.contains("visible")) {
      //Si el mostrador es visible, entonces lo escondo.
      searchForm.classList.remove("visible");
    } else {
      //Si el mostrador está oculto, lo  muestro y luego le hago focus.
      searchForm.classList.add("visible");
      searchInput.focus();
    }
  };
  onSearchFalse = () => {
    const searchForm = document.getElementById("search");
    searchForm.classList.remove("visible");
  };
  render() {
    return (
      <React.Fragment>
        <div class="page-wrapper">
          <div class="nav-wrapper">
            <nav class="navbar">
              <img
                src="https://www.axonplataforma.com.ar/images/axon_logo_blanco.png?v=1"
                alt="Axon"
              />
              <div class="menu-toggle" id="mobile-menu">
                <span class="bar" />
                <span class="bar" />
                <span class="bar" />
              </div>
              <ul class="nav no-search">
                <i class="fas fa-search" id="search-icon" />
                <input
                  class="search-input"
                  type="text"
                  placeholder="Search.."
                />

                <li class="nav-item">
                  <a href="#">Mi Perfil</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <style jsx="true">{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Lato", "Arial", sans-serif;
          }

          /* HEADINGS */

          h1,
          p {
            color: #fff;
            text-align: center;
            line-height: 1.4;
          }

          h1 {
            font-size: 2.2rem;
          }

          h2 {
            color: #000;
            font-size: 1.3rem;
            text-align: center;
            line-height: 1.4;
            margin-bottom: 10px;
          }

          /* BASIC SETUP */

          .page-wrapper {
            width: 100%;
            height: auto;
          }

          .nav-wrapper {
            width: 100%;
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;
            background-color: #fff;
          }

          /* NAVIGATION */

          .navbar {
            display: grid;
            grid-template-columns: 1fr 3fr;
            align-items: center;
            height: 50px;
            overflow: hidden;
            background-color: #101010;
          }

          .navbar img {
            height: 3rem;
            width: auto;
            justify-self: start;
            margin-left: 20px;
          }

          .navbar ul {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            justify-self: end;
          }

          .nav-item a {
            color: #fff;
            font-size: 0.9rem;
            font-weight: 400;
            text-decoration: none;
            transition: color 0.3s ease-out;
          }

          .nav-item a:hover {
            color: #3498db;
          }

          /* SECTIONS */

          .headline {
            width: 100%;
            height: 50vh;
            min-height: 350px;
            background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
              url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/jPLiQ-9/mountains-background-for-titles-intro-projects-and-etc_ew22rur3l__F0000.png");
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .features {
            width: 100%;
            height: auto;
            background-color: #f1f1f1;
            display: flex;
            padding: 50px 20px;
            justify-content: space-around;
          }

          .feature-container {
            flex-basis: 30%;
            margin-top: 10px;
          }

          .feature-container p {
            color: #000;
            text-align: center;
            line-height: 1.4;
            margin-bottom: 15px;
          }

          .feature-container img {
            width: 100%;
            margin-bottom: 15px;
          }

          /* SEARCH FUNCTION */

          #search-icon {
            font-size: 0.9rem;
            margin-top: 3px;
            margin-left: 15px;
            transition: color 0.3s ease-out;
            color: #fff;
          }

          #search-icon:hover {
            color: #3498db;
            cursor: pointer;
          }

          .search {
            transform: translate(-35%);
            -webkit-transform: translate(-35%);
            transition: transform 0.7s ease-in-out;
            color: #3498db;
          }

          .no-search {
            transform: translate(0);
            transition: transform 0.7s ease-in-out;
          }

          .search-input {
            position: absolute;
            top: -4px;
            right: -125px;
            opacity: 0;
            z-index: -1;
            transition: opacity 0.6s ease;
          }

          .search-active {
            opacity: 1;
            z-index: 0;
          }

          input {
            border: 0;
            border-left: 1px solid #ccc;
            border-radius: 0; /* FOR SAFARI */
            outline: 0;
            padding: 5px;
          }

          /* MOBILE MENU & ANIMATION */

          .menu-toggle .bar {
            width: 25px;
            height: 3px;
            background-color: #3f3f3f;
            margin: 5px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }

          .menu-toggle {
            justify-self: end;
            margin-right: 25px;
            display: none;
          }

          .menu-toggle:hover {
            cursor: pointer;
          }

          #mobile-menu.is-active .bar:nth-child(2) {
            opacity: 0;
          }

          #mobile-menu.is-active .bar:nth-child(1) {
            -webkit-transform: translateY(8px) rotate(45deg);
            -ms-transform: translateY(8px) rotate(45deg);
            -o-transform: translateY(8px) rotate(45deg);
            transform: translateY(8px) rotate(45deg);
          }

          #mobile-menu.is-active .bar:nth-child(3) {
            -webkit-transform: translateY(-8px) rotate(-45deg);
            -ms-transform: translateY(-8px) rotate(-45deg);
            -o-transform: translateY(-8px) rotate(-45deg);
            transform: translateY(-8px) rotate(-45deg);
          }

          /* KEYFRAME ANIMATIONS */

          @-webkit-keyframes gradbar {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @-moz-keyframes gradbar {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes gradbar {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Media Queries */

          /* Mobile Devices - Phones/Tablets */

          @media only screen and (max-width: 720px) {
            .features {
              flex-direction: column;
              padding: 50px;
            }

            /* MOBILE HEADINGS */

            h1 {
              font-size: 1.9rem;
            }

            h2 {
              font-size: 1rem;
            }

            p {
              font-size: 0.8rem;
            }

            /* MOBILE NAVIGATION */

            .navbar ul {
              display: flex;
              flex-direction: column;
              position: absolute;
              justify-content: start;
              top: 55px;
              background-color: #fff;
              width: 100%;
              height: 100vh;
              transform: translate(-101%);
              text-align: center;
              overflow: hidden;
            }

            .navbar li {
              padding: 15px;
            }

            .navbar li:first-child {
              margin-top: 50px;
            }

            .navbar li a {
              font-size: 1rem;
            }

            .menu-toggle,
            .bar {
              display: block;
              cursor: pointer;
            }

            .mobile-nav {
              transform: translate(0%) !important;
            }

            /* SECTIONS */

            .headline {
              height: 20vh;
            }

            .feature-container p {
              margin-bottom: 25px;
            }

            .feature-container {
              margin-top: 20px;
            }

            .feature-container:nth-child(2) {
              order: -1;
            }

            /* SEARCH DISABLED ON MOBILE */

            #search-icon {
              display: none;
            }

            .search-input {
              display: none;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}
