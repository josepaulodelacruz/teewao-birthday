import React from "react";
import Button from 'components/CustomButtons/Button.jsx';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Confettis from 'react-dom-confetti';
import Confetti2 from 'react-confetti'
//styles
import styles from './styles'
import './Confetti.css'
import GrandPic from './grandpic.jpg'
import Teewao from './teewaoSmile.jpg'
import Starcity from './startcity.jpg'
import Ring from './ring.jpg'
import teewao from './teewao.jpg'

const config = {
  angle: "129",
  spread: "360",
  startVelocity: "73",
  elementCount: "200",
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "28px",
  height: "28px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};





class Confetti extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      playSong: false,
      slides: 0,
      confirmationText: '',
      show: true,
      pop: true,
      explode: false,
      fallConfetti: false
    }
  }

  _renderStepsToForever = () => {
    const { slides, show } = this.state
    if(slides === 0){
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{textAlign: 'center'}} className='fontStyling'>Before you proceed to this. <br/>
            Please use any desktop browser. <br/>
            For Teewao Follow whatever the intructions tells you.<br/>
            I hope you like it. I just made this last night hehe</h1>
          </div>
      )
    }else if(slides === 1){
      return (
          <div style={{display: 'grid',justifyContent: 'center', alignItems: 'center'}}>
            <Card style={{width: "20rem"}}>
              <CardHeader color="info">Step 1</CardHeader>
              <CardBody className='fontStyling'>
                <h4>Before you start.</h4>
                <p>
                  Let me know if you're starting reading this
                </p>
                <Button color="primary" onClick={this.handleNextSlide}>PROCEED</Button>
              </CardBody>
            </Card>
          </div>
      )
    }else if(slides === 2){
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{textAlign: 'center'}} className='fontStyling'>PM is the key<br/>
              before you proceed ask me what is the confirmation code. <br/>
              </h1>
            <div style={{justifySelf: 'center'}}>
              <input type='text' onChange={e => this.setState({confirmationText: e.target.value.toLowerCase()})}/>
                  { this.state.confirmationText === 'iloveyousomuch' ? <Button color="primary" onClick={this.handleNextSlide}>PROCEED</Button> : null }
            </div>
          </div>
      )
    }else if(slides === 3){
      setTimeout(() => {
        this.setState({playSong: true})
      }, 4000)
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
          <Card style={{width: "20rem"}}>
            <CardHeader color="info">Step 2</CardHeader>
            <CardBody className='fontStyling'>
              <h4>Para feel na feel mong birthday mo.</h4>
              <p> Sing Happy Birthday to you're self </p>
              { this.state.playSong ? <Button color="primary" onClick={this.handleNextSlide}>PROCEED</Button> : null }
            </CardBody>
          </Card>
          </div>
      )
    }else if(slides === 4){
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
          <Card style={{width: "20rem"}}>
            <img
                style={{height: "100%", width: "100%", display: 'block'}}
                src={GrandPic}
                alt="graduation pictue"
            />
            <CardBody>
              <h4 className='fontStyling'>Our Graduation photoshoot</h4>
              <p className='fontStyling'>While reading this bebe play ka ng background Song</p>
              <Button color="primary" onClick={this.handleNextSlide}>PROCEED</Button>
            </CardBody>
          </Card>
          </div>
      )
    }else if(slides === 5){
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
          <Card>
            <CardBody className='fontStyling'>
              <h1 className='fontStyling'>To my Loving Teewao</h1>
              <span className='fontStyling' style={{fontSize: 24}}>
             For this special day, of this very special person, I can only say one thing. I truly hope that every single one of your dreams come true because you deserve it.<br/>
             Even if I had only spent a second with you, it would have been enough to understand why you are one the most special i've met in my entire existence. Im truly grateful to where we are now.<br/>
             You are my reason, my motivation, Wala na akong mahihiling pa kundi makasama lang ang isang tulad mo. Habang mas tumatagal tayo mas lalo kitang minamahal
                thank you for giving me the chance Loving you and I promise you hanggang Love mo ako.. mas mahahalin kita ng higit pa hon
              </span>
              <h3 className='fontStyling'>I will do my the very best I could to make you laugh, even I may look stupid to others</h3>
              <h3 className='fontStyling'>I’d like to remind you, that on this special day that is your birthday, there is much more than just feeling old. It is the day where you remind not only others but also yourself, what a special person you are.</h3>
              <h3 className='fontStyling'>Ever since I met you, you have shown me how it is to care endlessly for someone, no matter what happens. You being in my life truly is a gift.</h3>
            </CardBody>
            <Button color="primary" onClick={this.handleNextSlide}>PROCEED</Button>
          </Card>
          </div>
      )
    }else if(slides === 6){
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
          <Card style={{width: "20rem" }}>
            <img
                style={{height: "100%", width: "100%", display: 'block'}}
                src={Teewao}
                alt="graduation pictue"
            />
            <CardBody>
              <h4 className='fontStyling'>Smile</h4>
              <p className='fontStyling'>Everytime I crack up jokes your smile is my biggest reward. <br/>
              wapakels na hon.. mag mukha ng weirdo sa ibang tao basta alam ko napapasaya kita hon</p>
              <Button color="primary" onClick={this.handleNextSlide}>NEXT</Button>
            </CardBody>
          </Card>
          </div>
      )
    }else if(slides === 7){
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
          <Card style={{width: "20rem"}}>
            <img
                style={{height: "100%", width: "100%", display: 'block'}}
                src={Starcity}
                alt="graduation pictue"
            />
            <CardBody>
              <h4 className='fontStyling'>Teewao and Piipao Adventures</h4>
              <p className='fontStyling'>Let's have some more gala together bebe<br/>
                I don't care where as long na kasama kita hon. kahit san tayo</p>
              <Button color="primary" onClick={this.handleNextSlide}>NEXT</Button>
            </CardBody>
          </Card>
          </div>
      )
    }else if(slides === 8){
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
          <Card style={{width: "20rem"}}>
            <CardHeader color="info">Colossians 3:14</CardHeader>
            <CardBody className='fontStyling'>
              <h4 className='fontStyling' style={{fontSize: 22}}>“And over all these virtues put on love, which binds them all together in perfect unity."</h4>
              <Button color="primary" onClick={this.handleNextSlide}>PROCEED</Button>
            </CardBody>
          </Card>
          </div>
      )
    }else if(slides === 9){
      return (
          <div className='wrapper'>
            <h1 className='fontStyling'>Before you proceed yes or no na lng nman na susunod nito</h1>
            <div>
              <Button color="primary" onClick={this.handleNextSlide}>PROCEED</Button>
            </div>
          </div>
      )
    }else if(slides === 10){
      setTimeout(() => {
        this.setState({show: false})
      }, 2000)
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
          <Card style={{width: "20rem"}}>
            <img
                style={{height: "100%", width: "100%", display: 'block'}}
                src={Ring}
                alt="ring"
            />
            <CardBody>
              <h4 className='fontStyling'>Will You Marry me</h4>
              <p className='fontStyling'>Take a moment and think it carefully</p>
              { this.state.show ?
                  <div>
                    <Button color="primary" onClick={this.handleNextSlide} disabled>Yes</Button>
                    <Button color="primary" >No</Button>
                  </div>
                   :
                <Button color="primary" onClick={this.handleNextSlide} >Yes</Button>
              }
            </CardBody>
          </Card>
          </div>
      )
    }else if( slides === 11) {
      return (
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}} >
            <h1 className='fontStyling' >WALA NG BAWIAN YAN HAHAHAH!</h1>
            <Button color="primary" onClick={this.handleTriggerPopup} >{this.state.pop ? 'Yes' : 'Loading....'}</Button>
          </div>
      )
    }else {
      setTimeout(() => {
        this.setState({fallConfetti: true})
      }, 1000)
      return(
          <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
            {this.state.fallConfetti && <Confetti2 width={window.innerWidth} height={window.innerHeight} style={{alignSelf: 'center'}}/> }
            <h1 className='fontStyling' style={{textAlign: 'center'}}>Happy Birtday to myyy Teewao hon bebe biko</h1>
            <img
                style={{height: 200, width: 200, display: 'block', resize: 'cover', justifySelf: 'center'}}
                src={teewao}
                alt="ring"
            />
            <h1 className='fontStyling' style={{textAlign: 'center'}}>I Love you so much! God bless</h1>
          </div>
      )
    }
  }

  handleTriggerPopup = () => {
    this.setState({
      pop: false
    })

    setTimeout(() => {
      this.setState((state) => ({
        slides: state.slides + 1,
        explode: true
      }))
    }, 1500)

  }


  handleNextSlide = () => {
    this.setState((state, props) => ({slides: state.slides + 1}), () => console.log(this.state.slides))
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: true})
    }, 2000)
  }

  render(){
    return(
        <div className='container'>
        <div className='confetti-wrapper'>
          {this._renderStepsToForever()}
        </div>
          <div style={{textAlign: 'center'}}>
            <Confettis
                className="loading-button__confetti"
                active={ this.state.explode }
                config={ config }
            />
            {
                this.state.isLoading && this.state.slides === 0 ? <Button color="primary" onClick={this.handleNextSlide}>Start</Button> : null
            }

          </div>
        </div>
    )
  }
}

export default Confetti



