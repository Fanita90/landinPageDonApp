import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { PDFDownloadLink, PDFViewer, usePDF } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { fetchTx } from "../services/tiket";
import Footer from "./Footer";
import "../styles/ticket.scss";
import PdfTicket from "./PdfTicket";
import logoIcon from "../assets/logo-icon.png";
import BodyTicket from "./BodyTicket";
const Ticket = () => {
  const { store, tx } = useParams();

  const { data: transaction } = useQuery("tx", async () => {
    console.log({ store, tx });
    const data = await fetchTx(store, tx);
    return data;
  });
  return (
    <>
      <nav
        id="mainNavbar1"
        className="navbar navbar-light navbar-expand-lg bg-primary py-0 fixed-top"
      >
        <div className="container-fluid">
          <img className="logo-icon" alt="logo" src={logoIcon} />

          <ul className="navbar-nav justify-content-between ">
            <li className="nav-item li-header">
              <div>
                {transaction && (
                  <PDFDownloadLink
                    document={<PdfTicket transaction={transaction} />}
                    fileName={`DonApp_${tx}.pdf`}
                  >
                    {({ loading }) =>
                      loading ? (
                        <h5 className="infoh5">
                          Espere a que cargue el documento...
                        </h5>
                      ) : (
                        <button className="btn-ticket">
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <span> Descargar ticket</span>{" "}
                        </button>
                      )
                    }
                  </PDFDownloadLink>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-pdf-info">
        
        <h1 className="info-h1">Agradecemos tu preferencia</h1>
        <h2 className="info-h2">¡¡Descarga tu ticket dando click en el botón!!</h2>
      </div>
      
      {/*<BodyTicket/>  */}
      
    </>
  );
};
export default Ticket;
