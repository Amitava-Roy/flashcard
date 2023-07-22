import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FlashCardDetails from "../components/FlashCardDetails";
import { useState } from "react";
import ShareModal from "../components/ShareModal";

function CardDetails() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { groupId: urlId } = useParams();
  const groupsArray = useSelector((state) => state.group);
  const selectedGroup = groupsArray.find(
    (item) => item.groupId === urlId
  );
  const { groupName, description, cards } = selectedGroup;

  const [activeCard, setActiveCard] = useState(cards[0]);
  const indexOfActiveCard = cards.indexOf(activeCard);
  function handleCorr(item) {
    setActiveCard(item);
  }
  return (
    <>
      <div className=" flex gap-6 mt-5 mb-5 ">
        <button
          className="self-start"
          onClick={() => {
            navigate(-1);
          }}
        >
          &larr;
        </button>
        <header>
          <h1 className="text-xl text-slate-800 font-bold capitalize">
            {groupName}
          </h1>
          <h1 className="text-base text-slate-600/100 tracking-wider first-letter:uppercase">
            {description} some more txet temorarily written
            to give this thing some body and style testing
          </h1>
        </header>
      </div>

      <section className="flex gap-3 flex-[25%_50%_25%] first-letter:uppercase">
        <div className="flex flex-col gap-4 first-letter:uppercase items-center bg-stone-50 shadow-sm p-5 pt-6 rounded-lg">
          <p className="self-start border-b-2 text-base text-slate-500/100 font-semibold">
            Flashcards
          </p>
          {cards.map((item, i) => (
            <button
              key={item.title}
              onClick={() => handleCorr(item)}
              className={
                indexOfActiveCard === i
                  ? "text-red-600/100 font-semibold"
                  : "text-slate-600"
              }
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex flex-row-reverse flex-grow gap-6 justify-end bg-stone-50 shadow-sm p-5 pt-6 rounded-lg">
          <FlashCardDetails activeCard={activeCard} />
        </div>
        <div className="flex flex-col gap-3 text-blue-500/100">
          <button
            onClick={() => setShowModal((state) => !state)}
            className="flex gap-2 items-center justify-start bg-stone-50 shadow-sm px-3 py-2 rounded-lg capitalize font-semibold text-sm "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            share
          </button>

          <button className="flex gap-2 items-center justify-start bg-stone-50 shadow-sm px-3 py-2 rounded-lg capitalize font-semibold text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            download
          </button>
          <button className="flex gap-2 items-center justify-start bg-stone-50 shadow-sm px-3 py-2 rounded-lg capitalize font-semibold text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </svg>
            print
          </button>
        </div>
      </section>
      <div className="text-center mt-4 ">
        <button
          className="mr-8 text-lg font-semibold"
          onClick={() => {
            if (indexOfActiveCard === 0) return;
            handleCorr(cards[indexOfActiveCard - 1]);
          }}
        >{`<`}</button>
        <span className="font-semibold text-base text-slate-600/100">
          {indexOfActiveCard + 1}/{cards.length}
        </span>
        <button
          className="ml-8 text-lg font-semibold"
          onClick={() => {
            if (indexOfActiveCard === cards.length - 1)
              return;
            handleCorr(cards[indexOfActiveCard + 1]);
          }}
        >{`>`}</button>
      </div>

      {showModal && (
        <div
          onKeyDown={(e) => console.log(e)}
          className="absolute top-0 right-0 backdrop-blur-sm bg-slate-500/25 h-full w-full "
        >
          <ShareModal setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}
export default CardDetails;
