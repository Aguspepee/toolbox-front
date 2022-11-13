import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getList } from '../../services/files';

function BasicNavDropdown({ handleFileNameChange, loading, ...props }) {
    const [list, setList] = useState([])
    const [selectedFile, setSelectedFile] = useState(['All files'])
    const handleSelectedFileChange = (value) => {
        setSelectedFile(value)
        handleFileNameChange(value === 'All files' ? "" : value)

    }

    useEffect(() => {
        const getFiles = async () => {
            const res = await getList()
            setList(res.data?.files)
            console.log(res.data)
        }
        getFiles()
    }, []
    )

    return (
        <NavDropdown title={selectedFile} id="basic-nav-dropdown" disabled={loading}>
            <NavDropdown.Item onClick={() => handleSelectedFileChange("All files")}>All files</NavDropdown.Item>
            {list.map((file, index) => {

                return (<NavDropdown.Item key={index} onClick={() => handleSelectedFileChange(file)}>{file}</NavDropdown.Item>)


            })

            }
        </NavDropdown>
    );
}

export default BasicNavDropdown;