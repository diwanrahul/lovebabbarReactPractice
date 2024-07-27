import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const HtmlComponent = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;
    const file = acceptedFiles[0];

    setLoading(true);

    // Step 1: Upload the file to FreeConvert
    const uploadResponse = await fetch('https://api.freeconvert.com/v1/process/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer {access-token}'
      },
      body: JSON.stringify({
        "tasks": {
          "import-1": {
            "operation": "import/upload"
          },
          "convert-1": {
            "operation": "convert",
            "input": "import-1",
            "input_format": "pptx",
            "output_format": "pdf"
          },
          "export-1": {
            "operation": "export/url",
            "input": [
              "convert-1"
            ]
          }
        }
      })
    });

    const uploadJson = await uploadResponse.json();
    const uploadUrl = uploadJson.tasks['import-1']?.result?.form?.url;
    const formData = new FormData();
    formData.append('file', file);

    await fetch(uploadUrl, {
      method: 'POST',
      body: formData
    });

    // Step 2: Wait for the conversion to complete
    let jobStatus = 'queued';
    let jobResult = null;

    while (jobStatus !== 'finished') {
      const statusResponse = await fetch(`https://api.freeconvert.com/v1/process/jobs/${uploadJson.id}`, {
        headers: {
          'Authorization': 'Bearer {access-token}'
        }
      });
      const statusJson = await statusResponse.json();
      jobStatus = statusJson.status;

      if (jobStatus === 'finished') {
        jobResult = statusJson.tasks['export-1'].result;
      } else if (jobStatus === 'error') {
        console.error('Conversion error:', statusJson);
        setLoading(false);
        return;
      } else {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before checking again
      }
    }

    setLoading(false);
    setPdfUrl(jobResult.files[0].url);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: '.pptx' });

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Drag & drop a PPTX file here, or click to select one</p>
      </div>
      {loading && <p>Converting... Please wait.</p>}
      {pdfUrl && (
        <div>
          <p>Conversion complete! <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Download PDF</a></p>
          <iframe src={pdfUrl} width="100%" height="500px"></iframe>
        </div>
      )}
    </div>
  );
};

export default HtmlComponent;
