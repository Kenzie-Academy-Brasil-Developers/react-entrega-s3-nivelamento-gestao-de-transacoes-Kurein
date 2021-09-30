function History({ history }) {
  return (
    <div>
      <h2>Histórico</h2>
      {history.map((elt, index) => {
        return <p key={index}>{elt}</p>;
      })}
    </div>
  );
}

export default History;
