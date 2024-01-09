import { useEffect, useState } from "react";
import axios, { AxiosHeaders } from "axios";
import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin";
// import './style.css'
// import { mockEmployees } from "./mockEmplayees"; // do not need anymore

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [sector, setSector] = useState("");
  const [reload, setReload] = useState(false);

  // console.log(employees)

  const handleUserbtn = () => {
    setSector("user");
    // console.log(sector)
  };

  const handleAdminbtn = () => {
    setSector("admin");
    // console.log(sector)
  };

  // const handleHide = () => {
  //   setSector("");
  // };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setEmployees(response.data);
    };
    getData();
  }, [reload]);

  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position,
    };
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );
    if (response.status === 200) {
      setReload(!reload);
    }
  };

  const removeData = async (id) => {
    const member_id = id;
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${member_id}`
    );
    if (response.status === 200) {
      setReload(!reload);
    }
  };

  return (
    <Layout>
      <h1>Generation Thailand React - Assessment</h1>
      <div className="buttonbox">
        <button onClick={handleUserbtn}>User Home Sector</button>
        <button onClick={handleAdminbtn}>Admin Home Sector</button>
        {/* <button onClick={handleHide}>Hide</button> */}
      </div>
      <div>
        {sector === "user" ? <User employees={employees} /> : null}
        {sector === "admin" ? (
          <Admin
            employees={employees}
            createData={createData}
            removeData={removeData}
          />
        ) : null}
      </div>
    </Layout>
  );
};

// const User = ({employees}) => {
//   return (
//     <>
//       <tr>
//         <th>Name</th>
//         <th>Lastname</th>
//         <th>Position</th>
//       </tr>
//       {employees.map((employee) => (
//         <tr key={employee.id}>
//           <td>{employee.name}</td>
//           <td>{employee.lastname}</td>
//           <td>{employee.position}</td>
//         </tr>
//       ))}
//     </>
//   );
// };

// const Admin = ({employees}, createData, removeData) => {
//   const [name, setName] = useState();
//   const [lastname, setLastname] = useState();
//   const [position, setPosition] = useState();

//   const handleSave = (event) =>{
//     event.preventDefault();

//     setName('');
//     setLastname('');
//     setPosition('');

//     console.log({name}, {lastname}, {position})
//   }

//   return (
//     <>
//       <form>
//         <h3>Create User Here</h3>
//         <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange = {(event) => setName(event.target.value)}
//         />
//         <input
//         type="text"
//         placeholder="Last Name"
//         value={lastname}
//         onChange = {(event)=> setLastname(event.target.value)}
//         />
//         <input
//         type="text"
//         placeholder="Position"
//         value={position}
//         onChange={(event)=> setPosition(event.target.value)}
//         />
//         <button onClick={handleSave}>Save</button>
//       </form>
//       <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Last Name</th>
//           <th>Position</th>
//           <th>Action</th>
//         </tr>
//         </thead>
//         {employees.map((employee) => (
//           <tr key={employee.id}>
//             <td>{employee.name}</td>
//             <td>{employee.lastname}</td>
//             <td>{employee.position}</td>
//             <td>
//               <button onClick={()=> removeBtn(employee.id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </table>
//     </>
//   );
// };

export default Home;
