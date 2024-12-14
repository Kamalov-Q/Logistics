import Home from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Quality from './components/Quality/Quality'
import { Services } from './components/Services/Services'
import { Company } from './components/Company/Company'
import Logistic from './components/Logistic/Logistic'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Company />
      <About />
      <Quality />
      <Logistic />
      <Contact />
      {/* <Services /> */}
      <Form />
      <Footer />
    </div>
  )
}

export default App
