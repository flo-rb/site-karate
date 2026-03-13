import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import Actuhome from "../components/sections/ActuHome"

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
