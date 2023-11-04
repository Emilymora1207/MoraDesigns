import '../style/Header.css'
import '../style/Contact.css'

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <div
             style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}
             >
                <div className='contactCollum'>
                    <h2>We are here for every part of the process. <br/>Schedule a one on one session with us.</h2>
                    <a href='https://outlook.office365.com/owa/calendar/MoraDesigns1@mora-designs.com/bookings/' target='_blank'>
                        <button>Schedule a Meeting</button>
                    </a>
                </div>
                <div className='contactCollum'>
                    <h2>If you just have a question or need to reach us. <br/>You can email us at </h2>
                    <a href="mailto: info@mora-designs.com" style={{ textDecoration: 'none'}}>info@mora-designs.com</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;