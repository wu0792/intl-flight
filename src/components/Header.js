import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<ul>
      <li>首页</li>
      <li>酒店</li>
      <li>机票</li>
    </ul>);
  }
}


export default Header;
