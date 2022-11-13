import Table from 'react-bootstrap/Table';
import BasicTableHead from './basic-table/basic-table-head';
import BasicTablePlaceholder from './basic-table/basic-table-placeholder';
import BasicTableRow from './basic-table/basic-table-row';

function BasicTable({ files, loading, ...props }) {

  return (
    <Table striped bordered hover>
      <BasicTableHead />
      <tbody>
        {/* Rows */}
        {!loading &&
          <>
            {files.length ?
              files.map((file) =>
                file.lines.map((line, index) =>
                  <BasicTableRow key={index} fileName={file.file} line={line} />
                )
              ) :
              <BasicTableRow fileName={"No lines to show"} line={[]} />}
          </>
        }

        {/* Placeholder */}
        {loading &&
            <BasicTablePlaceholder  />
        }
      </tbody>
    </Table>
  );
}

export default BasicTable;