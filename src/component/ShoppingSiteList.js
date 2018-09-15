import React from 'react';
import ShoppingSite from './ShoppingSite';

import arrayOfSites from '../list';



class ShoppingSiteList extends React.Component {


    
    constructor(){
        super();
        this.state = { 
            sites:arrayOfSites
        }
        this.voteClicked=this.voteClicked.bind(this);
    }

    voteClicked(id, check){
        const updatedSites = this.state.sites.map((p)=>{
            if(p.id === id && check === 1)
            {
                console.log("Upvoted for id :"+ id)
                return Object.assign({},p,{vote:p.vote+1})
            }
            else if(p.id === id && check === 0)
            {
                console.log("Downvoted for id :"+ id)
                return Object.assign({},p,{vote:p.vote-1})
            }
            else
            {
                return p
            }
        })
        this.setState({sites:updatedSites})
    }

    
    render() { 

        const sortedSite = this.state.sites.sort((a,b)=>(b.vote-a.vote))
        const allSites = sortedSite.map((site)=>{
            return(
                <ShoppingSite
                    key = {site.id}
                    id = {site.id}
                    title={site.title}
                    description={site.description}
                    url={site.url}
                    imageUrl={site.imageUrl}
                    submit={site.submit}
                    vote={site.vote}
                    onCheck={this.voteClicked}
                ></ShoppingSite>
            );
        })
        return ( 
            <div className="main ui text container">
                <div className="ui dividing center header">
                    <div className="ui unstackable items">
                        {allSites}
                    </div>
                </div>
            </div>
         );
    }


}
export default ShoppingSiteList;
