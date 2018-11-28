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
  CodePane,
  Layout,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import './index.css'

import GetUser from './Components/User/GetUser'
import GetUserHooks from './Components/User/GetUserHooks'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import getUserText from './Components/TextComponent/GetUserText'
import GetUserWithHooksText from './Components/TextComponent/GetUserWithHooksText'
import GetUserWithUpdateText from './Components/TextComponent/GetUserWithUpdateText'

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
        <CodeSlide 
            light
            bgColor="tertiary"
            textSize={20}
            transition={[]}
            lang="javascript"
            code={getUserText}
          ranges={[{ loc: [7,13],title: "what's the problem" }]
          }/>
          <CodeSlide 
            light
            bgColor="tertiary"
            textSize={20}
            transition={[]}
            lang="javascript"
            overflow="hidden"
            code={GetUserWithUpdateText}
            ranges={[{ loc: [13,22],title: "The solution" }]
          }/>
          <CodeSlide 
            light
            bgColor="tertiary"
            textSize={20}
            transition={['slide']}
            lang="javascript"
            overflow="hidden"
            code={GetUserWithHooksText}
            ranges={[{ loc: [6,12],title: "OR" }]
          }/>
          <Slide>
            <Heading>somthing</Heading>
          </Slide>
      </Deck>
    );
    return "WTF"
  }
}


export default Presentation