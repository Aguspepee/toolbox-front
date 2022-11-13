import Table from 'react-bootstrap/Table';
import BasicTableHead from './basic-table/basic-table-head';
import BasicTablePlaceholder from './basic-table/basic-table-placeholder';
import BasicTableRow from './basic-table/basic-table-row';
import { useSelector } from 'react-redux';

function BasicTable({ files, ...props }) {
  const loading = useSelector(state => state)

  return (
    <Table data-testid='basic-table-1' striped bordered hover>
      <BasicTableHead />
      <tbody>
        {/* Rows */}
        {!loading &&
          <>
            {files.length ?
              files.map((file) =>
                file.lines.map((line, index) =>
                  <BasicTableRow
                    data-testid={`table-row${index}`}
                    key={index}
                    fileName={file.file}
                    line={line} />
                )
              ) :
              <BasicTableRow
                fileName={"No lines to show"}
                line={[]} />}
          </>
        }

        {/* Placeholder */}
        {loading &&
          <BasicTablePlaceholder />
        }
      </tbody>
    </Table>
  );
}
BasicTable.defaultProps = {
  files: [],
}

export default BasicTable;