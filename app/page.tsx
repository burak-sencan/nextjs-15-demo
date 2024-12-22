export default async function About() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums")
  const albums = await response.json()

  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {albums.map((album: { id: number; title: string }) => (
        <div
          className="p-4 flex-col gap-4 rounded-3xl relative justify-center items-center flex w-48 h-48 border hover:bg-black transition hover:cursor-pointer bg-white/10"
          key={album.id}
        >
          <p className="self-start absolute top-3 left-3">{album.id}</p>
          <h3 className="text-center capitalize">{album.title}</h3>
        </div>
      ))}
    </div>
  )
}
