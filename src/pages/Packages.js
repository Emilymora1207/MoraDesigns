import packages from '../packages'
import extras from '../extras'
import subscriptions from '../subscriptions'

function Projects() {
  return (
    <div className='projects'>
      <h1>Packages</h1>
      <div className='packages'>
        {packages.map((packages) => {
          return (
            <div className='eachPackage'>
              <h2>{packages.title}</h2>
              <h5>{packages.price}</h5>
              {packages.includes.map((includes) => {
                return (
                  <p className='includesItem'>
                    {includes}
                  </p>
                )
              })}
            </div>
          )
        }
        )}
      </div>
      <div style={{height: '10px', width: '80%', backgroundImage: 'linear-gradient(rgba(31, 42, 42, 0) 80%, rgba(255, 255, 255, 0.575))'}}></div>
      <h1>Extras</h1>
      <div className='packages extras'>
        {extras.map((extras) => {
          return (
            <div className='eachPackage'>
              <h2>{extras.title}</h2>
              <h5>{extras.price}</h5>
              {extras.includes.map((includes) => {
                return (
                  <p>
                    {includes}
                  </p>
                )
              })}

            </div>
          )
        }
        )}
      </div>
      <div style={{height: '10px', width: '80%', backgroundImage: 'linear-gradient(rgba(31, 42, 42, 0) 80%, rgba(255, 255, 255, 0.575))'}}></div>
      <h1>Subscriptions</h1>
      <div className='packages extras subscriptons'>
        {subscriptions.map((extras) => {
          return (
            <div className='eachPackage '>
              <h2>{extras.title}</h2>
              <h5>{extras.price}</h5>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default Projects;