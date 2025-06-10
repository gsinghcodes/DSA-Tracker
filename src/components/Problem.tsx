type ProblemProps = {
  id: number;
  name: string;
  status: "solved" | "unsolved";
  difficulty: "easy" | "medium" | "hard";
};

function Problem({ id, name, status, difficulty }: ProblemProps) {
  return (
    <div className="flex rounded-xl hover:bg-slate-200 bg-slate-100 hover:border-white m-4 justify-between p-3">
      <div className="flex gap-5">
        <div className="relative pl-2">
          <p
        
            className="absolute bg-slate-300 h-6 px-2 flex items-center justify-center text-sm rounded-lg left-[-18px] top-[-20px]"
          >
            {id}
          </p>
          <h1 className="font-semibold text-2xl">{name}</h1>
          <h3
            className={`font-light ${
              status === "solved" ? `text-green-600` : `text-yellow-600`
            } text-gray-700`}
          >
            {status}
          </h3>
        </div>
        <div>
          <button
            className={`font-semibold text-white px-2 py-1 rounded-xl text-xs ${
              difficulty === "easy"
                ? `bg-green-500`
                : difficulty === "medium"
                ? `bg-yellow-500`
                : `bg-red-500`
            }`}
          >
            {difficulty}
          </button>
        </div>
      </div>
      <div className="flex gap-5">
        <button
          
          aria-label="Edit Status"
          className="p-2 bg-blue-500 hover:bg-blue-500 text-white hover:cursor-pointer font-semibold rounded-md flex items-center relative group"
        >
          <span className="material-symbols-outlined">edit</span>

          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block z-10">
            Edit
          </div>
        </button>

        <button
          
          aria-label="Delete Status"
          className="p-2 bg-red-500 hover:bg-red-500 text-white hover:cursor-pointer font-semibold rounded-md flex items-center relative group"
        >
          <span className="material-symbols-outlined">delete</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block z-10">
            Delete
          </div>
        </button>
      </div>
    </div>
  );
}

export default Problem;
