import { useState } from "react";

type ProblemProps = {
  id: number;
  idx: number;
  name: string;
  status: string;
  difficulty: string;
  removeProblem: (problemId: number) => void;
};

function Problem({ id, idx, name, status, difficulty, removeProblem }: ProblemProps) {
  // ────────────────────────────────────────────────
  // mobile kebab-menu toggle
  const [showActions, setShowActions] = useState(false);
  // ────────────────────────────────────────────────

  return (
    <div className="flex rounded-xl hover:bg-slate-200 bg-slate-100 m-4 justify-between p-3 relative">
      {/* left block ────────────────────────────────── */}
      <div className="flex gap-5">
        <div className="relative pl-2">
          <p className="absolute bg-slate-300 h-6 px-2 flex items-center justify-center text-sm rounded-lg left-[-18px] top-[-20px]">
            {idx}
          </p>

          <h1 className="font-semibold text-lg md:text-2xl max-w-40 md:max-w-100">
            <span className="block overflow-x-auto whitespace-nowrap">{name}</span>
          </h1>

          <h3
            className={`font-light text-sm md:text-md ${
              status === "solved" ? "text-green-600" : "text-yellow-600"
            } text-gray-700`}
          >
            {status}
          </h3>
        </div>

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
      </div>

      {/* desktop actions ───────────────────────────── */}
      <div className="hidden md:flex items-center gap-3 md:gap-5">
        <button
          aria-label="Edit"
          className="p-2 h-8 w-8 bg-blue-500 text-white rounded-md flex items-center justify-center relative group"
        >
          <span className="material-symbols-outlined">edit</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block">
            Edit
          </div>
        </button>

        <button
          onClick={() => removeProblem(id)}
          aria-label="Delete"
          className="p-2 h-8 w-8 bg-red-500 text-white rounded-md flex items-center justify-center relative group"
        >
          <span className="material-symbols-outlined">delete</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block">
            Delete
          </div>
        </button>
      </div>

      {/* mobile kebab menu ─────────────────────────── */}
      <div className="md:hidden">
        <button
          aria-label="Actions"
          onClick={() => setShowActions((prev) => !prev)}
          className="p-2 h-3 w-8 active:scale-120 bg-slate-300 text-black rounded-md flex items-center justify-center absolute right-2 bottom-2"
        >
          <span className="material-symbols-outlined text-lg">more_horiz</span>
        </button>

        {showActions && (
          <div className="absolute right-2 bottom-12 flex flex-col gap-2 bg-white shadow-lg rounded-md p-2">
            <button
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
              <span className="material-symbols-outlined text-sm">delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Problem;
