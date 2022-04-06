import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import {PDFDownloadLink,PDFViewer,usePDF} from "@react-pdf/renderer";
import ReactPDF from '@react-pdf/renderer';
import { fetchTx } from "../services/tiket";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/ticket.scss";
import PdfTicket from "./PdfTicket";

const Ticket = () => {  
  const { store, tx } = useParams();

  const { data: transaction } = useQuery("tx", async () => {
   console.log({ store, tx });
    const data = await fetchTx(store, tx);
   return data;
  });
  return (
    <>
    <Navbar />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div>
        {transaction && 
          <PDFDownloadLink  document={<PdfTicket transaction={transaction} />} fileName={`DonApp_${tx}.pdf`}>
            {({ loading }) =>
              loading ? (
                <button>espere a que cargue el documento...</button>
              ) : (
                <button>Descargar</button>
              )
            }
          </PDFDownloadLink>
        }
      </div>
      <Footer />
    </>
  );
};
export default Ticket;
