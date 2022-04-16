import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../assets/logo-icon.png";

const styles = StyleSheet.create({
  section: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    color: "#ef2b43",
    textAlign: "justify-content",
    padding: "10px",
    fontSize: "16px",
  },
  info: {
    color: "#6533ff",
    fontWeight: "bold",
    padding: "8px",
    margin: "16px",
    textAlign: "justify-content",
    fontSize: "16px",
  },
  info1: {
    color: "#2fb1ea",
    fontWeight: "bold",
    padding: "8px",
    margin: "16px",
    textAlign: "justify-content",
    fontSize: "16px",
  },

  division: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    color: "#2fb1ea",
    textAlign: "center",
    padding: "8px",
    fontSize: "16px",
    align: "center",
  },
  div: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    padding: "5px",
  },
  logo: {
    width: "70px",
    height: "70px",
    align: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
});
const PdfTicket = ({ transaction }) => {
  return (
    <>
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
          <View>
            <View style={styles.container}>
              <Image src={logo} style={styles.logo} alt="logo" />
            </View>
            <Text
              style={{
                display: "flex",
                marginTop: "0px",
                fontWeight: "bold",
                color: "#ef2b43",
                fontSize: "18px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }}
            >
              ¡Muchas gracias por tu compra en {transaction.branchName}!{"\n"}{" "}
              Con la plataforma Don App.
            </Text>
            <br />
            <Text style={styles.division}>
              ---------- Información de la compra ----------
            </Text>
          </View>
          <View>
            {transaction && (
              <>
                <Text style={styles.section}>
                  Referencia: {transaction.reference}
                </Text>
                <Text style={styles.section}>
                  Nombre de tienda:{transaction.branchName}
                </Text>
                <Text style={styles.section}>
                  Número de autorización: {transaction.auth}
                </Text>
                <Text style={styles.section}>
                  Transacción: {transaction.service}
                </Text>
                <Text style={styles.section}>
                  Monto: ${transaction.amount}</Text>
                {transaction.customerFee > 0 ?? (
                  <Text style={styles.section}>
                    Comisión:${transaction.customerFee}
                  </Text>
                )}
                {transaction.pin && (
                  <Text style={styles.section}>Pin: {transaction.pin}</Text>
                )}
                <Text style={styles.section}>
                  Fecha: {transaction.createDateTime}
                </Text>
              </>
            )}
          </View>
          <Text style={styles.division}>
            ---------- Dudas o aclaraciones ----------
          </Text>
          <View style={styles.div}>
            <Text style={styles.info}>{transaction.legend}</Text>
          </View>
          <View style={styles.div}>
            <Text style={styles.info1}>
              Cualquier aclaración, puedes mandar un WhatsApp Soporte DonApp
              3125933452
            </Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PdfTicket;
