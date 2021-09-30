import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

function Form({
  setTransactions,
  transactions,
  setHistory,
  history,
  listHandler,
}) {
  const Schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    quantity: yup.number().typeError("Inserir apenas Números"),
    price: yup.number().typeError("Inserir apenas Números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  function onSubmitFunction(data) {
    if (!listHandler) {
      setTransactions([...transactions, data]);
      setHistory([...history, `Adicionou ${data.quantity} ${data.name}s`]);
    }
    if (listHandler) {
      data.quantity *= -1;
      setTransactions([...transactions, data]);
      setHistory([...history, `Retirou ${data.quantity * -1} ${data.name}s`]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Quantidade" {...register("quantity")} />
        {errors.quantity?.message}
        <input placeholder="Preço" {...register("price")} />
        {errors.price?.message}
        <button type="submit">{listHandler ? "Retirar" : "Adicionar"}</button>
      </form>
    </div>
  );
}

export default Form;
