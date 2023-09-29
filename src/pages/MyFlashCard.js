import { useSelector } from "react-redux";
import Card from "../components/ui/Card";

function MyFlashCard() {
  const grops = useSelector((state) => state.group);

  return (
    <div className="mt-10 pl-6  grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-y-2 ">
      {grops.map((item, i, array) => (
        <Card
          key={item.groupName}
          cardNo={i + 1}
          data={array[i]}
        />
      ))}
    </div>
  );
}
export default MyFlashCard;
