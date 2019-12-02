import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import editImg from "../../assets/icons/edit.svg";
import deleteImg from "../../assets/icons/delete.svg";
import { Link } from "react-router-dom";
import { formatValue } from "../../util/format";
import { toast } from "react-toastify";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productEdit, setProductEdit] = useState({});
  const [load, setLoad] = useState(true);
  const [editMode, setEditMode] = useState(false);

  //load database products
  async function loadProducts() {
    //get products api
    const response = await api.get("/products");

    setProducts(response.data);
    setLoad(false);
  }

  //start application
  useEffect(() => {
    loadProducts();
  }, []);

  //delete selected product
  async function handleDelete({ id, name, amount, value }) {
    await api.delete("/product", {
      data: {
        id,
        name,
        amount,
        value
      }
    });
    loadProducts();
    toast.success("Produto removido com sucesso!");
  }

  //edit product data and close edit mode
  async function handleEdit(e) {
    e.preventDefault();
    await api.put("/product", productEdit);
    loadProducts();
    setProductEdit("");
    setEditMode(false);
    //display message to user
    toast.success("Produto editado com sucesso!");
  }

  //get data from selected product and open edit mode
  function getEdit(product) {
    setEditMode(true);
    setProductEdit(product);
  }

  //returns a conditional rendering interface
  return (
    <>
      <Container>
        {load ? (
          <h1 id="loading">Carregando...</h1>
        ) : (
          <>
            {editMode ? (
              <form className="form-edit" onSubmit={handleEdit}>
                <input
                  required
                  type="text"
                  value={productEdit.name}
                  onChange={e =>
                    setProductEdit({ ...productEdit, name: e.target.value })
                  }
                />
                <input
                  required
                  type="text"
                  value={productEdit.amount}
                  onChange={e =>
                    setProductEdit({ ...productEdit, amount: e.target.value })
                  }
                />
                <input
                  required
                  type="text"
                  value={productEdit.value}
                  onChange={e =>
                    setProductEdit({ ...productEdit, value: e.target.value })
                  }
                />
                <button type="submit">Salvar</button>
              </form>
            ) : (
              <div></div>
            )}

            <div>
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Quantidade</td>
                    <td>Valor</td>
                    <td>Ações</td>
                  </tr>
                </thead>

                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.amount}</td>
                      <td>{formatValue(product.value)}</td>
                      <td>
                        <button onClick={() => getEdit(product)}>
                          <img src={editImg} alt="Edit" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(product)}
                        >
                          <img src={deleteImg} alt="Delete" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        <Link to="new">
          <button className="btnDefault"> Cadastrar novo produto </button>
        </Link>
      </Container>
    </>
  );
}
