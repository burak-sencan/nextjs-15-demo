import Link from "next/link"

const Users = () => {
  // Kullanıcı verilerini bir array'de tutuyoruz
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Kullanıcılar</h1>
      <ul className="flex flex-col gap-4">
        {users.map((user) => (
          <li key={user.id} className="hover:bg-gray-900 p-3 rounded-lg transition-colors">
            <Link href={`/dashboard/users/${user.id}`} className="flex items-center">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
