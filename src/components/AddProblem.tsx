import { useState } from "react";

function AddProblem() {
  let [name, setName] = useState("");
  let [difficulty, setDifficulty] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setDifficulty(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="flex rounded-xl h-17 gap-3 items-center hover:bg-slate-200 bg-slate-100 hover:border-white m-4 justify-between p-3">
      <div>
        <input
          onChange={e => handleChange(e)}
          type="text"
          className="w-full border-none pl-3 outline-none focus:border-none h-10 font-semibold text-2xl"
          value={name}
        />
      </div>
      <div className="flex flex-col mt-[-10px] gap-1 wrap-normal">
        <h1 className="font-semibold">Select Difficulty Level:</h1>
        <div className="flex gap-3">
          <button
            value={"easy"}
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="hover:scale-110 hover:bg-green-600 active:scale-120 hover:cursor-pointer font-semibold text-white px-2 py-1 rounded-xl text-xs bg-green-500"
          >
            easy
          </button>
          <button
            value={"medium"}
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="hover:scale-110 hover:bg-yellow-600 active:scale-120 hover:cursor-pointer font-semibold text-white px-2 py-1 rounded-xl text-xs bg-yellow-500"
          >
            medium
          </button>
          <button
            value={"hard"}
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="hover:scale-110 hover:bg-red-600 active:scale-120 hover:cursor-pointer font-semibold text-white px-2 py-1 rounded-xl text-xs bg-red-500"
          >
            hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProblem;
