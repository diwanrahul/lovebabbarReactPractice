import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const BasicComponent = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(2);
  };

  return (
    <Document file={"inputppt.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={3} />
    </Document>
  );
};

export default BasicComponent;
