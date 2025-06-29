// import axios from 'axios'
// import { useContext } from 'react'
import { Suspense, useContext } from "react";
//import { AuthContext } from '../../Provider/AuthProvider'
import { AuthContext } from "../../Provider/AuthProvider";
import BorrowList from "./BorrowList";
import useBorrowApi from "../../api/useBorrowApi";
// import { myBorrowPromise } from "../../api/borrowApi";

const MyBorrow = () => {
  // const initialBook = useLoaderData();

  // console.log(initialBook);

  // const [orders, setOrders] = useState(initialBook);

  const { user } = useContext(AuthContext);

  const {myBorrowPromise} = useBorrowApi();

  console.log("token in the context", user.accessToken);

  // useEffect(() => {
  //   axios(`https://library-server-self-theta.vercel.app/my-orders/${user?.email}`)
  //     .then(data => {

  //       console.log(data?.data)
  //       setOrders(data?.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [user])

  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <BorrowList myBorrowPromise={myBorrowPromise(user.email)}></BorrowList>
        {/* <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList> */}
      </Suspense>
    </div>
  );
};

export default MyBorrow;

//{
  /* <div>
      {orders.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-error mb-4">
            No books borrowed yet.
          </h2>
          <p className="text-base-content mb-4">
            Go back to the Home section and borrow your books.
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go to Home</button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          {/* Coffee Cards */
//}
//       {orders.map((book) => (
//         <BorrowCard
//           key={book._id}
//           book={book}
//           orders={orders}
//           // (user.accessToken)
//           setOrders={setOrders}
//         />
//       ))}
//     </div>
//   )}
// </div>
