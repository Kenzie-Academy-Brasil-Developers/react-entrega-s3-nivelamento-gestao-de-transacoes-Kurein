import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import History from "./components/History";
import List from "./components/List";
import TotalSale from "./components/TotalSale";
import { transactionList } from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState(transactionList);
  const [history, setHistory] = useState([]);
  const [listHandler, setListHandler] = useState(false);

  function handleOnClick() {
    setListHandler(!listHandler);
  }

  return (
    <div className="App">
      <Form
        setTransactions={setTransactions}
        transactions={transactions}
        setHistory={setHistory}
        history={history}
      />
      <div className="mainDiv">
        <div className="mainDiv__listArea">
          <List transactions={transactions} listHandler={listHandler} />
          <button onClick={handleOnClick}>
            {listHandler ? "Ir para as Entradas" : "Ir para as Saídas"}
          </button>
        </div>
        <div className="mainDiv__historyArea">
          <History history={history} />
        </div>
      </div>
      <TotalSale transactions={transactions} />
    </div>
  );
}

export default App;
