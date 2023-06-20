import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { increment, decrement } from "./Counter.slice";

export function Counter() {
  const counter = useAppSelector((s) => s.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <h1>{counter.value}</h1>
      <button onClick={() => dispatch(increment())}>➕</button>
      <button onClick={() => dispatch(decrement())}>➖</button>
    </div>
  );
}
