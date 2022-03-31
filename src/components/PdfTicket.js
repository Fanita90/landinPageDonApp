import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { fetchTx } from "../services/tiket";
import NavbarPdf from "./NavbarPdf";
import logo from "../assets/logo-icon.png";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    color: "#ef2b43",
    textAlign: "justify-content",
    padding: ".5rem",
    margin: "0rem 0rem 0rem 2rem",
  },
  info: {
    color: "#6533ff",
    fontWeight: "bold",
    padding: ".5rem",
    margin: "1rem",
    textAlign: "justify-content",
  },
  info1: {
    color: "#2fb1ea",
    fontWeight: "bold",
    padding: ".5rem",
    margin: "1rem",
    textAlign: "justify-content",
  },

  logo: {
    width: 60,
    padding: 5,
  },
  division: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "#2fb1ea",
    textAlign: "center",
    padding: ".5rem",
  },
  div: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    padding: "1rem",
  },
});
const PdfTicket = () => {
  const { store, id} = useParams();
  const { data: transaction } = useQuery("tx", async () => {
    const data = await fetchTx(store, auth, operationID);
    console.log("soy data", data);
    return data;
  });
  return (
    <>
      {/*<NavbarPdf />*/}
      <Document>
        <Page
          size="A4"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: "80%",
              margin: "2rem auto",
              padding: "2rem",
              borderRadius: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                src="../assets/logo.png"
                style={{ maxWidth: "250px", maxHeight: "250px" }}
                alt="logo"
              />
              <Text
                style={{
                  display: "flex",
                  margin: "2rem",
                  fontWeight: "bold",
                  color: "#a58ffd",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  justifyContent: "space-evenly",
                }}
              >
                ¡Muchas gracias por tu compra en Don App Soporte!<br></br>Con la
                plataforma Don App.
              </Text>

              <Text style={styles.division}>
                {" "}
                ──────────────── INFORMACIÓN DE COMPRA ────────────────
              </Text>
            </View>
            <View>
              {transaction && (
                <>
                  <Text style={styles.section}>
                    Número de ticket: {transaction.request.upc}
                  </Text>
                  <Text style={styles.section}>
                    id: {id}
                  </Text>
                  <Text style={styles.section}>Número de tienda:{store}</Text>

                  <Text style={styles.section}>
                    Número de autorización: {transaction.auth}
                  </Text>
                  <Text style={styles.section}>
                    Transacción: {transaction.service}
                  </Text>
                  <Text style={styles.section}>
                    Monto: ${transaction.amount}{" "}
                  </Text>
                  <Text style={styles.section}>
                    Comisión:${transaction.donAppFee}{" "}
                  </Text>
                  <Text style={styles.section}>
                    Fecha: {transaction.createDateTime}
                  </Text>
                </>
              )}
            </View>
            <Text style={styles.division}>
              {" "}
              ──────────────── DUDAS O ACLARACIONES ────────────────
            </Text>
            <View style={styles.div}>
              <Text style={styles.info}>
                Para cualquier duda o aclaracion con tu pago, comunicate al
                servicio de atencoon a clientes de TotalPlay al telefono
                1579-8000 del D.F. y Area Metropolitana o al 01800 510 0510 del
                interior de la Republica. No olvides consevar tu comprobante de
                pago.
              </Text>
            </View>

            <View style={styles.div}>
              <Text style={styles.info1}>
                Cualquier aclaración, puedes mandar un WhatsApp Soporte DonApp
                3125933452
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PdfTicket;
