import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Counter />
    </div>
  );
}