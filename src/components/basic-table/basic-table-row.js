function BasicTableRow({ fileName, line, ...props }) {

  return (
    <tr>
      <td>{fileName}</td>
      <td>{line.text}</td>
      <td>{line.number}</td>
      <td>{line.hex}</td>
    </tr>
  );
}

export default BasicTableRow;