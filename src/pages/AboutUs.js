import "../style/About.css"
import kylerPhoto from '../assets/photo2.JPG'
import emilyPhoto from '../assets/photo4.JPG'


function AboutUs() {
  return (
    <div>
      <h1>Meet the Team</h1>
      <div className='team'>
          <div className='teamText'>
            <div>
            <h2>Kyler Mora</h2>
            <h3>Graphic Designer</h3>
            </div>
            <p>Kyler loves to be creative. Some of his hobbies include playing video games, other creative stuff...</p>
        </div>
        <img src={kylerPhoto} alt='photo of Kyler and Emily' />
      </div>
      <div className="patternLine" ></div>
      <div className='team'>
      <img src={emilyPhoto} alt='photo of Kyler and Emily' />
          <div className='teamText'>
            <div>
            <h2>Emily Mora</h2>
            <h3>Web Designer/Developer</h3>
            </div>
            <p>Along with making a website beautiful, Emily has a passion for finding structure, which is why she thought Website Design is the perfect career for her. </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;