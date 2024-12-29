import { auth } from "@/auth"
import Image from "next/image"
import Link from "next/link"
import SignOut from "./SingOut"
import SignIn from "./SingnIn"

const Navbar = async () => {
  const session = await auth()
  return (
    <header className="px-5 py-3 bg-slate-900 shadow-md font-work-sans">
      <nav>
        {session && session?.user ? (
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <Link className="text-xl mr-8" href={"/"}>
                <Image src="/logo.png" alt="logo" width={64} height={64} />
              </Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/dashboard/analytics"}>Analytics</Link>
              <Link href={"/dashboard/users"}>Users</Link>
            </div>
            <SignOut name={session?.user?.name || ""} />
          </div>
        ) : (
          <SignIn />
        )}
      </nav>
    </header>
  )
}
export default Navbar
