import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About/About'
import SignUp from './pages/account/signup/SignUp'
import ForgetPassword from './pages/account/forgetpassword/ForgetPassword'
import UpdatePassword from './pages/account/updatepassword/UpdatePassword'
import Login from './pages/account/login/Login'
import Faq from './pages/faq/Faq'
import Contact from './pages/contact/Contact'
import News from './pages/news/News'
import Orgn from './pages/forms/Orgn'
import Organizers from './pages/organization/Organizers'
import Speakers from './pages/speakers/Speakers'
import Services from './pages/services/Services'
import Events from './pages/events/Events'
import Dashboard from './pages/dashboard/Dashboard'
import SpeakersForm from './pages/forms/SpeakersForm'
import SlideUpdate from './pages/forms/SlideUpdate'
import Photo from './pages/forms/Photo'
import EditOrgn from './pages/forms/EditOrgn'
import EditSpeaker from './pages/forms/EditSpeaker'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/add-organizer' element={<Orgn/>}/>
      <Route path='/edit-organizer/:id' element={<EditOrgn/>}/>
      <Route path='/edit-speaker/:id' element={<EditSpeaker/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/add-speaker' element={<SpeakersForm/>}/>
      <Route path='/all-speakers' element={<Speakers/>}/>
      <Route path='/all-organizers' element={<Organizers/>}/>
      <Route path='#services' element={<Services/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/updatepassword' element={<UpdatePassword/>}/>
      <Route path='/slider' element={<SlideUpdate/>}/>
      <Route path='/photo' element={<Photo/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
      
    </>
  )
}

export default App