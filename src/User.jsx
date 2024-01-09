const User = ({employees}) => {
  return (
    <>
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
    </>
  );
};
  
export default User