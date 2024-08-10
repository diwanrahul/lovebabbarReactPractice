import React, { useState, useCallback } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { printPlugin } from "@react-pdf-viewer/print";
import "@react-pdf-viewer/print/lib/styles/index.css";
import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { IoIosPrint } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { ProgressBar } from '@react-pdf-viewer/core';
// import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
const PDFViewer = ({fileUrl}) => {

    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { CurrentPageInput, GoToFirstPageButton, GoToLastPageButton, GoToNextPageButton, GoToPreviousPage, CurrentPageLabel } =
        pageNavigationPluginInstance;
  const zoomPluginInstance = zoomPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;

  const printPluginInstance = printPlugin();
  const { Print } = printPluginInstance;

  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

//   const pageNavigationPluginInstance = pageNavigationPlugin();

  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = useCallback((e) => {
    setPageNumber(e.currentPage);
    setTotalPages(e.doc._pdfInfo.numPages);
  }, []);

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            width: "800px",
            height: "430px",
            border: "1px solid rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '4px',
                }}
            >
                <div style={{ padding: '0px 2px' }}>
                    <GoToFirstPageButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <GoToPreviousPage />
                </div>
                <div style={{ padding: '0px 2px', width: '4rem' }}>
                    <CurrentPageInput />
                
                </div>
                <div>  {' '}             
                {` of ${totalPages}`}
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <GoToNextPageButton />
                </div>
                <div style={{ padding: '0px 2px' }}>
                    <GoToLastPageButton />
                </div>
            </div>

            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                
            </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                backgroundColor: "#eeeeee",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                display: "flex",
                padding: "4px",
              }}
            >
              <Print>
                {(print) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px",
                      fontSize: "30px",
                    }}
                    onClick={print.onClick}
                  >
                    <IoIosPrint />
                  </button>
                )}
              </Print>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn>
                {(zoomin) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px",
                      fontSize: "30px",
                    }}
                    onClick={zoomin.onClick}
                  >
                    <CiZoomIn />
                  </button>
                )}
              </ZoomIn>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <CurrentScale>
                {(scale) => <>{`${Math.round(scale.scale * 100)}%`}</>}
              </CurrentScale>
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut>
                {(zoomout) => (
                  <button
                    style={{
                      backgroundColor: "#357edd",
                      border: "none",
                      borderRadius: "4px",
                      color: "#ffffff",
                      cursor: "pointer",
                      padding: "8px",
                      fontSize: "30px",
                    }}
                    onClick={zoomout.onClick}
                  >
                    <CiZoomOut />
                  </button>
                )}
              </ZoomOut>
            </div>
            <Download>
              {(downloadProps) => (
                <button
                  style={{
                    backgroundColor: "#357edd",
                    border: "none",
                    borderRadius: "4px",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: "8px",
                    fontSize: "30px",
                  }}
                  onClick={downloadProps.onClick}
                >
                  <FaCloudDownloadAlt />
                </button>
              )}
            </Download>
          </div>
          <Viewer
          
            fileUrl={fileUrl}
            plugins={[
              zoomPluginInstance,
              pageNavigationPluginInstance,
              getFilePluginInstance,
              printPluginInstance,
            ]}
            onPageChange={handlePageChange}
            initialPage={pageNumber}
            
          />
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
