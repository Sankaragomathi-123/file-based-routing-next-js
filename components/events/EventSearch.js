import React, { useRef } from "react";
import Button from "../ui/Button";

export default function EventSearch({ onSearch }) {
  const yearRef = useRef();
  const monthRef = useRef();
  const handlerSubmit = (e) => {
    e.preventDefault();

    const selectYearRef = yearRef.current.value;
    const selectMonthRef = monthRef.current.value;
    onSearch(selectYearRef, selectMonthRef);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="year">Year </label>
        <select id="year" ref={yearRef}>
          <option value="2021">2021 </option>
          <option value="2022"> 2022</option>
          <option value="2023"> 2023</option>
        </select>

        <label htmlFor="month">Month </label>
        <select id="month" ref={monthRef}>
          <option value="1">Jan </option>
          <option value="2">Feb </option>
          <option value="3">Mar </option>
          <option value="4">Apr </option>
          <option value="5">Jun </option>
          <option value="6">July </option>
          <option value="7">Aug </option>
        </select>
        <Button>Submit </Button>
      </form>
    </div>
  );
}
