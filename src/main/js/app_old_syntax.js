var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Home from './Home';

class ReactApp extends React.Component{
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.loadPage = this.loadPage.bind(this);
  }

  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }
  popPage() {
    this.navigator.popPage();
}
showMenu() {
    this.props.showMenu();
  }
loadPage(page) {
    this.hide();
    this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
  }
renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.showMenu = this.show.bind(this);
    return React.createElement(route.component, route.props);
  }
  render() {
    
    return (
      <Ons.Page>
        <div style={{ textAlign: 'center' }}>
            <Ons.List>
                <Ons.ListItem key='home' onClick={this.loadPage.bind(this, Home)} tappable>Home</Ons.ListItem>
            </Ons.List>
        </div>
        <Ons.Navigator initialRoute={{ component: Home, props: { key: 'home' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
      </Ons.Page>
    );
  }
} 
ReactDOM.render(<ReactApp />, document.getElementById('react'));