import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";

function TermForm({ groupName, onDelet, setCardsArr, i }) {
  const [image, setImage] = useState(null);
  const focusRef = useRef();
  const show = groupName !== "";
  function handleTermImage(e) {
    const url = URL.createObjectURL(e.target.files[0]);
    setImage(url);

    setCardsArr((state) => [
      ...state,
      {
        title: formik.values.term,
        details: formik.values.details,
        image: url,
      },
    ]);
  }
  function handleEdit(e) {
    e.preventDefault();
    focusRef.current.focus();
  }
  const formik = useFormik({
    initialValues: {
      term: "",
      details: "",
    },
    validationSchema: Yup.object({
      term: Yup.string()
        .max(15, "max character should be 15")
        .required("cant be empty"),
      details: Yup.string()
        .max(30, "maximum 30")
        .required("field cant be empty"),
    }),
  });

  return (
    <>
      <form className="flex gap-3 mt-3 mb-3 flex-col md:flex-row ">
        <span className="flex justify-center items-center w-5 h-5  bg-red-400/100 text-slate-100 rounded-full">
          {i + 1}
        </span>
        <fieldset
          className=" flex flex-col  md:flex-row gap-6"
          disabled={!show}
        >
          <div className="flex flex-col ">
            <label
              htmlFor="term"
              className=" input capitalize"
            >
              term
            </label>
            <input
              type="text"
              ref={focusRef}
              id="term"
              className={
                formik.errors.term
                  ? "borderError w-4/5 md:w-40 h-10"
                  : "fieldBorder w-4/5 md:w-40 h-10"
              }
              value={formik.values.term}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.term && formik.touched.term && (
              <p>{formik.errors.term}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="details"
              className="input capitalize "
            >
              details
            </label>
            <input
              type="text"
              id="details"
              className={
                formik.errors.term
                  ? "borderError w-5/6 md:w-80 h-10"
                  : "fieldBorder w-5/6 md:w-80 h-10"
              }
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.details &&
              formik.touched.details && (
                <p>{formik.errors.details}</p>
              )}
          </div>

          <input
            id="img"
            type="file"
            onChange={handleTermImage}
            required
            className="hidden"
          />
          {image ? (
            <img
              key={image}
              src={`${image}`}
              className="self-end"
              style={{ height: "50px", width: "80px" }}
            />
          ) : (
            <label
              htmlFor="img"
              className="mr-16 md:mr-0 text-center text-blue-600/100 font-medium text-base rounded-lg
               capitalize self-end border-blue-600/95 border-2 p-2 hover:bg-blue-600/100 hover:text-white"
            >
              select image
            </label>
          )}

          <div className=" input flex flex-row  md:flex-col gap-4 md:gap3 justify-center ">
            <button onClick={onDelet}>
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>

            <button onClick={handleEdit}>
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default TermForm;
