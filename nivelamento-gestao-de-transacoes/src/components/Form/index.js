import { useState } from "react";
import "./styles.css";

function Form({
  setTransactions,
  transactions,
  setHistory,
  history,
  listHandler,
}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  function onSubmitFunction(e) {
    e.preventDefault();

    setPrice(Number(price));

    const obj = { name, quantity, price };
    obj.price = Number(obj.price);
    obj.quantity = Number(obj.quantity);

    const pluralHandler = () => {
      if (obj.quantity === 1 || obj.quantity * -1 === 1) {
        return "unidade";
      } else {
        return "unidades";
      }
    };

    if (obj.quantity > 0) {
      setTransactions([...transactions, obj]);
      setHistory([
        ...history,
        `Adicionou ${obj.quantity} ${pluralHandler()} de ${obj.name}`,
      ]);
    }
    if (obj.quantity < 0) {
      setTransactions([...transactions, obj]);
      setHistory([
        ...history,
        `Retirou ${obj.quantity * -1} ${pluralHandler()} de ${obj.name}`,
      ]);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitFunction}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Listar</button>
      </form>
    </div>
  );
}

export default Form;
