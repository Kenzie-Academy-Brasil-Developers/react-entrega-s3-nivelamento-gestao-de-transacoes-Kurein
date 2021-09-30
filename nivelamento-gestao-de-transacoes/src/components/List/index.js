function List({ transactions, listHandler }) {
  const filteredEntries = transactions.filter((elt) => {
    return elt.quantity > 0;
  });

  const filteredOuts = transactions.filter((elt) => {
    return elt.quantity < 0;
  });

  return (
    <ul>
      {listHandler
        ? filteredOuts.map((elt, index) => {
            return (
              <li key={index}>
                <p>
                  Nome: {elt.name} / Quantidade: {elt.quantity} / Preço:{" "}
                  {elt.price}
                </p>
              </li>
            );
          })
        : filteredEntries.map((elt, index) => {
            return (
              <li key={index}>
                <p>
                  Nome: {elt.name} / Quantidade: {elt.quantity} / Preço:{" "}
                  {elt.price}
                </p>
              </li>
            );
          })}
    </ul>
  );
}

export default List;
