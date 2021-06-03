import React from 'react';
import './styles.css'

export default class Text extends React.Component{
  render(){
    if(this.props.showText){
      return (
        <p>{this.props.text}</p>
      )
    }else
      return null;
  }
}