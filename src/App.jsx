import Aside from "@/components/aside/Aside"

function App() {
  return (
    <div className="flex">
      <Aside/>
      <main className="content flex-1 border border-blue-600 text-center">
        <p className="">All pages will be rendered here</p>
        <p>A good place for the routing</p>
      </main>
    </div>
  )
}

export default App
