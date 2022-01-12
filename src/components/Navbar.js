// import React from "react";
// // import "bootstrap/dist/css/bootstrap.css";
// import {NavLink} from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//     <h1>This is navbar!</h1>
//      <nav >
//       <NavLink  to="/">
//         VanceNXT
//       </NavLink>
//       {/* <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button> */}

//       <div>
//         <ul>
//           <li>
//             <NavLink  to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/project">
//               Project Details
//             </NavLink>
//           </li>
//           <li c>
//             <NavLink to="/administrator">
//               Administrator
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;

//!project-postdata

//     const res = await fetch("/administrator", {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title,
//         objectives,
//         scope,
//         plan,
//         deliverables,
//         incentives,
//         conditions,
//       }),
//     });

//     const resdata = res.json();

//     if (res.status === 400 || !resdata) {
//       window.alert("Invalid Registration");
//       console.log("Invalid Registration");
//     } else {
//       window.alert("Registration Succesfull! ");
//       console.log("Registration Succesfull!");
