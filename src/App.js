// import React, { useState } from "react";
// import styled from "styled-components";
// import GSTRegistration from "./components/GSTRegistration";
// import InvoiceGeneration from "./components/InvoiceGeneration";
// import NotificationSystem from "./components/NotificationSystem";

// const AppContainer = styled.div`
//   padding: 20px;
// `;

// const App = () => {
//   const [recruiter, setRecruiter] = useState(null);
//   const [invoice, setInvoice] = useState(null);

//   const handleRegister = (recruiterData) => {
//     setRecruiter(recruiterData);
//   };

//   const handleInvoiceGenerated = (invoiceData) => {
//     setInvoice(invoiceData);
//   };

//   return (
//     <AppContainer>
//       <h1>GST Management System</h1>

//       {!recruiter && <GSTRegistration onRegister={handleRegister} />}

//       {recruiter && (
//         <>
//           <InvoiceGeneration
//             recruiterId={recruiter._id}
//             onInvoiceGenerated={handleInvoiceGenerated}
//           />
//           {invoice && (
//             <div>
//               <h3>Generated Invoice</h3>
//               <p>Invoice Number: {invoice.invoiceNumber}</p>
//               <p>Amount: ${invoice.amount}</p>
//               <p>GST: ${invoice.gst}</p>
//               <p>Total: ${invoice.total}</p>
//             </div>
//           )}
//           <NotificationSystem recruiterId={recruiter._id} />
//         </>
//       )}
//     </AppContainer>
//   );
// };

// export default App;
import React, { useState } from "react";
import styled from "styled-components";
import GSTRegistration from "./components/GSTRegistration";
import InvoiceGeneration from "./components/InvoiceGeneration";
import NotificationSystem from "./components/NotificationSystem";
import {
  InvoiceContainer,
  InvoiceHeader,
  InvoiceTitle,
  InvoiceDetails,
  InvoiceSection,
  InvoiceLabel,
  InvoiceValue,
  InvoiceTable,
  InvoiceTableHeader,
  InvoiceTableRow,
  InvoiceTableCell,
  InvoiceTotal,
  InvoiceTotalLabel,
  InvoiceTotalValue,
  InvoiceFooter
} from "./styles/styled"; // Adjust the import path as needed

const AppContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const AppTitle = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
`;

const App = () => {
  const [recruiter, setRecruiter] = useState(null);
  const [invoice, setInvoice] = useState(null);

  const handleRegister = (recruiterData) => {
    setRecruiter(recruiterData);
  };

  const handleInvoiceGenerated = (invoiceData) => {
    setInvoice(invoiceData);
  };

  return (
    <AppContainer>
      <AppTitle>GST Management System</AppTitle>

      {!recruiter && <GSTRegistration onRegister={handleRegister} />}

      {recruiter && (
        <>
          <InvoiceGeneration
            recruiterId={recruiter._id}
            onInvoiceGenerated={handleInvoiceGenerated}
          />
          {invoice && (
            <InvoiceContainer>
              <InvoiceHeader>
                <InvoiceTitle>Generated Invoice</InvoiceTitle>
              </InvoiceHeader>
              <InvoiceDetails>
                <InvoiceSection>
                  <InvoiceLabel>Invoice Number:</InvoiceLabel>
                  <InvoiceValue>{invoice.invoiceNumber}</InvoiceValue>
                </InvoiceSection>
                <InvoiceSection>
                  <InvoiceLabel>Date:</InvoiceLabel>
                  <InvoiceValue>{new Date().toLocaleDateString()}</InvoiceValue>
                </InvoiceSection>
              </InvoiceDetails>
              <InvoiceTable>
                <thead>
                  <tr>
                    <InvoiceTableHeader>Description</InvoiceTableHeader>
                    <InvoiceTableHeader>Amount</InvoiceTableHeader>
                  </tr>
                </thead>
                <tbody>
                  <InvoiceTableRow>
                    <InvoiceTableCell>Service Fee</InvoiceTableCell>
                    <InvoiceTableCell>${invoice.amount}</InvoiceTableCell>
                  </InvoiceTableRow>
                  <InvoiceTableRow>
                    <InvoiceTableCell>GST</InvoiceTableCell>
                    <InvoiceTableCell>${invoice.gst}</InvoiceTableCell>
                  </InvoiceTableRow>
                </tbody>
              </InvoiceTable>
              <InvoiceTotal>
                <InvoiceTotalLabel>Total:</InvoiceTotalLabel>
                <InvoiceTotalValue>${invoice.total}</InvoiceTotalValue>
              </InvoiceTotal>
              <InvoiceFooter>
                Thank you for your business!
              </InvoiceFooter>
            </InvoiceContainer>
          )}
          <NotificationSystem recruiterId={recruiter._id} />
        </>
      )}
    </AppContainer>
  );
};

export default App;