import { Footer } from "./components/Footer"
import HeroBanner from "./components/HeroBanner"
import { ProfileCard } from "./components/ProfileCard"
import { ProfileTabs } from "./components/ProfileTabs"

function App() {

  return (
    <>
      <HeroBanner/>
      <ProfileCard />
      <ProfileTabs />
      <Footer/>
    </>
  )
}

export default App
