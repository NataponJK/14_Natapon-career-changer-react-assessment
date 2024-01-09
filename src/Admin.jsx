import { useState } from "react";

const Admin = ({employees, createData, removeData}) => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  const handleSave = (event) =>{
    event.preventDefault();
    createData(name, lastname, position);
    setName('');
    setLastname('');
    setPosition('');
    console.log({name}, {lastname}, {position})
  }

  return (
    <>
      <form>
        <h3>Create User Here</h3>
        <input 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange = {(event) => setName(event.target.value)}
        />
        <input 
        type="text" 
        placeholder="Last Name" 
        value={lastname}
        onChange = {(event)=> setLastname(event.target.value)}
        />
        <input 
        type="text" 
        placeholder="Position" 
        value={position}
        onChange={(event)=> setPosition(event.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </form>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
        </thead>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.lastname}</td>
            <td>{employee.position}</td>
            <td>
              <button onClick={() => removeData(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Admin