import AddDialog from "./AddDialog";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="flex justify-between">
      <SearchBar />
      <AddDialog />
    </div>
  );
}
