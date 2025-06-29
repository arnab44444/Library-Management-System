import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { _id, image, name, category, author, } = book;

  return (
    <>
      {/* Table row for medium and large screens */}
      <tr className="hidden sm:table-row">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-10 md:w-12 md:h-12">
                <img src={image} alt="Plant" className="object-cover" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-semibold text-blue-600 ">{name}</td>
        <td className="capitalize">{category}</td>
        <td className="text-left">{author}</td>

        <td>
          <Link to={`/updateBook/${_id}`}>
            <button className="btn btn-sm md:btn-md bg-blue-500 hover:bg-blue-700">
             Update
            </button>
          </Link>
        </td>
      </tr>

      
    </>
  );
};

export default BookCard;
