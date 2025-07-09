import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useFilterContext } from "@/lib/hooks";

type SearchBarProps = {
  className?: string;
};

export default function SearchBar({ className }: SearchBarProps) {
  const { searchQuery, handleSetSearchQuery } = useFilterContext();
  const [inputValue, setInputValue] = useState(searchQuery);

  // debounce search: delay 500ms after typing before calling handleSetSearchQuery
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSetSearchQuery(inputValue);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  return (
    <div className={cn("flex items-center relative", className)}>
      <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
      <Input
        className="pl-8 w-full sm:flex-1 sm:min-w-[400px] sm:max-w-[500px]"
        type="text"
        placeholder="Search by item name and brand"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
