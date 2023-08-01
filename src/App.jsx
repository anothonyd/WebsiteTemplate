import Navigation from "./views/section/Navigation"
import Footer from "./views/section/Footer"

function App() {

  return (
    <div className=" bg-slate-200 text-black">
      <Navigation />
      <div className="w-full flex items-center justify-center h-screen bg-slate-500 text-black">
        <h1 className="text-3xl font-semibold"> HELLO MADAFAQA</h1>
      </div>
      <Footer />
    </div>
  )
}

export default App
