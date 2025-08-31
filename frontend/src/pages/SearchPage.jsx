import { useState } from "react";
import { searchUsers } from "../lib/api";
import { useQuery } from "@tanstack/react-query";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ["searchUsers", searchTerm],
    queryFn: () => searchUsers(searchTerm),
    enabled: !!searchTerm,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🔍 Search Users</h1>

      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search by name or language..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-2 rounded-lg flex-1"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error fetching users</p>}

      <div className="space-y-3">
        {users.length === 0 && searchTerm && <p>No users found</p>}
        {users.map((user) => (
          <div
            key={user._id}
            className="flex items-center gap-3 border p-3 rounded-lg shadow-sm"
          >
            <img src={user.profilePic} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">{user.fullName}</p>
              <p className="text-sm text-gray-600">
                Speaks: {user.nativeLanguage} | Learning: {user.learningLanguage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
