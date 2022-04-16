import React from "react";
import "../styles/bodyPage.scss";
import logo from "../assets/logo.png";
import servicios from "../assets/servicios.png";
import serviciosM from "../assets/serviciosM.png";
import requisitos from "../assets/requisitos.gif";
import suma from "../assets/suma.png";
import resta from "../assets/resta.png";
import pasos from "../assets/pasos.png";
import pasoM from "../assets/pasoM.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BodyPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row presentation">
          <div className="col-md-6 ">
            <img className="img-body" alt="logo" src={logo} />
          </div>
          <div className="col-md-6 title-logo">
            <h1 className="principal-title">
              Agrega más servicios en tu tienda o negocio.
              <br />
              <p>
                La mejor app para recargar tiempo aire y pagar servicios desde
                tu computadora o celular
              </p>
            </h1>
          </div>
        </div>
       
        <div className="col-md-12 div-cel">
          <a name="requisitos">
            <h1 className="title-pasos">
              Gana más con Don App en 6 sencillos pasos
            </h1>
          </a>
          <img className="pasos" alt="pasos" src={pasos} />
          <img className="pasoM" alt="pasos" src={pasoM} />
        </div>
        {/*Requisitos para darse de alta*/}
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="title-pasos">
              ¿Qué necesito para afiliarme a Don App?
            </h1>

            <ol className="list">
              <li>Ser dueño de una tienda de abarrotes</li>
              <li>Tener al menos 1 años operando la tienda</li>
              <li>Tener un teléfono inteligente (smartphone)</li>
              <li>
                Tu información básica Identificación oficial (INE o Pasaporte)
              </li>
              <li>
                Comprobante de domicilio (Predial o escrituras) Recibo de CFE
              </li>
            </ol>
          </div>
          <div className="col-md-6 ">
            <img className="gif" alt="gif" src={requisitos} />
          </div>
          {/*imágenes de los servicios*/}
          <div className="col-md-12 div-cel">
            <a name="servicios">
              <h1 className="title-pasos">
                Estos son algunos de los servicios que puedes pagar desde Don
                App
              </h1>
            </a>
            <img className="servicios" alt="servicios" src={servicios} />
            <img className="serviciosM" alt="servicios" src={serviciosM} />
          </div>
          {/*Preguntas frecuentes*/}
          <a name="preguntas">
              <h1 className="title-pasos">
                Preguntas frecuentes
              </h1>
            </a>
          <section>
            <div className="col-md-12 acordion">
              <div className="container-question">
                <div className="acordion-item" id="question1">
                  <a className="acordion-link" href="#question1">
                    ¿Qué es Don App?
                    <img className="icon-question add" alt="suma" src={suma} />
                    <img
                      className="icon-question remove"
                      alt="resta"
                      src={resta}
                    />
                  </a>
                  <div className="answer">
                    <p>
                      Don App es la aplicación que te permite vender servicios y
                      productos digitales a consignación, desde tu teléfono
                      celular y sin invertir un solo peso.
                    </p>
                  </div>
                </div>
                <div className="acordion-item" id="question2">
                  <a className="acordion-link" href="#question2">
                    ¿Necesito comprar los productos antes de venderlos?
                    <img className="icon-question add" alt="suma" src={suma} />
                    <img
                      className="icon-question remove"
                      alt="resta"
                      src={resta}
                    />
                  </a>
                  <div className="answer">
                    <p>
                      No, tu podrás vender todo lo que tus clientes te pidan y
                      ganar comisiones sin desembolsar nada
                    </p>
                  </div>
                </div>
                <div className="acordion-item" id="question3">
                  <a className="acordion-link" href="#question3">
                    ¿Qué es el Saldo Por Entregar?
                    <img className="icon-question add" alt="suma" src={suma} />
                    <img
                      className="icon-question remove"
                      alt="resta"
                      src={resta}
                    />
                  </a>
                  <div className="answer">
                    <p>
                      El saldo por entregar es el monto en pesos del valor de
                      los productos que has vendido a través deDonApp, menos tus
                      comisiones y es el dinero que deberás entregar al
                      Representante de DonApp.
                    </p>
                  </div>
                </div>
                <div className="acordion-item" id="question4">
                  <a className="acordion-link" href="#question4">
                    ¿Cuándo me visitará el representante para recoger mi saldo
                    por entregar?
                    <img className="icon-question add" alt="suma" src={suma} />
                    <img
                      className="icon-question remove"
                      alt="resta"
                      src={resta}
                    />
                  </a>
                  <div className="answer">
                    <p>
                      Las visitas del Representante serán cada 2 ó 3 días
                      dependiendo de tus ventas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BodyPage;
