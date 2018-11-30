// Import React
import React, {useState} from 'react';

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
    Appear,
    Text,
    Layout,
    Fill,
    Image,
    GoToAction,
    CodePane,
    Notes
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import Goo from './Components/Goo'

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
    const [userGender, setUserGender] = useState(false)

    if (OWNER === "natan") {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >
                <Slide transition={['zoom']} bgColor="primary">
                    <Notes>
                        <h4>Slide notes</h4>
                        <ol>
                            <li>First note</li>
                            <li>Second note</li>
                        </ol>
                    </Notes>
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Welcome to React Hooks introduction
                    </Heading>
                    <Image height={300} width={300} src={'1_lTaYmnmt1NdkNFh7u6zzkw.png'} alt={'should be an image here...'}/>
                    <Text margin="10px 0 0" textColor="tertiary" size={1}>
                        - Introducing Hooks
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1}>
                        - Get started with Hooks
                    </Text>
                    <GoToAction slide={3}>- Get started with Hooks</GoToAction>

                    <Text margin="10px 0 0" textColor="tertiary" size={1}>
                        - The rules of Hooks
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1}>
                        - Why hooks
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1}>
                        - Hooks examples
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1}>
                        - Hooks vs Class example
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit>
                        - Hooks in the industry (useImmer, useSpring)
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1}>
                        - Outside resource
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} style={{direction: 'rtl'}} >
                        - שאלות (של אייל)
                    </Text>

                </Slide>
                <Slide transition={['fade']} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>
                        Typography
                    </Heading>
                    <Heading size={1} textColor="secondary">
                        Heading 1
                    </Heading>
                    <Heading size={2} textColor="secondary">
                        Heading 2
                    </Heading>
                    <Heading size={3} textColor="secondary">
                        Heading 3
                    </Heading>
                    <Heading size={4} textColor="secondary">
                        Heading 4
                    </Heading>
                    <Heading size={5} textColor="secondary">
                        Heading 5
                    </Heading>
                    <Text size={6} textColor="secondary">
                        Standard text
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>
                        Standard List
                    </Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        )
    }
 
    if(OWNER === "sagiv") {
        return (
        <Deck
            transition={['zoom', 'slide']}
            transitionDuration={500}
            theme={theme}
        >
                <Slide transition={['zoom']} bgColor="primary" >
                    <Heading size={1} className="goo-header" caps>hooks</Heading>
                    <Goo />
                </Slide>
                <Slide transition={[]} bgColor="primary" >
                    <Heading fit caps>Lets make a user card</Heading>
                    <Appear>
                        <CodePane textSize={15} lang="javascript" source={getUserText.trim()} />
                    </Appear>
                </Slide>
                <Slide transition={['fade']} bgColor="tertiary">
                    <Layout>
                        <Fill>
                        <Heading size={4} padding="30px" textColor="primary" caps>with class</Heading>
                            <GetUser gender={userGender ? 'female' : 'male'}/>
                        </Fill>
                        <Appear order={2}>
                            <Fill>
                                <Heading size={4} padding="30px" textColor="primary" caps>with hooks</Heading>
                                <GetUserHooks gender={userGender ? 'female' : 'male'}/>
                            </Fill>
                        </Appear>
                    </Layout>
                    <Appear order={1}>
                        <div className="get-user-btn" onClick={() => setUserGender(!userGender)}>
                            <Heading size={3} textColor="tertiary" >Get a {userGender ? 'male' : 'female'}</Heading>
                        </div>            
                    </Appear>
                </Slide>    
                <CodeSlide 
                    light
                    bgColor="tertiary"
                    textSize={20}
                    transition={[]}
                    lang="javascript"
                    code={getUserText}
                ranges={[{ loc: [7,13],title: "What went wrong" }]
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
                    ranges={[{ loc: [6,12],title: "OR WE CAN HOOK IT" }]
                }/>
                <Slide>
                    <Heading>קושיות</Heading>
                </Slide>
         </Deck>
    );
    return "WTF"
  }
}


export default Presentation