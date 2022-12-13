import React, { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";
import TransactionChart from "../components/TransactionChart";

const Home = () => {
  useEffect(() => {
    fetchTransaction();
  }, []);

  const [transaction, setTransaction] = useState([]);

  const [editTransaction, setEditTransaction] = useState({});

  const fetchTransaction = async () => {
    const token = Cookies.get("token");
    const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await res.json();
    setTransaction(data);
  };

  return (
    <Container>
      <TransactionChart data={transaction} />
      <TransactionForm
        fetchTransaction={fetchTransaction}
        editTransaction={editTransaction}
      />
      <TransactionsList
        data={transaction}
        fetchTransaction={fetchTransaction}
        setEditTransaction={setEditTransaction}
      />
    </Container>
  );
};

export default Home;
