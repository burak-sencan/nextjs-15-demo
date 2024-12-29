import { signOut } from "@/auth"

export default function SignOut({ name }: { name: string }) {
  return (
    <div className="flex gap-4 p-2 items-center justify-center">
      <p>Hello, {name.split(" ")[0]}</p>
      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/" })
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  )
}
