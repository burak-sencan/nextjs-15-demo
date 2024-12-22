const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  return <div>User details page {id}</div>
}
export default Page
