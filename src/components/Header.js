import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="header_root">
        <ul className="nav_root">
          <li>首页</li>
          <li>酒店</li>
          <li>机票</li>
        </ul>
    </div>
    );
  }
}


export default Header;
