import React from "react";

const BodyTicket = ({ transaction }) => {
  return (
    <div className="container-pdf-info">
      <h1>
        ¡Muchas gracias por tu compra en {transaction.branchName}!
        <br />
        Con la plataforma Don App.
      </h1>
      <p>---------- Información de la compra ----------</p>
      <div>
        {transaction && (
          <>
            <p>Referencia: {transaction.reference}</p>
            <p> Nombre de tienda:{transaction.branchName} </p>
            <p>Número de autorización: {transaction.auth} </p>
            <p> Transacción: {transaction.service}</p>
            <p>Monto: ${transaction.amount}</p>
            {transaction.customerFee > 0 ?? (
              <p>Comisión:${transaction.customerFee}</p>
            )}
            {transaction.pin && <p> Pin: {transaction.pin} </p>}
            <p>Fecha: {transaction.createDateTime}</p>
          </>
        )}
      </div>
      <p>---------- Dudas o aclaraciones ----------</p>
      <p>{transaction.legend}</p>
      <p>
        {" "}
        Cualquier aclaración, puedes mandar un WhatsApp Soporte DonApp
        3125933452
      </p>
    </div>
  );
};

export default BodyTicket;
