import { useEffect, useState } from "react";
import { getUserFriends } from "../lib/api";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await getUserFriends();
        if (Array.isArray(res)) {
          setFriends(res);
        } else {
          setError("Unexpected response from server.");
        }
      } catch (err) {
        console.error("Error fetching friends:", err);
        setError("You must be logged in to see friends.");
      } finally {
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  if (loading) return <div className="text-center p-6">Loading friends...</div>;
  if (error) return <div className="text-center text-red-500 p-6">{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">My Friends</h2>
      {friends.length === 0 ? (
        <p className="text-gray-500">You don’t have any friends yet.</p>
      ) : (
        <ul className="space-y-4">
          {friends.map((friend) => (
            <li
              key={friend._id}
              className="p-4 bg-gray-100 rounded-lg flex items-center gap-4"
            >
              <img
                src={friend.profilePic || "/default-avatar.png"}
                alt={friend.fullName}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{friend.fullName}</p>
                <p className="text-sm text-gray-500">
                  {friend.nativeLanguage} → {friend.learningLanguage}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendsPage;
