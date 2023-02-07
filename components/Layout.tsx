import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout({ children }: any) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}