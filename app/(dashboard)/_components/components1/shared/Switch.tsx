"use client";

import { useState } from "react";

type switchProps = {
  title: string;
  desc: string;
  isNew?: boolean;
  checked?: boolean;
  id: string;
};
const Switch = ({
  desc,
  title,
  checked = true,
  isNew = false,
  id,
}: switchProps) => {
  const [check, setCheck] = useState(checked);
  return (
    <div className="form-check d-flex align-items-center form-switch mb-24">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <label className="form-check-label" htmlFor={id}>
        <span className="fz-20 inter d-flex align-items-center gap-3 flex-wrap fw-500 d-block title">
          {title} {isNew && <span className="new__btn d-block">New</span>}
        </span>
        <span className="fz-14 inter pra">{desc}</span>
      </label>
    </div>
  );
};

export default Switch;
