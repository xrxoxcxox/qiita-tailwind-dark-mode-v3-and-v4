import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-6 text-4xl bg-background h-full p-8">
      <div className="bg-surface rounded p-6">
        <p className="text-text">Default color text</p>
      </div>
      <div className="bg-surface rounded p-6">
        <p className="text-primary">Primary color text</p>
      </div>
    </div>
  );
}

export default App;
