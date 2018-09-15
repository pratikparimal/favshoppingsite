import React from 'react';
import '../../node_modules/semantic-ui/dist/semantic.css';

class ShoppingSite extends React.Component {

    constructor(){
        super();
        /* this.state={
            vote:this.props.vote
        } */

        this.upVote=this.upVote.bind(this);
        this.downVote=this.downVote.bind(this);
    }

    /*
    upVote(){
        console.log("upvoted");
        this.setState({
            vote:this.state.vote + 1
        })

    }

    downVote(){
        console.log("downvoted");
        this.setState({
            vote:this.state.vote - 1
        })
        
    }
    */
    
    upVote(){
        console.log("upvoted");
        this.props.onCheck(this.props.id, 1)
    }

    downVote(){
        console.log("downvoted");
        this.props.onCheck(this.props.id, 0)
    }

    render() { 
        return ( 
            <div className="item">
                <div className="image">
                    <img src={this.props.imageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        {this.props.vote}
                        <a onClick={this.upVote}>
                            <i className="chevron circle up icon" />
                        </a>
                        <a onClick={this.downVote}>
                            <i className="chevron circle down icon" />
                        </a>
                    </div>
                    <div className="description">
                        <b><a href={this.props.url} target="_blank"> {this.props.title} </a></b>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted By:</span>
                        <i className="user icon"/>{this.props.submit}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ShoppingSite;