import { useState } from "react";
import UserModal from "@/components/common/UserModal";
import UserCard from "@/components/common/UserCard";
import { UserData, UserProps } from "@/interfaces";

const Users = ({ posts }: { posts: UserProps[] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    setNewUser({ ...user, id: posts.length + 1 });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">Users</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((user: UserProps) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export default Users;
