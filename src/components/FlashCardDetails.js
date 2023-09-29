function FlashCardDetails({ activeCard }) {
  return (
    <>
      <p className="text-blue-500/100 tracking-wider font-normal text-base first-letter:uppercase">
        {activeCard?.details}
      </p>
      <img
        src={activeCard.image}
        style={{ height: "200px", width: "200px" }}
        alt="not loading"
        className="rounded-lg  "
      />
    </>
  );
}

export default FlashCardDetails;
