import { useState } from "react";

type ProblemProps = {
  id: number;
  idx: number;
  name: string;
  status: string;
  difficulty: string;
  removeProblem: (problemId: number) => void;
  solveProblem: (problemId: number) => void;
  editProblem: (
    problemId: number,
    newName: string,
    newDifficulty: string
  ) => void;
};

function Problem({
  id,
  idx,
  name,
  status,
  difficulty,
  removeProblem,
  solveProblem,
  editProblem,
}: ProblemProps) {
  // mobile kebab-menu toggle
  const [showActions, setShowActions] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [selected, setSelected] = useState(false);
  const [hardness, setHardness] = useState("");

  return (
    <div className="flex rounded-xl hover:bg-slate-200 bg-slate-100 m-4 justify-between p-3 relative">
      {/* left block ────────────────────────────────── */}
      <div className="flex flex-col">
        <div className="relative pl-2 flex items-center gap-3">
          <p className="absolute bg-slate-300 h-6 px-2 flex items-center justify-center text-sm rounded-lg left-[-18px] top-[-20px]">
            {idx}
          </p>

          {editing ? (
            <input
              onChange={(e) => setNewName(e.currentTarget.value)}
              value={newName}
              placeholder="Problem Name..."
              className="outline-none font-semibold text-md md:text-2xl max-w-30 md:max-w-100"
              type="text"
            />
          ) : (
            <>
              <h1 className="font-semibold text-md md:text-2xl max-w-40 md:max-w-100">
                <span className="block overflow-x-auto whitespace-nowrap">
                  {name}
                </span>
              </h1>

              <button
                className={`font-semibold h-4 flex items-center text-white px-2 py-1 rounded-xl text-xs ${
                  difficulty === "easy"
                    ? "bg-green-500"
                    : difficulty === "medium"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {difficulty}
              </button>
            </>
          )}
        </div>
        <h3
          className={`font-light pl-2 flex gap-2 text-sm md:text-md ${
            status === "solved" ? "text-green-600" : "text-yellow-600"
          }`}
        >
          <input
            onChange={() => solveProblem(id)}
            type="checkbox"
            checked = {status === "solved"}
          />
          {status}
        </h3>
      </div>

      {editing ? (
        <div className="hidden md:flex flex-col gap-1">
          <h1 className="font-semibold">Difficulty Level:</h1>
          <div className="flex gap-3">
            {["easy", "medium", "hard"].map((level) => (
              <button
                key={level}
                value={level}
                type="button"
                onClick={() => {
                  editProblem(id, newName, level);
                  setEditing(false);
                  setNewName("")
                }}
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
      ) : (
        <div className="hidden md:flex items-center gap-3 md:gap-5">
          <button
            onClick={() => setEditing(true)}
            aria-label="Edit"
            className="p-2 h-8 w-8 bg-blue-500 text-white rounded-md flex items-center hover:cursor-pointer justify-center relative group"
          >
            <span className="material-symbols-outlined">edit</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block">
              Edit
            </div>
          </button>

          <button
            onClick={() => removeProblem(id)}
            aria-label="Delete"
            className="p-2 h-8 w-8 bg-red-500 text-white rounded-md flex items-center hover:cursor-pointer justify-center relative group"
          >
            <span className="material-symbols-outlined">delete</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block">
              Delete
            </div>
          </button>
        </div>
      )}

      {editing ? (
        <form onSubmit={() => {
          editProblem(id, newName, hardness)
          setNewName("")
          setEditing(false)
          setHardness("")
          setSelected(false)
        }} className="text-sm md:hidden">
          {!selected ? (
            <select
              onChange={(e) => {
                setSelected(true);
                setHardness(e.currentTarget.value);
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
              Edit
            </button>
          )}
        </form>
      ) : (
        <div className="md:hidden">
          <button
            aria-label="Actions"
            onClick={() => setShowActions((prev) => !prev)}
            className="p-2 h-3 w-8 active:scale-120 bg-slate-300 text-black rounded-md flex items-center justify-center absolute right-2 bottom-2"
          >
            <span className="material-symbols-outlined text-lg">
              more_horiz
            </span>
          </button>

          {showActions && (
            <div className="absolute right-2 bottom-12 flex flex-col gap-2 bg-white shadow-lg rounded-md p-2">
              <button
                onClick={() => setEditing(true)}
                aria-label="Edit"
                className="p-2 bg-blue-500 text-white rounded-md flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
              <button
                onClick={() => removeProblem(id)}
                aria-label="Delete"
                className="p-2 bg-red-500 text-white rounded-md flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-sm">
                  delete
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Problem;
