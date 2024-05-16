
import './App.css'
import Navbar from './components/Navbar'
import PreNavbar from './components/PreNavbar'
import { Routes,Route ,BrowserRouter as Router } from 'react-router-dom'
import Slidder from './components/Slidder'
import data from './data/data.json'
import Offers from './components/Offers'
import Heading  from './components/Heading.jsx'
import StarProducts from './components/StarProducts.jsx'
import HotAccesseriesMenu from './components/HotAccesseriesMenu.jsx'
import HotAccessories from './components/HotAccesseries.jsx'
import ProductPreview from './components/ProductPreview.jsx'
import Videos from './components/Videos.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import NavOptios from "./components/NavOptios.jsx"
function App() {
 return (
    <Router>
    <PreNavbar/>
  <Navbar/>
  <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
  <Slidder start={data.banner.start}/>
  <Offers offer={data.offer}/>
  <Heading text="Star Products"/>
 <StarProducts starProduct={data.starProduct}/>
 <Heading text="Hot Accesseries"/>
 <HotAccesseriesMenu/>
 <Routes>
  <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
  <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}> </Route>
  <Route exact path="/home" element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}> </Route>
  <Route exact path="/lifestyle" element={   <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}>     </Route>
      <Route exact path="/mobileAccessories" element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>   </Route>
</Routes>
<Heading text="Product Preview" />
<ProductPreview productpreview={data.productReviews}/>
<Heading text="Videos"/>
<Videos Videos={data.videos}/>
<Heading text="In The Press"/>
<Banner  banner={data.banner}/>
<Footer footer={data.footer} />
 </Router>
  
 
  )
}

export default App
