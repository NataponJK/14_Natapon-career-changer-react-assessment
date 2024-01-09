const User = ({employees}) => {
  return (
    <>
    <table>
      <tr>
        <th>Name</th>
        <th>Lastname</th>
        <th>Position</th>
      </tr>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.lastname}</td>
          <td>{employee.position}</td>
        </tr>
      ))}
      </table>
    </>
  );
};
  
export default User