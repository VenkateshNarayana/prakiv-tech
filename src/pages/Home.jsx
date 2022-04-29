import homelogo from '../images/Prakiv_bg.JPG';
import background from "../images/theme_blue.jpg";

const Home = () => {
    return(
      <div className= 'text-white' style={{ paddingLeft:10,paddingTop:10, backgroundImage: `url(${background})` }}>
        <div class="relative inset-0  flex justify-center text-slate-700 dark:text-slate-500">
          <h1 style={{ paddingLeft:0,paddingTop:5, fontFamily: 'Comic Sans' }} className='font-bold text-3xl'>Prakiv Infotech</h1>
        </div>
        <div class="relative inset-0  flex justify-center ">
          <img src={homelogo} alt="home_logo" width="50%" height="50%"/>
        </div>
        <div class="relative inset-0  flex justify-center ">
          <h1 style={{ paddingLeft:10,paddingTop:10, fontFamily: 'Proxima Nova' }} className='font-bold text-3xl'>Experienced, Personalized IT Consulting</h1>
        </div>
        <div class="relative inset-0  flex justify-center ">
          <h2 style={{ paddingLeft:10,paddingTop:10, fontFamily: 'Proxima Nova' }} className='font-bold text-2xl'>Let us build the infrastructure for your success!</h2>
        </div>
        
        <div class="relative inset-0 flex justify-center items-center z-10">
            <h3 style={{ paddingLeft:50,paddingTop:0, fontFamily: 'Proxima Nova'}}>Best services for techinical consultations.A dedicated team of technical 
            specialists available across skills and technologies.</h3> 
        </div>
      </div>
    );
};

export default Home;