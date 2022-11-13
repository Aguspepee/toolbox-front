import Placeholder from 'react-bootstrap/Placeholder';

function BasicTablePlaceholder({ ...props }) {

  return (
    <>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((file, index) => {
          return (
            <tr key={index}>
              <td>
                <Placeholder animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </td>
              <td>
                <Placeholder animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </td>
              <td>
                <Placeholder animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </td>
              <td>
                <Placeholder animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
              </td>
            </tr>
          )
        })
      }
    </>
  );
}

export default BasicTablePlaceholder;