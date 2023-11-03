import Footer from "../components/footer/Footer"
import Navigation from "../components/navigation/Navigation"
import Top from "../components/top/Top"

const page = () => {
  return (
    <main id="">
        <Navigation/>
        <Top text={'Privacy Policy'}/>
        <Footer/>
    </main>
  )
}

export default page