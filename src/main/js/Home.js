var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Page2 from './Page2'
import Updata from './Updata'
import Delete from './Delete'
export default class Home extends React.Component{
  constructor(){
    super();
    this.state={
      value:"Team00"
    }
  }
pushPage(Page) {
    let title="Helle World"
    this.props.navigator.pushPage({ component: Page, props: { key: `${Page}` ,title:this.state.value} });
  }
  renderToolbar(route, navigator){
    return (
      <Ons.Toolbar>
        <div className='right'>
          <Ons.ToolbarButton >
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
        <div className='center'>Home</div>
      </Ons.Toolbar>
    );
  }
    render() {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <div style={{ textAlign: 'center' }}>
             <h1>Home</h1>
             <Ons.Button onClick={this.pushPage.bind(this,Page2)}>Insert Data</Ons.Button>
             <Ons.Button onClick={this.pushPage.bind(this,Updata)}>Updata Data</Ons.Button>
             <Ons.Button onClick={this.pushPage.bind(this,Delete)}>Delete Data</Ons.Button>
          </div>
        </Ons.Page>
      );
    }
  } 