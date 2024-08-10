import React from 'react';
import PDFViewer from './PDFViewer';

function App() {
    return (
        <div className="App">
            <h1>Custom PDF Viewer</h1>
            <PDFViewer fileUrl={`1MB_compressed.pdf`} />
        </div>
    );
}

export default App;
