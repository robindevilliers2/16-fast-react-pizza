import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { pizzaId, quantity, name, totalPrice } = item;
  if (isLoadingIngredients && ingredients)
    console.log(isLoadingIngredients, ingredients);
  return (
    <li className="py-3" key={pizzaId}>
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
