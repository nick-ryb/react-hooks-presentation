const GetUserWithUpdateText = `
class GetUserWithUpdate extends PureComponent {
    constructor(props){
      super(props)
      this.state={user: null}
    }
  
    componentDidMount() {
      fetch(\`https://randomuser.me/api/?gender=\${this.props.gender}\`)
      .then(resp => resp.json())
      .then(user => this.setState({user: user.results[0]}))
      .catch(console.error)
    }
  
    componentDidUpdate(nextProps) {
      if(nextProps.gender !== this.props.gender)
        fetch(\`https://randomuser.me/api/?gender=\${this.props.gender}\`)
            .then(resp => resp.json())
            .then(user => this.setState({user: user.results[0]}))
            .catch(console.error)
    }
  
    render () {
      if(this.state.user){
        return <UserCard user={this.state.user}/>
      }
      return <Heading textColor="primary">Loading...</Heading>
    }
  }
  
`

export default GetUserWithUpdateText