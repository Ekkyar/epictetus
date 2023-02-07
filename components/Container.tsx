export default function Container({ children }: any) {
  return (
    <div className="container mx-auto px-10">
      {children}
    </div>
  )
}