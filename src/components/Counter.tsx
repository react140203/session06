import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { increment, decrement, incrementByAmount } from "./Counter.slice";

export function Counter() {
  const counter = useAppSelector((s) => s.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <h1>{counter.value}</h1>
      <button onClick={() => dispatch(increment())}>➕</button>
      <button onClick={() => dispatch(decrement())}>➖</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>10➕</button>
      <button onClick={() => dispatch(incrementByAmount(-10))}>10➖</button>
    </div>
  );
}
