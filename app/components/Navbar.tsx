import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex text-xl items-center gap-4 p-4 h-24 bg-gradient-to-tr from-slate-900 to-gray-900">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/dashboard/analytics"}>Analytics</Link>
      <Link href={"/dashboard/users"}>Users</Link>
    </div>
  )
}
export default Navbar
