import React from "react";
//import { useParams } from "react-router-dom";
//import { useQuery, useQueryClient } from "react-query";
//import { fetchTx } from "../services/tiket";
import "../styles/ticket.scss";

import { PDFDownloadLink } from "@react-pdf/renderer";

import PdfTicket from "./PdfTicket";
const Ticket = (props) => {
  //const { store, id } = useParams();

  //const { data: transaction } = useQuery("tx", async () => {
  //  const data = await fetchTx(store, id);
  //  return data;
  //});

  return (
    <>
      {/*<a href="./pdf" target="_blank"><button>Ir a pdf</button></a> */}
      {/*<div className="container-ticket">
        <div className="container-title-ticket">
          <img className="logo-ticket" alt="logo" src={logo} />
          <h1>¡Gracias por comprar en DonApp!</h1>
        <hr/> 
        <br/> 
        </div>
        <h3 className="ticket-data">Número de ticket: {id}</h3>
        <h3 className="ticket-data">Número de tienda:{store}</h3>
        <hr/> 
        <br/> 
        {transaction && (
          <>
            <div className="data-div"> <h5>Ticket: {transaction.request.upc}</h5></div>
            <div className="data-div"> <h5>Autorización: {transaction.auth}</h5></div>
            <div className="data-div"> <h5>Teléfono: {transaction.input}</h5></div>
          </>
        )}
      </div>*/}
      <div>
        <PDFDownloadLink document={<PdfTicket />} fileName="Ticket_de_compra">
          {({ loading }) =>
            loading ? (
              <button>"espere a que cargue el documento..."</button>
            ) : (
              <button>"Descargue"</button>
            )
          }
        </PDFDownloadLink>
        {/*<PdfTicket />*/}
      </div>
    </>
  );
};

export default Ticket;
