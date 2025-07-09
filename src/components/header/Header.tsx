import AddDialog from "./AddDialog";
import { Filter } from "./Filter";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <SearchBar />
        <Filter />
      </div>
      <AddDialog />
    </div>
  );
}
