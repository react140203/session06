import { useContext, useRef } from "react";
import { AppContext } from "../appContext";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "antd";
import { reset } from "./Counter.slice";

export const SelectColor = () => {
  const counter = useAppSelector((s) => s.counter);
  const dispatch = useAppDispatch();
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
      <h1>Counter value: {counter.value}</h1>
      <Button onClick={() => dispatch(reset())}>Reset Counter</Button>
      <select ref={selectRef} onChange={onChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </>
  );
};
