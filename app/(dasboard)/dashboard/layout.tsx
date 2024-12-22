const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>dashboard</p>
      <div className="shadow-md shadow-red-800 h-96">{children}</div>
    </div>
  )
}
export default layout
