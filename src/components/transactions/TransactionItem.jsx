import { useGlobalState } from "../../context/GlobalState";
import {BiTrash} from 'react-icons/bi'

export function TransactionItem({ transaction: { id, description, amount } }) {
  const { deleteTransaction } = useGlobalState();
  const sign = amount < 0 ? "-" : "+";

  return (
    <li
      key={id}
      className={
        sign === "-" ? 'text-red-400 bg-zinc-600 px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center':'text-green-300 bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'
      }
    >
      {description}
      <div>
        <span>
          {sign}₹{Math.abs(amount)}
        </span>
        <button
          onClick={() => deleteTransaction(id)}
          className="font-bold text-white rounded-lg ml-2"
        >
          <BiTrash />
        </button>
      </div>
    </li>
  );
}
