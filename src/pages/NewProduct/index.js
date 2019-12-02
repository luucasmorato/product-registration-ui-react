import React, { useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [value, setValue] = useState("");

  //registers a new product with the data entered
  async function registerProduct(e) {
    e.preventDefault();

    await api.post("/product", {
      id: 0,
      name,
      amount,
      value
    });

    setName("");
    setAmount("");
    setValue("");
    //display message to user
    toast.success("Produto adicionado com sucesso!");
  }

  return (
    <Container>
      <form onSubmit={registerProduct}>
        <div className="form">
          <h1>Adicionar produto:</h1>
          <div>
            <label> Nome: </label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label> Quantidade: </label>
            <input
              type="text"
              required
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label> Valor: </label>
            <input
              type="text"
              required
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </div>
        </div>
        <footer>
          <Link to="/">
            <button type="submit" className="btnDefault">
              Voltar
            </button>
          </Link>
          <button type="submit" className="btnDefault">
            Cadastrar
          </button>
        </footer>
      </form>
    </Container>
  );
}
