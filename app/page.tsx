import Navbar from "./components/ui/navbar"
import Hero from "./components/ui/hero"
import Actuhome from "./components/ui/actu"

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <main>
        <Hero/>
        <Actuhome/>
      </main>
    </div>

  )
}
