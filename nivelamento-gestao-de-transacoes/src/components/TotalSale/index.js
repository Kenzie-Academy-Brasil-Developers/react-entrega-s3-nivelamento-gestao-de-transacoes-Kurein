import "./styles.css";

function TotalSale({ transactions }) {
  const filteredEntries = transactions.filter((elt) => {
    return elt.quantity > 0;
  });

  const filteredOuts = transactions.filter((elt) => {
    return elt.quantity < 0;
  });

  function handleReduce(acc, elt) {
    return acc + elt.quantity;
  }

  const totalEntries = filteredEntries.reduce(handleReduce, 0);

  const totalOuts = filteredOuts.reduce(handleReduce, 0);

  return (
    <div className="salesDiv">
      <h3>Quantidade Total de Entradas: {totalEntries}</h3>
      <h3>Quantidade Total de Saídas: {totalOuts * -1}</h3>
    </div>
  );
}

export default TotalSale;
