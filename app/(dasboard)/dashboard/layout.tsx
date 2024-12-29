const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className=" rounded-lg shadow-lg p-6">{children}</div>
    </div>
  )
}

export default layout
