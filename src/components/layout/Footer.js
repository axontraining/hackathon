import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="container" style={{ display: "flex" }}>
          <div class="col-md-4">
            <center>
              <img
                style={{ width: "201px", height: "auto", marginTop: "25px" }}
                src="https://axonplataforma.com.ar/images/axon_logo_blanco.png?v=1"
                alt="logo"
              />
            </center>
            <center>
              {" "}
              <h4 style={{ color: "#A4A4A4" }}>
                Instituto número uno en formación de Coaching de habla hispana
              </h4>
            </center>
          </div>

          <div class="col-md-3 contenedor-contacto">
            <div>
              <p class="subtitulo">
                <i>Contacto</i>
              </p>
            </div>
            <div class="item">
              <i class="fas fa-map-marker-alt" /> Viamonte 1167 - Bs As,
              Argentina{" "}
            </div>
            <div style={{ color: "#A4A4A4" }}>
              <i class="fa fa-phone item" aria-hidden="true" /> Argentina:
              0810-345-0062
              <br />
              <b>
                <i class="fa fa-whatsapp" aria-hidden="true" />
              </b>{" "}
              WhatsApp: +54 9 1152591337
              <br />
            </div>
          </div>

          <div class="col-md-3 contenedor-contacto">
            <div>
              <p class="subtitulo">
                <i>Links</i>
              </p>
            </div>
            <div class="item">
              {" "}
              <a
                class="vinculo"
                target="_blank"
                style={{ textDecoration: "none" }}
                href="http://www.axontraining.com.ar/site/tyc.php"
              >
                Términos y condiciones de uso
              </a>
            </div>
            <div class="item">
              {" "}
              <a
                class="vinculo"
                target="_blank"
                style={{ textDecoration: "none" }}
                href="http://www.axontraining.com.ar/site/politicadeprivacidad.php"
              >
                Política de privacidad
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-12 box-final">
          <div class="col-md-6 contenedor-derechos">
            <a
              class="vinculo"
              href="http://www.axontraining.com.ar/"
              style={{ textDecoration: "none" }}
            >
              ® Axon Training 2017
            </a>
            . Derechos reservados. Hecho con <i class="fas fa-heart" /> para el{" "}
            <i class="fa fa-globe" />
          </div>
        </div>
        <style jsx="true">
          {`
            #footer {
              background-color: #363b40;
              width: 100%;
            }
            .box-final {
              background-color: #424242;
              padding-top: 30px;
              padding-left: 100px;
              padding-right: 100px;
            }
            .redes-ul {
              display: flex;
              justify-content: flex-end;
            }
            .redes {
              margin: 0 10px 0 10px;
              font-size: 1.5em;
            }
            .contenedor-derechos {
              padding: 6px 0 32px 0px;
              color: #a4a4a4;
            }
            .link {
              color: grey;
            }
            .contenedor-contacto {
              margin-top: 35px;
              margin-left: 70px;
              margin-bottom: 50px;
            }
            .subtitulo {
              color: #a4a4a4;
              font-size: 1.3em;
            }
            .item {
              margin-bottom: 10px;
              color: #a4a4a4;
            }
            .vinculo {
              color: #a4a4a4;
            }
            .vinculo:hover {
              color: white;
            }
            .link:hover {
              color: white;
            }
            @media only screen and (max-width: 600px) {
              .box-final {
                padding-left: 10%;
                padding-right: 10%;
              }
              .contenedor-redes {
                padding-bottom: 40px;
              }
              .redes-ul {
                display: inline-flex;
                margin-left: 10%;
              }
            }
          `}
        </style>
      </footer>
    );
  }
}
