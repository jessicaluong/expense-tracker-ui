import Expenses from "./components/expenses/Expenses";
import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";

function App() {
  return (
    <main className="flex justify-center w-full p-[10px]">
      <div className="flex w-full max-w-[1200px] sm:border rounded-xl">
        <div className="flex-1 min-w-0 p-[10px]">
          <Header />
          <Expenses />
          <Summary />
        </div>
      </div>
    </main>
  );
}

export default App;
