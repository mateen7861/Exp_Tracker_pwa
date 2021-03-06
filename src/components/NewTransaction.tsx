import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const NewTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  let amount: number | string = "";
  // Local Context
  const [title, setTitle] = useState<string>("");
  // const [amount, setAmount] = useState(0);

  // Create transaction on form submit
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      title,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={title}
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            ref={node => amount = Number(node?.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default NewTransaction;
