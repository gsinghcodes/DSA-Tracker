function ProblemList() {
    return (
    <div className="flex flex-col w-1/3 bg-white rounded-2xl shadow-2xl">
        <h1 className="bg-blue-500 p-5 text-center text-white text-5xl font-bold rounded-t-2xl">DSA Problems</h1>
        <div>
            <div className="flex rounded-xl hover:bg-slate-100 hover:border-white m-4 justify-between p-3 border border-black">
                <div>
                    <h1 className="font-semibold text-2xl">Problem 1</h1>
                    <h3>Status</h3>
                </div>
                <div className="flex gap-5">
                    <button className="p-2 bg-white hover:cursor-pointer font-semibold rounded-md flex items-center relative group">
                        <span className="material-symbols-outlined text-black">edit</span>
  
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block z-10">
                            Edit
                        </div>
                    </button>

                    <button className="p-2 bg-white hover:cursor-pointer font-semibold rounded-md flex items-center relative group">
                        <span className="material-symbols-outlined">delete</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block z-10">
                            Delete
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex justify-center mb-5 mt-2">
            <button className="bg-slate-300 flex items-center p-3 rounded-md hover:cursor-pointer hover:scale-120 relative group">
                <span className="material-symbols-outlined">add</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-[rgba(0,0,0,0.7)] text-white text-xs rounded-md hidden group-hover:block z-10 whitespace-nowrap">
                    Add New Problem
                </div>
            </button>
        </div>
    </div>
    )
}

export default ProblemList