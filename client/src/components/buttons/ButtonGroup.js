import React from "react";
import { connect } from "react-redux";

class ButtonGroupSmall extends React.Component {

  onClickHendler(type){
    this.props.klikEvent(type);
  }

  renderMenu(){
      const menu=this.props.settings.menuButton.map(el=>
        <button type="button" className={`btn ${el.buttonClass}`} aria-pressed="true" key={el.id} onClick={()=>{this.props.klikEvent(el.type)}}>
        {el.name}
      </button>
        );
        return menu;
  }  
  render() {
    // console.log(this.props.klikEvent);
    return (
      <div className={this.props.settings.groupClass}>

        {this.renderMenu()}
      </div>
    );
  }
}
const mapStateToProps = state => {
    // console.log(state);
    return { menu:state.subMenu };
  };
export default connect(mapStateToProps)(ButtonGroupSmall);
