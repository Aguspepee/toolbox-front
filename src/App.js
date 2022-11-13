import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BasicNavbar from "./components/basic-navbar";
import BasicTable from "./components/basic-table";
import { getData } from "./services/files";


function App() {
  const [fileName, setFileName] = useState("")
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)

  const handleFileNameChange = (value) => {
    setFileName(value)
  }

  useEffect(() => {
    setLoading(true)
    const getFiles = async () => {
      try {
        const res = await getData(fileName)
        setFiles(res.data)
        setLoading(false)
      } catch (e) {
        console.log(e)
        setLoading(false)
      }
    }
    getFiles()
  }, [fileName]
  )

  return (
    <>
      <BasicNavbar handleFileNameChange={handleFileNameChange} loading={loading} />
      <Container fluid>
        <BasicTable files={files} loading={loading} />
      </Container>
    </>
  );
}

export default App;
