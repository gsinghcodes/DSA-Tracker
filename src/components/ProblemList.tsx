import { useState } from "react";
import Problem from "./Problem";
import AddProblem from "./AddProblem";

export type ProblemData = {
  name: string;
  status: "solved" | "unsolved";
  difficulty: "easy" | "medium" | "hard";
};


function ProblemList() {
  
  let [problems, setProblems] = useState<ProblemData[]>([])
  
  let [add, setAdd] = useState(false);

  function addProblem(newProblem: ProblemData) {
    setProblems([...problems, newProblem])
    setAdd(false)
  }
  
  const handleClick = () => {
    setAdd(true)
  };

  return (
    <div className="flex flex-col w-1/3 bg-white rounded-2xl shadow-2xl">
      <h1 className="bg-blue-500 p-5 text-center text-white text-5xl font-bold rounded-t-2xl">
        DSA Problems
      </h1>
      <div>
        {problems.length === 0? <h2 className=" text-center text-4xl pt-3">It's Never too late to start</h2>: problems.map((problem, index) => (
          <Problem
            key={index}
            id={index + 1}
            name={problem.name}
            status={problem.status}
            difficulty={problem.difficulty}
          />
        ))}
      </div>

      {add && (
        <div>
          <AddProblem addProblem={addProblem} />
        </div>
      )}

      <div className="flex justify-center mb-5 mt-2">
        <button
          onClick={() => handleClick()}
          className="bg-slate-300 flex items-center p-3 rounded-md hover:cursor-pointer hover:scale-120 relative group"
        >
          <span className="material-symbols-outlined">add</span>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block z-10 whitespace-nowrap">
            Add New Problem
          </div>
        </button>
      </div>
    </div>
  );
}

export default ProblemList;
