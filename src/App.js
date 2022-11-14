import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BasicNavbar from "./components/basic-navbar";
import BasicTable from "./components/basic-table";
import { getData } from "./services/files";
import { isLoading, notLoading } from './actions/loading';
import { useDispatch } from 'react-redux';


function App() {
  const [fileName, setFileName] = useState("")
  const [files, setFiles] = useState([])
  const dispatch = useDispatch()

  const handleFileNameChange = (value) => {
    setFileName(value)
  }

  //Request the files
  useEffect(() => {
    dispatch(isLoading())
    const getFiles = async () => {
      try {
        const res = await getData(fileName)
        setFiles(res.data)
        dispatch(notLoading())
      } catch (e) {
        console.log(e)
        dispatch(notLoading())
      }
    }
    getFiles()
  }, [fileName]
  )

  return (
    <>
      <BasicNavbar handleFileNameChange={handleFileNameChange} />
      <Container fluid className="p-4">
        <BasicTable files={files} />
      </Container>
    </>
  );
}

export default App;
