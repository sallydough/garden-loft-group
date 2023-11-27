
import './contactFavorites.css'
import FaceIcon from '@mui/icons-material/Face';
import RingVolumeIcon from '@mui/icons-material/RingVolume';

const ContactFavorites = () => {
  const iconStyle = {
    fontSize:'100px',
    color: "rgb(25, 35, 51)"
  }


  return (
    <section id="contact-favorite-container">
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Chitra</h1>
          <p>grand daughter</p>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-help">
        <div className="contact-info">
          <h1>Call Support</h1>
        </div>
        <div className="contact-image">
          <RingVolumeIcon style={iconStyle}/>
        </div>
      </div>
      
    
       
    </section>
  )
}

export default ContactFavorites