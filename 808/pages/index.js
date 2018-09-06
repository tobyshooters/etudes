import React, {Component} from 'react';
import s from '../static/style';

const types = [
  { name: "default", color: "#E6E8BF", file: "" },
  { name: "bass",    color: "#DDDA00", file: "/static/sounds/bass.mp3"  },
  { name: "snare",   color: "#F27900", file: "/static/sounds/snare.mp3" },
  { name: "hat",     color: "#DD1D00", file: "/static/sounds/hat.mp3"   },
]

class Pad extends Component {
  state = { type: 0 }

  cycleType = () => this.setState({
    type: (this.state.type + 1) % types.length,
  })

  playAudio = () => {
    const path = types[this.state.type].file;
    if (path) new Audio(path).play();
  }

  handleClick = async () => {
    await this.cycleType();
    this.playAudio();
  }

  render() {
    const {active} = this.props;
    if (active) this.playAudio();

    return (
      <div
        style={{
          ...s.padStyle,
          backgroundColor: types[this.state.type].color,
          boxShadow: (active ? null : '3px 3px 3px #9E9E9E'),
        }}
        onClick={this.handleClick}
      />
    )
  }
};

class Canvas extends Component {
  timeout = null
  state = {
    activeIndex: -1,
  }

  cycleActiveIndex = () => {
    this.timeout = setTimeout(() => this.setState(
      { activeIndex: (this.state.activeIndex + 1) % 16 }
    ), this.props.interval);
  }

  componentWillReceiveProps = (newProps) => {
    clearTimeout(this.timeout);
  }

  render() {
    const { playing } = this.props;
    const { activeIndex } = this.state;
    if (playing) this.cycleActiveIndex();
    return (
      <div style={{ ...s.canvasStyle }}>
        {[...Array(16)].map((e, i) =>
          <Pad key={i} active={playing && activeIndex === i} />
        )}
      </div>
    )
  }
};

const StartStopButton = ({onClick, label}) => (
  <div style={{ ...s.startStopButtonStyle }} onClick={onClick} >
    {label}
  </div>
);

class BpmInput extends Component {
  render() {
    return (
      <div style={{
        ...s.flexDefault,
        flexDirection: 'column',
      }}>
        <span>BPM</span>
        <input
          style={{ ...s.inputStyle }}
          type='number'
          value={this.props.bpm}
          onChange={(e) => this.props.handleBpm(e)}
          pattern="^\d*$"
        />
      </div>
    );
  }
};

class Interface extends Component {
  state = {
    playing: false,
    bpm: 120,
  }

  handleBpm(e) {
    const bpm = Math.min(Math.max(e.target.value, 1), 150);
    this.setState({bpm});
  }

  render() {
    const {bpm, playing} = this.state;
    return (
      <div style={{ ...s.interfaceStyle }}>
        <style global jsx>{`
          @font-face {
            font-family: 'PhatBoy';
            src: url(/static/phatboy.otf);
          }
        `}</style>

        <p style={{ ...s.titleStyle }}>Roland TR 808</p>
        <Canvas 
          playing={playing}
          interval={1000 * (60 / this.state.bpm / 4)}
        />
        <StartStopButton
          onClick={() => this.setState({playing: !playing})}
          label="Start/Stop"
        />
        <div style={{
          marginTop: '-42px',
          marginLeft: '580px',
        }}>
          <BpmInput
            bpm={bpm}
            handleBpm={this.handleBpm.bind(this)}
          />
        </div>
        <a style={{...s.linkStyle}} href="https://csciutto.github.io">
          by csciutto
        </a>
      </div>
    );
  }
};

export default () => <Interface/>;
