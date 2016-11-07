import React from 'react';

class DateList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (<ul>
      <li>&lt;</li>
      <li>11-14 周一 ¥834</li>
      <li>&gt;</li>
    </ul>);
  }
}

export default DateList;