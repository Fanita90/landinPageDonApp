import React from "react";
import {Document,Page,Text,View,Image,StyleSheet} from "@react-pdf/renderer";
import logo from "../assets/logo-icon.png";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    color: "#ef2b43",
    textAlign: "justify-content",
    padding: "8px",
    margin: "0px 0px 0px 32px",
  },
  info: {
    color: "#6533ff",
    fontWeight: "bold",
    padding: "8px",
    margin: "16px",
    textAlign: "justify-content",
  },
  info1: {
    color: "#2fb1ea",
    fontWeight: "bold",
    padding: "8px",
    margin: "16px",
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
    padding: "8px",
  },
  div: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    padding: "16px",
  },
});
const PdfTicket = ({ transaction }) => {
  return (
    <>
      <Document>
        <Page size="A4" style={{
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
              margin: "32px auto",
              padding: "32px",
              borderRadius: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Image src={logo} style={{ maxWidth: "250px", maxHeight: "250px" }} alt="logo" />
              <Text
                style={{
                  display: "flex",
                  margin: "32px",
                  fontWeight: "bold",
                  color: "#a58ffd",
                  fontSize: "18px",
                  textAlign: "center",
                  justifyContent: "space-evenly",
                }}
              >
                ¡Muchas gracias por tu compra en {transaction.branchName}!<br></br> Con la
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
                  <Text style={styles.section}>Referencia: {transaction.reference}</Text>
                  <Text style={styles.section}>Nombre de tienda:{transaction.branchName}</Text>
                  <Text style={styles.section}>
                    Número de autorización: {transaction.auth}
                  </Text>
                  <Text style={styles.section}>
                    Transacción: {transaction.service}
                  </Text>
                  <Text style={styles.section}>
                    Monto: ${transaction.amount}
                  </Text>
                  {transaction.customerFee > 0 ?? <Text style={styles.section}>
                    Comisión:${transaction.customerFee}
                  </Text>}
                  {transaction.pin && <Text style={styles.section}>
                    Pin: {transaction.pin}
                  </Text>}
                  <Text style={styles.section}>
                    Fecha: {transaction.createDateTime}
                  </Text>
                </>
              )}
            </View>
            <Text style={styles.division}>
              ──────────────── DUDAS O ACLARACIONES ────────────────
            </Text>
            <View style={styles.div}>
              <Text style={styles.info}>
                {transaction.legend}
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
