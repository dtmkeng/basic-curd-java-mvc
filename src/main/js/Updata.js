var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

export default class Updata extends React.Component{
  // setup  value
constructor(){
  super();
  this.state={
    firstName:'',
    lastName:''
  }
}
popPage() {
        this.props.navigator.popPage();
}
//default function woking  on renderpage
componentDidMount(){
  //wording on render page
  // client({method: 'GET', path: '/vote'}).done(response => {
  //   // this.setState({employees: response.entity._embedded.employees});
  //   console.log(response)
  // });
}

handleUsernameChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}
handleClick(e){
  // /firstname/{firstname}/lastname/{lastname}
  const  { firstName,lastName} = this.state
  client({method: 'PUT', path:`firstname/${firstName.trim()}/lastname/${lastName.trim()}` }).done(res=>{
        console.log(res) // res form server
        ons.notification.alert(res.entity.status);
  })
}
renderToolbar(route, navigator){
        //back button
        const backButton =  <Ons.BackButton onClick={this.popPage.bind(this)}>Back</Ons.BackButton>
        return (
          <Ons.Toolbar>
            <div className='right'>
              <Ons.ToolbarButton >
                <Ons.Icon icon='ion-navicon, material:md-menu' />
              </Ons.ToolbarButton>
            </div>
            <div className='left'>{backButton}</div>
            <div className='center'>Updata lastName</div>
          </Ons.Toolbar>
        );
      }
    render() {
      //console.log(this.props)
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)} >
          <div style={{ textAlign: 'center' }}>
          <p>
            <Ons.Input
              value={this.state.firstName}
              onChange={this.handleUsernameChange.bind(this)}
              modifier='underbar'
              float
              name="firstName"
              placeholder='first Name' />
          </p>
          <p>
            <Ons.Input
              value={this.state.lastName}
              onChange={this.handleUsernameChange.bind(this)}
              modifier='underbar'
              float
              name="lastName"
              placeholder='last Name' />
          </p>
          <p>
            <Ons.Button onClick={this.handleClick.bind(this)}>Updata lastName</Ons.Button>
          </p>
          </div>
        </Ons.Page>
      );
    }
  } 