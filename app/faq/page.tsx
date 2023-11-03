import Footer from "../components/footer/Footer"
import Navigation from "../components/navigation/Navigation"
import Top from "../components/top/Top"

const page = () => {
  return (
    <main id="">
        <Navigation/>
        <Top text={'Do You Have Questions?'}/>
        <Footer/>
    </main>
  )
}

export default page