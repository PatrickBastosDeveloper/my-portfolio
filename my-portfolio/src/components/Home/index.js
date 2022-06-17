import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import LogoTitle from '../../assets/images/logo-s.png';
// import Logo from '../Logo';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['P','a','t','r','i','c','k',' ','B','a','s','t','o','s'];
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={ letterClass }>H</span>
          <span className={`${letterClass}_12`}>i,</span>
          <br />
          <span className={`${letterClass}_13`}>I</span>
          <span className={`${letterClass}_14`}>'M</span>
        <img src={ LogoTitle } alt="developer" />
          <AnimatedLetters
            letterClass={ letterClass }
            strArray={ nameArray }
            idx={ 15 }
          />
        <br />
        <AnimatedLetters
            letterClass={ letterClass }
            strArray={ jobArray }
            idx={ 22 }
          />
        </h1>
        <h2>Frontend Developer / JavaScript Expert</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      {/* <Logo /> */}
    </div>
      <Loader type="pacman"/>
    </>
  )
}