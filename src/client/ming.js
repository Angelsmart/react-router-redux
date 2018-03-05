import React,{Component} from 'react';
import '../style/home.css'

class Ming extends Component{
	constructor(props){
        super(props);
    };
	render(){
		console.log(this.props.location.state.data);
		return (
            <div  className="home">
               2222
            </div>
		)
	}
}

export default Ming;