import React from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import "./Contacts.css";

// export default function ContactsCard(props) {
//   const { first_name, last_name, phone } = props.contact;

//   const handleSubmit = () => {
//     const id = props.contact.id;
//     axiosWithAuth()
//       .delete(`/contacts/${id}`)
//       .then(res => {
//         console.log(res.data);
//       });
//   };

//   return (
//     <tr className="listContacts">
//       <td> {first_name} </td>
//       <td>{last_name} </td>
//       <td>{phone} </td>
//       <td>
//         <div className="buttons">
//           <button
//             className="delete-button"
//             type="submit"
//             onClick={() => handleSubmit()}
//           >
//             Delete
//           </button>
//           <button className="edit-button" type="submit">
//             <Link
//               to={`/updatecontact/${props.contact.id}`}
//               className="update-button"
//             >
//               {" "}
//               Edit{" "}
//             </Link>
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// }