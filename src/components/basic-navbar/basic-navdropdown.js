import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getList } from '../../services/files';
import { useSelector } from 'react-redux';

function BasicNavDropdown({ handleFileNameChange, ...props }) {
    const loading = useSelector(state => state)
    const [list, setList] = useState([])
    const [selectedFile, setSelectedFile] = useState(['All files'])
    const handleSelectedFileChange = (value) => {
        setSelectedFile(value)
        handleFileNameChange(value === 'All files' ? "" : value)
    }

    useEffect(() => {
        const getFiles = async () => {
            try {
                const res = await getList()
                setList(res.data?.files)
            } catch (e) {
                console.log(e)
            }
        }
        getFiles()
    }, []
    )

    return (
        <NavDropdown title={selectedFile} id="basic-nav-dropdown" disabled={loading}>
            <NavDropdown.Item onClick={() => handleSelectedFileChange("All files")}>
                All files
            </NavDropdown.Item>
            {list.map((file, index) => {
                return (
                    <NavDropdown.Item
                        key={index}
                        onClick={() => handleSelectedFileChange(file)}>{file}
                    </NavDropdown.Item>
                )
            })
            }
        </NavDropdown>
    );
}

export default BasicNavDropdown;