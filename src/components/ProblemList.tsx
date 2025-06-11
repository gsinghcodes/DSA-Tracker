import { useState } from "react";
import Problem from "./Problem";
import AddProblem from "./AddProblem";

export type ProblemData = {
  id: number;
  name: string;
  status: string;
  difficulty: string;
};


function ProblemList() {
  
  let [problems, setProblems] = useState<ProblemData[]>([])
  
  let [add, setAdd] = useState(false);

  function addProblem(newProblem: ProblemData) {
    setProblems([...problems, newProblem])
    setAdd(false)
  }

  function removeProblem(problemId: number) {
    setProblems(prev => prev.filter(p => p.id !== problemId))
  }
  
  const handleClick = () => {
    setAdd(true)
  };

  return (
    <div className="w-[80vw] md:max-w-170 flex flex-col bg-white rounded-2xl shadow-2xl">
      <h1 className="bg-blue-500 p-5 text-center text-white text-4xl md:text-5xl font-bold rounded-t-2xl">
        DSA Problems
      </h1>
      <div>
        {problems.length === 0? <h2 className=" text-center text-4xl text-gray-600 pt-3">It's Never too late to start.Click on the button to add new problems</h2>: problems.map((problem, index) => (
          <Problem
            key = {problem.id}
            id = {problem.id}
            idx={index + 1}
            name={problem.name}
            status={problem.status}
            difficulty={problem.difficulty}
            removeProblem={removeProblem}
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
