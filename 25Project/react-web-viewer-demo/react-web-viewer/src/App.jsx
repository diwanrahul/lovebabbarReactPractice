
import GoogleDocsViewer from "react-google-docs-viewer"
import FileViewer from 'react-file-viewer';

function App() {
 
  return (
    <FileViewer
      fileType='pdf'
      filePath='../public/Rahul_diwan_Progress Report .pptx'
    />
  )

//   return <GoogleDocsViewer
//   width="600px"
//   height="300px"
//   // fileUrl="http://164.100.196.171/learning_mng_sys/storage/app/public/App/Models/CourseTopic/LLsNvBtmaa.pptx"
//   fileUrl="../public/DSA-Decoded.pdf"
// />
}
export default App;