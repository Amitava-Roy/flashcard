function FlashCardDetails({ activeCard }) {
  return (
    <>
      <p className="text-blue-500/100 tracking-wider font-normal text-base first-letter:uppercase">
        {activeCard?.details} Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img
        src={activeCard.image}
        style={{ height: "200px", width: "200px" }}
        alt="not loading"
        className="rounded-lg "
      />
    </>
  );
}

export default FlashCardDetails;
