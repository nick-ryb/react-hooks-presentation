// Import React
import React,{useState} from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
} from 'spectacle';
import './index.css'

import GetUser from './Components/User/GetUser'
import GetUserHooks from './Components/User/GetUserHooks'

// Import theme
import createTheme from 'spectacle/lib/themes/default';


// Require CSS
require('normalize.css');


const OWNER = 'sagiv'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const Presentation = () => {
    const [userGender,setUserGender] = useState(false)

    if(OWNER === "natan"){
      return <Deck
      transition={['zoom', 'slide']}
      transitionDuration={500}
      theme={theme}
    >
    </Deck>
    }
    if(OWNER === "sagiv") {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary" >
          <Heading fit caps lineHeight={1} textColor="secondary">
            Hooks
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
            <Layout>
              <GetUser gender={userGender ? 'female' : 'male'}/>
              <GetUserHooks gender={userGender ? 'female' : 'male'}/>
            </Layout>
            <button onClick={() => setUserGender(!userGender)}>Change gender</button>
        </Slide>
        
      </Deck>
    );
    return "WTF"
  }
}


export default Presentation