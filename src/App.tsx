
import "wec-react-webcomponents"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 text-3xl font-semibold text-blue-600">
      Hello React + TypeScript + TailwindCSS + Vite ⚡
      <my-button label="Click me!"></my-button>
      <my-card title="Hello!">
        <p>This is rendered inside the card component.</p>
      </my-card>
    </div>
  )
}

export default App
