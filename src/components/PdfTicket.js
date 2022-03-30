import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { fetchTx } from "../services/tiket";

import logo from "../assets/logo-icon.png";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    display:"flex",
    alignContent:"center",
    justifyContent:"center",
    flexDirection: "row",
    color: "#ef2b43",
     textAlign: "center", 
     padding: ".5rem" ,
    },
  
  logo: {
    width: 60,
    padding: 5,
  },
  division: {
    display:"flex",
    alignContent:"center",
    justifyContent:"center",
    flexDirection: "row",
    color: "#2fb1ea",
     textAlign: "center", 
     padding: ".5rem" ,
    },

});
const PdfTicket = () => {
  const { store, id } = useParams();
  const { data: transaction } = useQuery("tx", async () => {
    const data = await fetchTx(store, id);
    return data;
  });
  return (
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
            <Image style={styles.logo} src={logo} />
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
             ¡Muchas gracias por tu compra en Don App Soporte!<br></br>Con la plataforma Don App. 
            </Text>

            {/*<hr
              style={{
                border: "0",
                height: "3px !important",
                backgroundColor: "#6533ff",
                margin: "3rem",
              }}
            />*/}
            <Text style={styles.division} > ────────────────  Información de la compra  ────────────────</Text>
          </View>
          <Text style={styles.section}>Número de ticket: {id}</Text>
          <Text
            style={styles.section}
          >
            Número de tienda:{store}
          </Text>

          {transaction && (
            <>
              <View className="data-div">
                <Text
                  style={{
                    color: "#6533ff",
                    textAlign: "center",
                    padding: ".5rem",
                  }}
                >
                  Ticket: {transaction.request.upc}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6533ff",
                    textAlign: "center",
                    padding: ".5rem",
                  }}
                >
                  Autorización: {transaction.auth}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: "#6533ff",
                    textAlign: "center",
                    padding: ".5rem",
                  }}
                >
                  Teléfono: {transaction.input}
                </Text>
              </View>
            </>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default PdfTicket;
