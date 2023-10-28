import '../style/Header.css'

import aboutPhoto1 from '../assets/photo1.JPG'

function Home() {
    return (
        <div>
            <div className='hero' >
                {/* <h1 >Mora Designs</h1> */}
                <h2 className='script subHero'>Designing your</h2><br/> <h2 className= 'script subHero' style={{paddingLeft: '200px'}}>digital future!</h2>
                <button>View our Packages</button>
            </div>
            <h1>Learn About Us</h1>
            <section style={{ display: 'flex', justifyContent: 'space-around', padding: '30px' }}>
                <img src={aboutPhoto1} alt='Photo of Employees' />
                <div className='aboutText'>
                    <div style={{ padding: '10%' }}>
                        <p >Mora Desings is a family owned company. Kyler and Emily Mora decided to put their skills and passions together to help others improve thier company and brand. </p>
                    <button 
                    // style={{fontSize: 'medium'}}
                    >Meet the Team</button>
                    </div>
                </div>
            </section>
            <h1>We offer multiple services!</h1>
            <section className='homeServices'>
                <div className='homeBranding'>
                    <h2>Branding</h2>
                    <h6>If you need a new or updated logo. We can accomplish this and more, we will give you a full company brand to use on any part of your business.</h6>
                </div>
                <div className='homeDesign'>
                    <h2>User Experience Design</h2>
                    <h6>We can not only make a beautiful website, but we will focus first on making a Website based on your client. Customers are always first and we stand by that.</h6>
                </div>
                <div className='homeDevelopment'>
                    <h2>Web Developement</h2>
                    <h6>We are a Full stack company. That means we can design your website and develop any part that you need. No need for hiring muptiple people for the design process.</h6>
                </div>
            </section>
            <section className='values'>
                <div className='commValues'>
                    <section>
                        <h1>1.</h1>
                        <h2 className='script'>Communication</h2>
                    </section>
                    <p>There will be no unanswered questions with us. We will give you all the information you will need including a timeline with STOPPING POINTS, a financial breakdown with deposit and final payment due dates. We are also happy to answer any specific questions or concerns you may have along the process. </p>
                </div>
                <div className='excValues'>
                    <section>
                        <h1>2.</h1>
                        <h2 className='script'>Excillence</h2>
                    </section>
                    <p>We thrive on critism, and love to see the joy in our client when they are fully satisifed with our work! We accept and are excited for your critism on our work, we view us and our clients as a team to be able to accomplish thier vision.</p>
                </div>
                <div className='dilValues'>
                    <section>
                        <h1>3.</h1>
                        <h2 className='script'>Diligence</h2>
                    </section>
                    <p>We understand that each project will have its own goals and challenges. We are not limited by "one size fits all" websites. ANd will plan the best way to accomplish everything you need or your website or brand. </p>
                </div>
            </section>
            {/* <button style={{backgroundColor: 'rgb(68, 80, 78)'}}>View our packages</button> */}
        </div>
    )
}

export default Home;