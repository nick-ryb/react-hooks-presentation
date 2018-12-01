const useObservableText = `
import { Observer } from "mobx-react-lite"
function ObservePerson(props) {
    const person = useObservable({ name: "John" })
    return <div>
            {person.name}
            <Observer>{() => <div>{person.name}</div>}</Observer>
        </div>
}
`
export default useObservableText