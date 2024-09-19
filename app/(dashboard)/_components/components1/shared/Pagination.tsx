import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <ul className="pagination justify-content-center mt-40">
      <li>
        <Link href="#">
          <i className="bi bi-chevron-left base"></i>
        </Link>
      </li>
      <li>
        <Link href="#">1</Link>
      </li>
      <li>
        <Link href="#">2</Link>
      </li>
      <li>
        <Link href="#">3</Link>
      </li>
      <li>
        <Link href="#">...</Link>
      </li>
      <li>
        <Link href="#">
          <i className="bi bi-chevron-right base"></i>
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
