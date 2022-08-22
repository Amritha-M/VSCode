 import React from "react";
 import './Table.css';


 const TableHeader = ({ heads }) => {
  return heads.map((data) => {
      return <th key={data}>{data}</th>
  })
}

const TableBody = ({ data, heads }) => {
  return data.map((val) => {
      return (
          <tr key={val["id"]}>
              {
                  heads.map((v) => {
                      return <td key={v}>{val[v]}</td>
                  })
              }
          </tr>
      )
  })
}


const Table = ({ data }) => {
  const heads = Object.keys(data[0] || []);
  return (
      <table>
          <thead>
              <tr><TableHeader heads={heads} /></tr>
          </thead>
          <tbody>
              <TableBody data={data} heads={heads} />
          </tbody>
      </table>
  )

}

export default Table;

//  function Table({head,data}){
//   return (
//     <div className="tablecheck">
//       <thead>
//       {
//             head.map((value, key) => {
//               return (
//                 <th key={key}>
//                   <td>{value.name}</td>
//                   <td>{value.age}</td>
//                   <td>{value.gender}</td>
//                   <td>{value.designation}</td>
//                 </th>
//               )
//             })
//       }
//       </thead>
//       <tbody>
//       {
//             data.map((value, key) => {
//               return (
//                 <tr key={key}>
//                   <td>{value.name}</td>
//                   <td>{value.age}</td>
//                   <td>{value.gender}</td>
//                   <td>{value.designation}</td>
//                 </tr>
//               )
//             })
//           }
//       </tbody>
//     </div>
//   )

//  }


// export default Table;

















// // const TableHeader = ({ heads }) => {
// //     return heads.map((data) => {
// //         return <th key={data}>{data}</th>
// //     })
// // }

// // const TableBody = ({ data, heads }) => {
// //     return data.map((val) => {
// //         return (
// //             <tr key={val["id"]}>
// //                 {
// //                     heads.map((v) => {
// //                         return <td key={v}>{val[v]}</td>
// //                     })
// //                 }
// //             </tr>
// //         )
// //     })
// // }
















// const data = [
//     { name: "Anom", phone: 123456678, email: "abc@gmail" ,createdon:"20-10-20"},
//     { name: "Megha", phone: 123456678, email: "abc@gmail",createdon:"20-10-20" },
//     { name: "Subham", phone: 123456678, email: "abc@gmail",createdon:"20-10-20"},
//   ]


// function Table() {
//   return (
//     <div className="tablecheck">
//       <table>
//       <tr>
//           <th>Name</th>
//           <th>Phone</th>
//           <th>Email</th>
//           <th>CreatedOn</th>
//         </tr>
//         {data.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td>{val.name}</td>
//               <td>{val.phone}</td>
//               <td>{val.email}</td>
//               <td>{val.createdon}</td>
//             </tr>
//           )
//         })}
//       </table>
//     </div>
//   );
// }
// export default Table; 

