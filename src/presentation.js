// Import React
import React, {useState, useContext} from 'react';

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
    Image,
    GoToAction,
    Notes,
    CodePane,
    Appear,
    Code
} from 'spectacle';
import './index.css'

import GetUser from './Components/User/GetUser'
import GetUserHooks from './Components/User/GetUserHooks'

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import hooks_funny_1 from './assets/1_lTaYmnmt1NdkNFh7u6zzkw.png';

// Require CSS
require('normalize.css');

const OWNER = 'natan'

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
    const Context = React.createContext([{}, () => {
    }]);
    const context = useContext(Context);
    console.log(context);
    if (OWNER === "natan") {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >
                {/*list of contents*/}
                <Slide transition={['zoom']} bgColor="primary">
                    <Notes>
                        <h4>Slide notes</h4>
                        <ol>
                            <li>First note</li>
                            <li>Second note</li>
                        </ol>
                    </Notes>
                    <Heading size={3} caps lineHeight={1} textColor="secondary">
                        Welcome to
                    </Heading>
                    <Image height={200} src={hooks_funny_1} alt={'should be an image here...'}/>
                    <Text margin="10px 0 0" textColor="tertiary" textSize={'30'}>
                        - Introducing Hooks
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" textSize={'30'}>
                        - Get started with Hooks
                    </Text>
                    <GoToAction slide={3}>- Get started with Hooks</GoToAction>

                    <Text textColor="tertiary" textSize={'30'}>
                        - The rules of Hooks
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" textSize={'30'}>
                        - Why Hooks
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" textSize={'30'}>
                        - Hooks examples
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" textSize={'30'}>
                        - Hooks vs Class example
                    </Text>
                    <Text margin="15px 0" textColor="tertiary" fit textSize={'30'}>
                        - Hooks in the industry (useImmer, useSpring)
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" textSize={'30'}>
                        - Outside resource
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" textSize={'30'} style={{direction: 'rtl'}}>
                        - שאלות (של אייל)
                    </Text>
                </Slide>

                {/*Introducing Hooks*/}
                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={6} textColor="primary" caps>
                        Introducing Hooks
                    </Heading>


                    <List className={'good-list'}>
                        <ListItem>Completely opt-in. You can try Hooks in a few components without rewriting any
                            existing code.</ListItem>
                        <ListItem>100% backwards-compatible. Hooks don’t contain any breaking changes.</ListItem>
                        <ListItem>Hooks allow you to reuse stateful logic without changing your component
                            hierarchy.</ListItem>
                        <ListItem>Available now. Hooks are currently in an alpha release, v16.7.0-alpha</ListItem>
                    </List>

                </Slide>

                {/*Get started with Hooks*/}
                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={6} caps textColor="primary">
                        Get started with Hooks
                    </Heading>
                    <Appear>
                        <div>

                            <Text fit>1. Install the latest (v16.7.0-alpha) React version</Text>
                        </div>
                    </Appear>
                    <Appear order={1}>
                        <div>
                            <CodePane textSize={25} lang={'javascript'} theme={'dark'}
                                      source={'import { useState } from \'react\';\n' +
                                      '\n' +
                                      'function Example() {\n' +
                                      '  // Declare a new state variable, which we\'ll call "count"\n' +
                                      '  const [count, setCount] = useState(0);\n' +
                                      '\n' +
                                      '  return (\n' +
                                      '    <div>\n' +
                                      '      <p>You clicked {count} times</p>\n' +
                                      '      <button onClick={() => setCount(count + 1)}>\n' +
                                      '        Click me\n' +
                                      '      </button>\n' +
                                      '    </div>\n' +
                                      '  );\n' +
                                      '}'}/>
                        </div>
                    </Appear>
                </Slide>

                {/*Hooks already in the alpha specs*/}
                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={6} caps textColor="primary">
                        Hooks already in the alpha specs
                    </Heading>
                    <div>
                        <Text textSize={30}>Basic Hooks:</Text>
                        <List className={'good-list'}>
                            <ListItem>useState
                                <CodePane textSize={20} lang={'js'}
                                          source={'const [state, setState] = useState(initialState);'}/>
                            </ListItem>
                            <ListItem>useEffect</ListItem>
                            <CodePane textSize={20} lang={'js'}
                                      source={'Same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.'}/>
                            {/*<Text textSize={20}>Adds the ability to perform side effects from a function component. It has the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</Text>*/}
                            <ListItem>useContext</ListItem>
                        </List>
                    </div>
                    <div>
                        <Text textSize={30}>Additional Hooks:</Text>
                        <List className={'good-list'}>
                            <ListItem>useReducer
                                <CodePane textSize={20} lang={'js'}
                                          source={'const [state, dispatch] = useReducer(reducer, initialState);'}/>
                            </ListItem>
                            <ListItem>useCallback</ListItem>
                            <ListItem>useMemo</ListItem>
                            <ListItem>useRef</ListItem>
                            <ListItem>useLayoutEffect</ListItem>
                        </List>
                    </div>
                </Slide>

                {/*Rules of Hooks*/}
                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={6} caps textColor="primary">
                        Rules of Hooks
                    </Heading>
                    <Text textSize={30}>Hooks are JavaScript functions, but they have two additional rules:</Text>
                    <List className={'good-list'}>
                        <ListItem>Only call Hooks <Code bold textSize={30} textColor="primary">at the top level.</Code> Don’t try to call Hooks inside loops, conditions, or nested functions.</ListItem>
                        <ListItem>Only call Hooks <Code bold textSize={30} textColor="primary"> from React function components.</Code> Don’t try to call Hooks from regular JavaScript functions.</ListItem>

                    </List>
                </Slide>

                {/*Why Hooks (or why Class is bad)*/}
                <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                    <Heading size={6} caps textColor="primary">
                        Why Hooks (or why Class is bad)
                    </Heading>
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
    if (OWNER === "sagiv") {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >
                <Slide transition={['zoom']} bgColor="primary">
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