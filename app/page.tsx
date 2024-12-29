export default async function About() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await response.json();

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {albums.map((album: { id: number; title: string }) => (
        <div
          className="relative flex h-48 w-48 flex-col items-center justify-center gap-4 rounded-3xl border-2 border-white/20 bg-white/10 p-4 text-slate-100 transition hover:cursor-pointer hover:bg-black"
          key={album.id}
        >
          <p className="absolute left-3 top-3 self-start">{album.id}</p>
          <h3 className="text-center capitalize">{album.title}</h3>
        </div>
      ))}
    </div>
  );
}
