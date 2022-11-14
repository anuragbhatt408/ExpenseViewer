import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const handleInput = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const response = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    });
    console.log(res);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          onChange={handleInput}
          value={form.amount}
          placeholder="enter transaction amount"
        />
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={form.description}
          placeholder="enter transaction details"
        />
        <input
          type="date"
          name="date"
          onChange={handleInput}
          value={form.date}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
9;
export default App;
