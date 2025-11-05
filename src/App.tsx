import MyCard from "./components/MyCard"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 text-3xl font-semibold text-blue-600">
      Hello React + TypeScript + TailwindCSS + Vite ⚡
      <MyCard title="Coba">
        <p>test</p>
        </MyCard>
    </div>
  )
}

export default App
