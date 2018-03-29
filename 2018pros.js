import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import BackButtons from '../../components/backButtons/backButtons.js';
import ProspectingImage from '../../components/prospectingImage/prospectingImage.js';
import imgArr from '../../data/prospectingData.js';

class Prospecting extends Component {
  state = {
    imageCount: 0,
    image: "",
    city: "",
    competitors: [],
    bestProspecting: "",
    prospects: []
  }

  componentDidMount() {
    const imageCount = this.state.imageCount;
    const image = imgArr[imageCount].image;
    const city = imgArr[imageCount].city;
    const competitors = imgArr[imageCount].competitors;
    const bestProspecting = imgArr[imageCount].bestProspecting;
    const prospects = imgArr[imageCount].prospects;
    this.setState({image, city,competitors, bestProspecting, prospects}, console.log(this.state.image));
  }

  reverseImageHandler = () => {
    let limit = 0;
    let imageCount = this.state.imageCount;
    imageCount --;
    if(imageCount<limit){
      imageCount = imgArr.length -1;
    }
    this.setState({imageCount},()=>{
      const image = imgArr[this.state.imageCount].image;
      const city = imgArr[imageCount].city;
      const competitors = imgArr[imageCount].competitors;
      const bestProspecting = imgArr[imageCount].bestProspecting;
      const prospects = imgArr[imageCount].prospects;
      this.setState({image, city, competitors, bestProspecting, prospects})
    });
  }

  forwardImageHandler = () => {
    let limit = imgArr.length - 1;
    let imageCount = this.state.imageCount;
    imageCount ++;
    if(imageCount>limit){
      imageCount = 0;
    }
    this.setState({imageCount}, ()=>{
      const image = imgArr[this.state.imageCount].image;
      const city = imgArr[imageCount].city;
      const competitors = imgArr[imageCount].competitors;
      const bestProspecting = imgArr[imageCount].bestProspecting;
      const prospects = imgArr[imageCount].prospects;
      this.setState({image, city,competitors, bestProspecting, prospects})
    });
  }

  render(){
    const mainStyle = {
      paddingTop: '5vh',
      backgroundColor: '#DDD',
      minHeight: '85vh',
      paddingBottom: '2vh'
    }
    return(
      <div>
        <PageHeader headerText="2018 Prospecting"/>
        <main>
          <div style={mainStyle} className="row justify-content-center">
              <ProspectingImage image={this.state.image}
              forward={this.forwardImageHandler}
              reverse={this.reverseImageHandler}
              city={this.state.city} competitors={this.state.competitors}
              bestProspecting={this.state.bestProspecting}
              prospects={this.state.prospects}/>
              <BackButtons back="/" />
          </div>
        </main>
      </div>
    )
  }
}

export default Prospecting;
