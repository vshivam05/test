import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/getAllUser", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        // Adding active status and role to each user
        const modifiedData = data.data.map((user) => ({
          ...user,
          active: true, // You can assign this dynamically based on your logic
          role: "user" // You can assign this dynamically based on your logic
        }));
        setData(modifiedData);
      });
  }, []);

  return (
    <div className=" text-bg-light  text-center align-items-center justify-content-center my-5 d-flex flex-column vh-100  ">
      <h1>Login Success Page</h1>
      
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Email</th>
              <th scope="col">Date Created</th>
              <th scope="col">Active</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((res, index) => ( // Added return statement here..
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{new Date(res.dateCreated).toLocaleDateString()}</td> 
                <td>{res.active ? "Yes" : "No"}</td> {/* Displaying active status */}
                <td>{res.role}</td> {/* Displaying role */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/login" className="btn btn-primary  my-5">
        Logout
      </Link>
    </div>
  );
};

export default Home;
