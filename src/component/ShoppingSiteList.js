import React from 'react';
import ShoppingSite from './ShoppingSite';
import arrayOfSites from '../list';

class ShoppingSiteList extends React.Component {
    constructor(){
        super();
        this.state = { 
            sites:arrayOfSites
        }
    }
    
    render() { 

        const sites = arrayOfSites;
        const allSites = arrayOfSites.map((site)=>{
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
