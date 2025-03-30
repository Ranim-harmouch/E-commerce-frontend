
// import React from "react";
// import { Search } from "lucide-react";

// const Table = () => {
//   const orders = [
//     { id: 1, orders: 45, quantity: 800, products: 23340, amount: "$2,300", status: "Deliver" },
//     { id: 2, orders: 45, quantity: 800, products: 23340, amount: "$2,300", status: "Pending" },
//     { id: 3, orders: 45, quantity: 800, products: 23340, amount: "$2,300", status: "Deliver" },
//     { id: 4, orders: 45, quantity: 800, products: 23340, amount: "$2,300", status: "Pending" },
//     { id: 5, orders: 45, quantity: 800, products: 23340, amount: "$2,300", status: "Deliver" },
//     { id: 6, orders: 45, quantity: 800, products: 23340, amount: "$2,300", status: "Pending" },
//   ];

//   return (
//     <div className="w-full min-h-screen p-2">
//       {/* Search Bar */}
//       <div className="w-full max-w-4xl mb-5">
//         <div className="relative flex mb-12 items-center border rounded-lg shadow-sm bg-gray-100 w-72">
//           <Search className="absolute left-3 text-gray-500" size={20} />
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full p-3 pl-10 bg-gray-100 border-none outline-none text-lg"
//           />
//         </div>
//       </div>


//       {/* Orders Table */}
//       <div className="max-w-3xl mx-auto  shadow-lg rounded-lg overflow-hidden   ">
//         <div className="p-4 border-b">
//           <h2 className="text-xl font-semibold">List Of Orders</h2>
//           <p className="text-gray-500 text-sm">Tag &nbsp;&nbsp; Division &nbsp;&nbsp; Product G</p>
//         </div>

//         <table className="w-full text-center border-collapse">
//           <thead>
//             <tr className="bg-gray-100 border-b">
//             <th className="p-3"></th>
//               <th className="p-3">No of Orders</th>
//               <th className="p-3">Quantity</th>
//               <th className="p-3">No of Products</th>
//               <th className="p-3">Amount</th>
//               <th className="p-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id} className="border-b">
//                 <td className="p-3">{order.id}</td>
//                 <td className="p-3">{order.orders}</td>
//                 <td className="p-3">{order.quantity}</td>
//                 <td className="p-3">{order.products}</td>
//                 <td className="p-3">{order.amount}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-4 py-1 rounded-full text-white text-sm ${
//                       order.status === "Deliver" ? "bg-red-300" : "bg-red-600"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* paragraph */}
//       <div className="max-w-1xl mx-auto mt-8 p-6 text-gray-700 text-lg">
//         <p>
//           powertech has more than 1 Million <br/>products to offer, growing at a very fast.
//         </p>
//         <p>powertech offers a diverse assortment in <br/>categories ranging from consumer.</p>
//       </div>
//     </div>
//   );
// };

// export default Table;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

const Table = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch orders from the API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders"); // Update URL if needed
        setOrders(response.data.data); // Assuming your API returns { data: orders }
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="w-full min-h-screen p-2">
      {/* Search Bar */}
      <div className="w-full max-w-4xl mb-5">
        <div className="relative flex mb-12 items-center border rounded-lg shadow-sm bg-gray-100 w-72">
          <Search className="absolute left-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 pl-10 bg-gray-100 border-none outline-none text-lg"
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">List Of Orders</h2>
          <p className="text-gray-500 text-sm">Tag &nbsp;&nbsp; Division &nbsp;&nbsp; Product G</p>
        </div>

        {loading ? (
          <p className="text-center p-5">Loading orders...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3">ID</th>
                <th className="p-3">No of Orders</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">No of Products</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.orders}</td>
                  <td className="p-3">{order.quantity}</td>
                  <td className="p-3">{order.products}</td>
                  <td className="p-3">{order.amount}</td>
                  <td className="p-3">
                    <span
                     className={`px-4 py-1 rounded-full text-white text-sm ${
                       order.status === "Deliver" ? "bg-red-300" : "bg-red-600"
                     }`}
                   >
                     {order.status}
                   </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* paragraph */}
       <div className="max-w-1xl mx-auto mt-8 p-6 text-gray-700 text-lg">
         <p>
           powertech has more than 1 Million <br/>products to offer, growing at a very fast.
         </p>
         <p>powertech offers a diverse assortment in <br/>categories ranging from consumer.</p>
       </div>
    </div>
  );
};

export default Table;
