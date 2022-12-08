import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"

import Header from './components/Header';
import WeHelpSurface from './components/contentBlocks/page1WeHelpSurface';
import Page1Categories from './components/contentBlocks/page1Categories';
import TeamMember from './components/contentBlocks/page1MeetOurTeam';
import SuccessStory from './components/contentBlocks/page1SuccessStory';
import OurPartnership from './components/contentBlocks/page1OurPartnership';
import RecentProjects from './components/contentBlocks/page1RecentProjects';
import Numbers from './components/contentBlocks/page1Numbers';
import AkselNews from './components/contentBlocks/page1News';
import DontMiss from './components/contentBlocks/page1DontMiss';
import Footer from './components/Footer/index';

import Details from './components/contentBlocks/page5ProjectDetails';
import Page5Projects from './components/contentBlocks/page5Projects';
import Support from './components/contentBlocks/page5SupportOtherProjects';
import AboutProject from './components/contentBlocks/page5AboutProject';

import About from './components/contentBlocks/page2AboutOurCompany';
import WhoWeAre from './components/contentBlocks/page2WhoWeAre';
import Fundraising from './components/contentBlocks/page2Fundraising';
import Page2Categories from './components/contentBlocks/page2Categories';
import OurMission from './components/contentBlocks/page2OurMission';

import HeaderModed from './components/contentBlocks/HeaderModed';
import Filtres from './components/contentBlocks/page3Filtres';
import Page3Projects from './components/contentBlocks/page3Projects';

import FilterCategory from './components/contentBlocks/page4FilterCategory';
import Donate from './components/contentBlocks/page4DonateTo';
import Page4Projects from './components/contentBlocks/page4Projects';

import Contact from './components/contentBlocks/page6ContactUs';
import BecomeOurPremPartner from './components/contentBlocks/page6BecomeOurPremiumPartner';

import AkcelNews_page7 from './components/contentBlocks/page7AkcelNews';

import NewsDetails from './components/contentBlocks/page8NewsDetails';
import WriteComment from './components/contentBlocks/page8WriteComment';
import Page8Related from './components/contentBlocks/page8Related';

import TeamMember_09 from './components/contentBlocks/page9Team';

import Stories from './components/contentBlocks/page10Stories';

import Categories from './components/contentBlocks/page11Categories';
import Page115Projects from './components/contentBlocks/page11Projects';

import ChangePasswordPage from './components/contentBlocks/ChangePassword';

import RegisterPage from './components/contentBlocks/Register';

import LoginPage from './components/contentBlocks/Login';

const HomePage_01 = () => { // page 1 
  return (
    <section>
      <Header />
      <WeHelpSurface />
      <Page1Categories />
      <TeamMember />
      <SuccessStory />
      <OurPartnership />
      <RecentProjects />
      <Numbers />
      <AkselNews />
      <DontMiss />
      <Footer />
    </section>
  )
}

const AboutUs_02 = () => { // page 2
  return (
    <section>
      <Header />
      <About />
      <WhoWeAre />
      <Fundraising />
      <Page2Categories />
      <OurMission />
      <AkselNews />
      <DontMiss />
      <Footer />
    </section>
  )
}

const Projects4Col_03 = () => { //page 3
  return (
    <section>
      <HeaderModed />
      <Filtres />
      <Page3Projects />
      <OurPartnership />
      <DontMiss />
      <Footer />
    </section>
  )
}

const Projects3Col_04 = () => { // page 4
  return (
    <section>
      <HeaderModed />
      <div className='container' style={{ maxWidth: '1620px' }}>
        <div className='row'>
          <div className='col-xxl-3 col-lg-6 col-md-12'>
            <FilterCategory />
            <Donate />
          </div>
          <div className='col-xxl-9 col-lg-6 col-md-12 px-5'>
            <Page4Projects />
          </div>
        </div>
      </div>
      <OurPartnership />
      <DontMiss />
      <Footer />
    </section>
  )
}

const ProjectDetails_05 = () => { // page 5
  return (
    <section>
      <Header />
      <Details />
      <div className='container' style={{ maxWidth: '1620px' }}>
        <div className='row'>
          <div className='col-lg-8 col-md-12'>
            <AboutProject />
          </div>
          <div className='col-lg-3 col-md-12 support'>
            <Support />
          </div>
        </div>
      </div>
      <Page5Projects />
      <DontMiss />
      <Footer />
    </section>
  )
}

const ContactUs_06 = () => { // page 6
  return (
    <section>
      <Header />
      <Contact />
      <OurPartnership />
      <BecomeOurPremPartner />
      <Footer />
    </section>
  )
}

const LatestNews_07 = () => { // page 7
  return (
    <section>
      <Header />
      <AkcelNews_page7 />
      <OurPartnership />
      <DontMiss />
      <Footer />
    </section>
  )
}

const NewsDetails_08 = () => { // page 8
  return (
    <section>
      <Header />
      <NewsDetails />
      <WriteComment />
      <Page8Related />
      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </section>
  )
}

const AkcelTeamMember_09 = () => { // page 9
  return (
    <secion>
      <Header />
      <TeamMember_09 /> {/* create hover effect ( show facebbok, twitter ) */}
      <DontMiss />
      <Footer />
    </secion>
  );
};

const SuccessProjectStory_10 = () => { // page 10
  return (
    <section>
      <Header />
      <Stories />
      <DontMiss />
      <Footer />
    </section>
  );
};

const ProjectCategories_11 = () => { // page 11
  return (
    <section>
      <Header />
      <Categories />
      <Page115Projects />
      <BecomeOurPremPartner />
      <Footer />
    </section>
  );
};

const ChangePassword = () => { // change info about user
  return (
    <section>
      <Header />
      <ChangePasswordPage />
      <Footer />
    </section>
  );
};

const Register = () => { // register page
  return (
    <section>
      <Header />
      <RegisterPage />
      <Footer />
    </section>
  )
};

const Login = () => { // login page
  return (
    <section>
      <Header />
      <LoginPage />
      <Footer />
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage_01 />} />
          <Route path="/about-us" element={<AboutUs_02 />} />
          <Route path="/projects-4-col" element={<Projects4Col_03 />} />
          <Route path="/projects-3-col" element={<Projects3Col_04 />} />
          <Route path="/project-details" element={<ProjectDetails_05 />} />
          <Route path="/contact-us" element={<ContactUs_06 />} />
          <Route path="/latest-news" element={<LatestNews_07 />} />
          <Route path="/news-details" element={<NewsDetails_08 />} />
          <Route path="/team-member" element={<AkcelTeamMember_09 />} />
          <Route path="/success-project" element={<SuccessProjectStory_10 />} />
          <Route path="/project-categories" element={<ProjectCategories_11 />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;