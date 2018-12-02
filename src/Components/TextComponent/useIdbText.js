const useIdbText = `
import { useIdb } from 'react-use-idb'

const Demo = () => {
  const [value, setValue] = useIdb('my-key', 'foo')

  return (<div><div>Value: {value}</div></div>)
}
`

export default useIdbText