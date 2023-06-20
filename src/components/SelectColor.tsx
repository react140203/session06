import { useContext, useRef } from "react";
import { AppContext } from "../appContext";

export const SelectColor = () => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { setColor } = useContext(AppContext);
  const onChange = () => {
    if (selectRef.current) {
      if (setColor) setColor(selectRef.current.value);
      selectRef.current.style.color = selectRef.current.value;
    }
  };
  return (
    <>
      <select ref={selectRef} onChange={onChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </>
  );
};
