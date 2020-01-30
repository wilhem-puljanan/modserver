import React, {Component} from 'react';
import Title from './title';
const tweet = require('./tweet');
import { FacebookShareButton,FacebookIcon } from "react-share";
import {Helmet} from "react-helmet";

class CardRight extends Component {

  render() {
    const shareUrl = "/";
    return (

      <div className="col-right">
        <div className="app-meta">
        <Helmet>
                    <title>{this.props.app.publisher}</title>
                    <meta property="og:url" content={shareUrl} />
                    <meta property="og:title" content= {this.props.app.publisher} />
                    <meta property="og:desciption" content={this.props.app.desc} />
                    <meta property="og:image" content="https://media.modshow.io/public/51594eb0-10af-11ea-9975-c9479ade1dc5/Malice_Modshow_Show_Cover_Tiles_Landscape_682_x_384.jpg" />
                </Helmet>
           <Title name={this.props.name} publisher={this.props.app.publisher}/>
           <span className="app-lic">{this.props.app.price}</span>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
        <hr />
        <div className="app-link">
          <a className="btn" href={this.props.app.link} target="_blank">Get App</a>
          <a href="#/" className="btn btn-twitter" title="Share on Twitter" rel="nofollow"
             onClick={((e) =>{tweet(this.props.app.tweet); e.preventDefault();})}>
            <i className="icon icon-inline icon-twitter-light "></i>
            Tweet
          </a>
          <FacebookShareButton children="Share on Facebook" url={shareUrl} >
            sds d<FacebookIcon size={32} round={true} className="fbShare" />
          </FacebookShareButton>
        </div>
      </div>
    );
  }

}


export default CardRight;
