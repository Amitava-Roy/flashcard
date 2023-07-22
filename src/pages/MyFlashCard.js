import { useSelector } from "react-redux";
import Card from "../components/ui/Card";

function MyFlashCard() {
  const grops = useSelector((state) => state.group);

  return (
    <div className="mt-10 pl-6  grid grid-cols-3 gap-x-4 gap-y-2">
      {grops.map((item, i, array) => (
        <Card
          key={item.groupId}
          cardNo={i + 1}
          data={array[i]}
        />
      ))}
    </div>
  );
}
export default MyFlashCard;
