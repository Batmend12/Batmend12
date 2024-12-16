import { useState } from "react"

export default function Home() {
  const [grid, setGrid] = useState(false);
  const data = [
    {
      id: 1,
      name: "KK",
      descriprion: "dance study sleep sports"
    },
    {
      id: 2,
      name: "TT",
      descriprion: "sports study friends sleep handsome "
    },
    {
      id: 3,
      name: "SS",
      descriprion: "study sleep cute sports dance "
    },
    {
      id: 4,
      name: "MM",
      descriprion: "sports dance study handsome sleep"
    }
  ]
  return (
  <div className="p-6 max-4xl mx-auto">
    <div className="flex flex-col items-center justify-between mb-6 space-y-4">
      <div className="flex flex-row justify-between TextNButton">
      <h1 className="text-3xl font-bold">Taniltsuulga</h1>
      <button onClick={() => setGrid(!grid)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-sky-600 transition">DELGERENGUI</button>
      </div>
      <div className={`${grid == true ? "grid grid-cols-2 gap-4" : "space-y-4"}`}>
        {data.map((item) => {
          return <div className="border-black border rounded shadow-xl p-10  font-bold"><p>{item.name}</p> <p>{item.descriprion}</p></div>
        })}
      </div>
    </div>
  </div>
  )


}
