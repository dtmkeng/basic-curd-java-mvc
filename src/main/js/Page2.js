var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

export default class Page2 extends React.Component{
  // setup  value
constructor(){
  super();
  this.state={
    name:"No name",
    detail:"PO-001",
    status:"on sell"
  }

}
popPage() {
        this.props.navigator.popPage();
}
//default function woking  on renderpage
componentDidMount(){
  //wording on render page
  this.setState({name:"hello kitty"});
  client({method: 'GET', path: '/vote'}).done(response => {
    // this.setState({employees: response.entity._embedded.employees});
    console.log(response)
  });
}
handleSubmit(){
  client({method: 'GET', path: '/vote/'+id+'/point/'+point}).done(
    ons.notification.alert('Voted!')
    )
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
            <div className='center'>Page2</div>
          </Ons.Toolbar>
        );
      }
    render() {
      //console.log(this.props)
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)} >
          <div style={{ textAlign: 'center' }}>
            <h1>Page 2: {this.props.title}</h1>
            noon: {this.state.name}
            detail:{this.state.detail}
            status: {this.state.status}
          </div>
        </Ons.Page>
      );
    }
  } 