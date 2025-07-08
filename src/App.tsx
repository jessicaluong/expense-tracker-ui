import Expenses from "./components/expenses/Expenses";
import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";

function App() {
  return (
    <main className="flex justify-center w-full p-4">
      <div className="flex flex-col w-full max-w-[1200px] sm:border rounded-xl md:p-6 gap-4">
        <Header />
        <Expenses />
        <Summary />
      </div>
    </main>
  );
}

export default App;
