import { useState } from "react";
import type { ProblemData } from "./ProblemList";

type AddProblemProps = {
  addProblem: (newProblem: ProblemData) => void;
};

function AddProblem({ addProblem }: AddProblemProps) {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [selected, setSelected] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (difficulty: "easy" | "medium" | "hard") => {
    if (!name.trim()) return;
    const newProblem: ProblemData = {
      id: Date.now(),
      name,
      difficulty,
      status: "unsolved",
    };
    addProblem(newProblem);
    setName("");
  };

  const handleSubmitMobile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !difficulty) return;

    const newProblem: ProblemData = {
      id: Date.now(),
      name,
      difficulty: difficulty as "easy" | "medium" | "hard",
      status: "unsolved",
    };
    addProblem(newProblem);
    setName("");
    setDifficulty("");
    setSelected(false);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex rounded-xl gap-3 items-center hover:bg-slate-200 bg-slate-100 m-4 justify-between p-3">
        <input
          placeholder="Problem name.."
          onChange={handleChange}
          type="text"
          className="w-full border-none pl-3 outline-none h-10 font-semibold text-2xl"
          value={name}
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Difficulty Level:</h1>
          <div className="flex gap-3">
            {["easy", "medium", "hard"].map((level) => (
              <button
                key={level}
                value={level}
                type="button"
                onClick={() => handleSubmit(level as "easy" | "medium" | "hard")}
                className={`hover:scale-110 active:scale-120 font-semibold text-white px-2 py-1 rounded-xl text-xs ${
                  level === "easy"
                    ? "bg-green-500 hover:bg-green-600"
                    : level === "medium"
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden rounded-xl items-center justify-between m-4 bg-slate-100 hover:bg-slate-200 p-3">
        <input
          onChange={handleChange}
          value={name}
          className={`outline-none text-sm ${
            selected ? `max-w-44` : `max-w-36`
          }`}
          type="text"
          placeholder="Problem Name..."
        />
        <form onSubmit={handleSubmitMobile} className="text-sm">
          {!selected ? (
            <select
              onChange={(e) => {
                setSelected(true);
                setDifficulty(e.target.value);
              }}
              className="bg-slate-300 px-2 rounded-3xl outline-none"
              value=""
            >
              <option value="" disabled>
                Difficulty
              </option>
              <option value="easy" className="text-green-600 font-semibold">
                easy
              </option>
              <option value="medium" className="text-yellow-600 font-semibold">
                medium
              </option>
              <option value="hard" className="text-red-600 font-semibold">
                hard
              </option>
            </select>
          ) : (
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white rounded-xl px-3 py-1 hover:scale-110 active:scale-125"
            >
              Add
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default AddProblem;
