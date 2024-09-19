"use client";
import { useState } from "react";

const CheckboxCenter = ({ check = true }: { check?: boolean }) => {
  const [checked, setChecked] = useState(check);
  return (
    <span className="bank__checkitem d-flex justify-content-center align-items-center">
      <input
        className="form-check-input"
        onChange={(e) => setChecked(e.target.checked)}
        type="checkbox"
        checked={checked}
      />
    </span>
  );
};

export default CheckboxCenter;
