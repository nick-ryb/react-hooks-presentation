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
    Fill,
    CodePane,
    Appear,
    Code
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

    return (
        <Deck
            transition={['zoom', 'slide']}
            transitionDuration={500}
            theme={theme}
        >
            {/*START*/}
            <Slide transition={['zoom']} bgColor="primary">
                <Heading size={1} className="goo-header" caps>hooks</Heading>
                <Goo/>
            </Slide>

            {/*Introducing Hooks*/}
            <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                <Heading size={6} textColor="primary" caps fit>
                    Introducing Hooks
                </Heading>
                <Appear>
                    <List className={'good-list'}>
                        <ListItem>Completely opt-in. You can try Hooks in a few components without rewriting any
                            existing code.</ListItem>
                        <ListItem>100% backwards-compatible. Hooks don’t contain any breaking changes.</ListItem>
                        <ListItem>Hooks allow you to reuse stateful logic without changing your component
                            hierarchy.</ListItem>
                        <ListItem>Available now. Hooks are currently in an alpha release, <Code bold textSize={35}
                                                                                                textColor="primary">v16.7.0-alpha</Code></ListItem>
                    </List>
                </Appear>
            </Slide>

            {/*Get started with Hooks*/}
            <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                <Heading size={6} caps textColor="primary" fit>
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
                <Appear>
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
                </Appear>
                <Appear>
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
                </Appear>
            </Slide>

            {/*Rules of Hooks*/}
            <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                <Heading size={6} caps textColor="primary" fit>
                    Rules of Hooks
                </Heading>
                <Appear>
                    <div>
                        <Text textSize={30}>Hooks are JavaScript functions, but they have two additional
                            rules:</Text>
                        <List className={'good-list'}>
                            <ListItem>Only call Hooks <Code bold textSize={30} textColor="primary">at the top
                                level.</Code> Don’t try to call Hooks inside loops, conditions, or nested
                                functions.</ListItem>
                            <ListItem>Only call Hooks <Code bold textSize={30} textColor="primary"> from React
                                function
                                components.</Code> Don’t try to call Hooks from regular JavaScript
                                functions.</ListItem>
                        </List>
                    </div>
                </Appear>
            </Slide>

            {/*Why Hooks (or why Class is bad)*/}
            <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                <Heading size={6} caps textColor="primary" fit>
                    Why Hooks? (or why Class is bad...)
                </Heading>
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
                        <Heading size={3} textColor="tertiary">Get a {userGender ? 'male' : 'female'}</Heading>
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
                ranges={[{loc: [7, 13], title: "What went wrong"}]
                }/>
            <CodeSlide
                light
                bgColor="tertiary"
                textSize={20}
                transition={[]}
                lang="javascript"
                overflow="hidden"
                code={GetUserWithUpdateText}
                ranges={[{loc: [13, 22], title: "The solution"}]
                }/>
            <CodeSlide
                light
                bgColor="tertiary"
                textSize={20}
                transition={['slide']}
                lang="javascript"
                overflow="hidden"
                code={GetUserWithHooksText}
                ranges={[{loc: [6, 12], title: "OR WE CAN HOOK IT"}]
                }/>

            {/*Hooks in the industry*/}
            <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                <Heading size={6} caps textColor="primary" fit>Hooks in the industry (useImmer, useSpring)</Heading>
            </Slide>

            {/*Outside resource*/}
            <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
                <Heading size={6} caps textColor="primary" fit>Outside resource</Heading>
            </Slide>

            {/*Quote*/}
            <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                <BlockQuote>
                    <Quote>Example Quote</Quote>
                    <Cite>Author</Cite>
                </BlockQuote>
            </Slide>

            {/*Questions*/}
            <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                <Heading size={6} caps textColor="primary" fit>קושיות</Heading>
            </Slide>
        </Deck>
    )
};

export default Presentation