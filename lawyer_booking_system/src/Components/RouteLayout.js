import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

class RouteLayout extends Component {
    componentDidUpdate(prevProps)
    {
if(this.props.location.pathname !==prevProps.location.pathname)
{
    window.scrollTo(0,0);
}
    }
  render() {
      const {path, component}=this.props
    return (
      <Route exact path={path} component={component}/>
    )
  }
}
export default withRouter(RouteLayout);
