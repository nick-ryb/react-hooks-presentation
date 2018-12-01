const useRedux = `
import { useRedux } from 'use-redux';

export const MyComponent = props => {
const [ state, dispatch ] = useRedux();
return <div>Foo</div>
};
`

export default useRedux