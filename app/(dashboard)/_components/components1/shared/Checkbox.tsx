"use client";
import { ReactNode, useState } from "react";
type checkboxProps = {
  title: string | ReactNode;
  number?: number;
  id: string;
  checked?: boolean;
};
const Checkbox = ({ title, number, id, checked = true }: checkboxProps) => {
  const [check, setCheck] = useState(checked);
  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="bank__checkitem mb-8 d-flex align-items-center">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          checked={check}
          onChange={handleCheck}
        />
        <label
          className="form-check-label fz-16 fw-400 ptext2 inter"
          htmlFor={id}>
          {title}
        </label>
      </div>
      {number && <span className="fw-500 inter fz-16 pra">{number}</span>}
    </div>
  );
};

export default Checkbox;
