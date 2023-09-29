import { Link } from "react-router-dom";

function Card({ data, cardNo }) {
  const { groupId, groupName, description, cards } = data;
  const firstRow = cardNo <= 3;
  return (
    <div
      className={
        firstRow
          ? "first-row-div"
          : "grid grid-cols-2 gid-row-5 gap-2 bg-stone-50 shadow-sm p-5  rounded-lg"
      }
    >
      <img
        src={cards[0].image}
        className={
          firstRow
            ? "first-row-image"
            : "w-12 h-12 rounded-full row-span-2 col-start-1"
        }
        alt="group"
      />

      <h1
        className={
          firstRow
            ? "first-row-title "
            : "-ml-20 capitalize font-bold text-lg tracking-wide text-stone-700"
        }
      >
        {groupName}
      </h1>
      <p
        className={
          firstRow
            ? "first-row-details"
            : "col-span-2 text-stone-500 text-sm font-medium "
        }
      >
        {description}
      </p>
      <p
        className={
          firstRow
            ? "first-row-cards"
            : "row-start-2 col-start-2 -mt-2 -ml-20 text-stone-500 text-sm font-medium "
        }
      >
        {cards.length > 1
          ? `${cards.length} cards`
          : `${cards.length} card`}
      </p>
      {firstRow && (
        <Link
          to={`${groupId}`}
          className={
            firstRow ? "first-row-link" : "col-span-2 "
          }
        >
          View Card
        </Link>
      )}
      {!firstRow && (
        <Link
          to={`${groupId}`}
          className={
            firstRow
              ? "first-row-link"
              : "col-span-2 text-red-600/100 font-semibold text-base tracking-tight "
          }
        >
          View Card{" "}
          <span className="ml-4 text-lg font-bold">
            &rarr;
          </span>
        </Link>
      )}
    </div>
  );
}

export default Card;
