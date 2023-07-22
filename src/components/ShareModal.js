import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../Images/FacebookPNG2.png";

function ShareModal({ setShowModal }) {
  const { groupId } = useParams();
  const ref = useRef();
  const [link, setLink] = useState(window.location.href);
  async function handleCopytoClipBoard(e) {
    await navigator.clipboard.writeText(
      window.location.href
    );
    window.alert("link copied to clipboard");
  }
  return (
    <div className="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-inherit p-8 border-4 border-red-300/100 rounded-lg">
      <button
        className="absolute top-[4px] right-[4px]"
        onClick={() => setShowModal((state) => !state)}
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h1 className="font-bold text-base first-letter:uppercase text-slate-800">
        share
      </h1>
      <div className="flex gap-3">
        <section className="flex border-2 border-slate-500/100 rounded-lg overflow-hidden ">
          <label
            htmlFor="link"
            className="bg-slate-50 px-3 py-1"
          >
            Link:
          </label>
          <input
            className="pl-1"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            ref={ref}
          />
        </section>
        <button onClick={handleCopytoClipBoard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </button>
      </div>
      <div className=" flex gap-4 items-center">
        <a href="https://www.facebook.com/ " target="blank">
          <img src={logo} className="w-8 h-6 " />
        </a>
        <a href="https://www.facebook.com/" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ShareModal;
