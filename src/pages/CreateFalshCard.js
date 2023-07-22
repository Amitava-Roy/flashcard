import { useState } from "react";
import TermForm from "../components/TermForm";
import { useFormik } from "formik";
import { addGroup } from "../Featues/GrouopSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const textAreaContent =
  "Describe the role of the job and help the cadiate understand.";

function CreateFlashCard() {
  const formik = useFormik({
    initialValues: {
      groupName: "",
      description: "",
    },
    validationSchema: Yup.object({
      groupName: Yup.string()
        .max(20, "group name must be 20 characters or less")
        .required("required"),
      description: Yup.string()
        .min(10, "should atleast have 10 characters")
        .required("please add a description"),
    }),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardsArr, setCardsArr] = useState([]);

  const [noOfForm, setNoForm] = useState(1);

  const renderform = Array.from(
    { length: noOfForm },
    (_, i) => i
  );
  //new form add
  function handleAddForm(e) {
    e.preventDefault();
    setNoForm((state) => state + 1);
  }

  function handleFormDelet(e) {
    e.preventDefault();
    if (noOfForm === 1) return;
    setNoForm((state) => state - 1);
  }

  function handleCreateFlashCard(e) {
    e.preventDefault();
    console.log(formik.errors);
    if (
      formik.errors.groupName ||
      !formik.touched.groupName
    )
      return;

    if (
      formik.errors.description ||
      !formik.touched.description
    )
      return;

    const newGroup = {
      groupId: formik.values.groupName,
      groupName: formik.values.groupName,
      description: formik.values.description,
      cards: cardsArr,
    };
    dispatch(addGroup(newGroup));

    navigate("/MyFlashCard");
  }

  return (
    <>
      <form
        id="myform"
        className="bg-stone-50 marginContent p-6 rounded-xl shadow-md"
      >
        <label htmlFor="groupInput" className="input block">
          Create Group
        </label>
        <input
          type="text"
          id="groupInput"
          name="groupName"
          value={formik.values.groupName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.groupName
              ? "borderError inputFocus"
              : "fieldBorder inputFocus  "
          }
        />
        {formik.touched.groupName &&
          formik.errors.groupName && (
            <span className="text-red-300 ml-2">
              {formik.errors.groupName}
            </span>
          )}

        <label
          htmlFor="description"
          className="input block"
        >
          Description
        </label>
        <textarea
          value={formik.values.description}
          placeholder={textAreaContent}
          id="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.description
              ? "borderError w-2/3 h-24 resize-none inputFocus "
              : "fieldBorder w-2/3 h-24 resize-none inputFocus  placeholder:italic placeholder:text-sm placeholder:text-slate-400/100"
          }
        />
        {formik.touched.description &&
          formik.errors.description && (
            <span className="text-red-300 ml-2">
              {formik.errors.description}
            </span>
          )}
      </form>
      <div className=" bg-slate-50 mt-6 p-6 shadow-md rounded-lg ">
        <ul>
          {renderform.map((item, i) => (
            <li key={i}>
              <TermForm
                i={i}
                onDelet={handleFormDelet}
                handleAddForm={handleAddForm}
                groupName={formik.values.groupName}
                disabled={true}
                setCardsArr={setCardsArr}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddForm}
          className=" capitalize text-blue-600/100 font-bold tracking-wide text-sm"
        >
          + Add more
        </button>
        {cardsArr.some((item) => item.image === null) && (
          <p>cant create goup with out image</p>
        )}
      </div>
      <button
        type="submit"
        form="myform"
        onClick={handleCreateFlashCard}
        className="text-center tracking-wide rounded-lg w-[10%] py-1 px-2 my-4 ml-[45%] text-slate-100 bg-red-600 font-medium text-base"
      >
        create
      </button>
    </>
  );
}

export default CreateFlashCard;
