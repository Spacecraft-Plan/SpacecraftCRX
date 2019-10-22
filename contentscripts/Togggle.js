import React from 'react';
import './Toggle.less';//懒加载
export default class Togggle extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.onClick = this.onClick.bind(this);
    // }
    onClick(e,msg) {
        console.info("onClick",msg);
        if(msg == "normal"){
            var option;
            e.preventDefault();
        }else if(msg =="cube" ){

        }
        // option = ($(this)).data('ic-option');
        // if (option === 'squares') {
        //   (contributionsBox.removeClass('ic-cubes')).addClass('ic-squares');
        // } else {
        //   (contributionsBox.removeClass('ic-squares')).addClass('ic-cubes');
        // }
        // ($('.ic-toggle-option')).removeClass('active');
        // ($(this)).addClass('active');
        // self.persistSetting("toggleSetting", option);
        // return self.toggleSetting = option;
    }
    // onClick=(msg)=>{
    //     console.log("cjf",msg);
    // }
    render() {
        return (
            <span className="ic-toggle">
                <a href="#" aria-label="normal chart view"
                    data-ic-option="squares"
                    id="normal"
                    // onClick={this.onClick("normal")}
                    onClick={(e)=> this.onClick(e,"normal-btn")}
                    className="ic-toggle-option tooltipped tooltipped-nw squares" />
                <a href="#" aria-label="isometric chart view"
                    data-ic-option="cubes"
                    id="cube"
                    onClick={(e)=> this.onClick(e,"cube")}
                    className="ic-toggle-option tooltipped tooltipped-nw cubes active" />
            </span>
        );
    }
    
}