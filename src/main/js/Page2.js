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
    firstName:'',
    lastName:'',
    data:[]
  }
}
popPage() {
        this.props.navigator.popPage();
}
//default function woking  on renderpage
componentDidMount(){
  //wording on render page
  let data=[];
  client({method: 'GET', path: '/student'}).done(response => {
    // this.setState({employees: response.entity._embedded.employees});
    console.log(response)
    let res = response.entity;
    if(res.length>0){
    res.forEach(shot => {
        // console.log(shot.firstName)
        data.push({firstName:shot.firstName,
                   lastName:shot.lastName })
    });
    this.setState({data:data})
  } 
  });
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
  let data=[]
  client({method: 'GET', path:`firstname/${firstName.trim()}/lastname/${lastName.trim()}` }).done(res=>{
        console.log(res) // res form server
        ons.notification.alert(res.entity.status)
        client({method: 'GET', path: '/student'}).done(response => {
          // this.setState({employees: response.entity._embedded.employees});
          console.log(response)
          let res = response.entity;
          if(res.length>0){
          res.forEach(shot => {
              // console.log(shot.firstName)
              data.push({firstName:shot.firstName,
                         lastName:shot.lastName })
          })
              this.setState({data:data})
        } 
        })
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
            <div className='center'>Page2</div>
          </Ons.Toolbar>
        );
      }
    render() {
      //console.log(this.props)
      //console.log(this.state.data)
      const { data}=this.state
      const list = data.map((data,dataid)=>{
        return <div key={dataid}>{data.firstName}</div>
      }) 
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
            <Ons.Button onClick={this.handleClick.bind(this)}>Insert Data</Ons.Button>
          </p>
          <Ons.List
              dataSource={this.state.data}
              renderRow={(row) => <Ons.ListItem>{row.firstName}</Ons.ListItem>}
          />
          </div>
        </Ons.Page>
      );
    }
  } 