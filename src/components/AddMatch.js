import React from 'react';
import Firebase from '../Firebase';
import { Button, Modal } from 'semantic-ui-react';

class AddMatch extends React.Component {

  state = { 
    open: false,
    place: '',
    kills: '',
    damage: '' 
  }

  close = () => this.setState({ open: false });
  open = () => this.setState({ open: true });

  writeMatchData(id, date, place, rp, kills, damage) {
    Firebase.database().ref(`matches/${this.props.user.uid}/${id}`).set({
      id,
      date,
      place,
      rp,
      kills,
      damage
    })
  }

  getCost() {
    var rp;
    this.props.matches.length == 0 ? rp = 0 : rp = (this.props.matches
      .map(item => parseInt(item.rp))
      .reduce((prev, next) => prev + next));

    switch (true) {
      case rp >= 0 && rp <= 119:
        return 0;
      case rp >= 120 && rp <= 279:
        return 1;
      case rp >= 280 && rp <= 479:
        return 2;
      case rp >= 480 && rp <= 719:
        return 3;
      case rp >= 720 && rp <= 999:
        return 4;
      case rp >= 1000:
        return 5;
      default:
        break;
    }
  }

  getRP(place, kills) {
    var rp = 0;
    kills <= 5 ? rp += parseInt(kills) : rp += 5;
    switch(true) {
      case place > 10:
        break;
      case place <= 10 && place > 5:
        rp += 2;
        break;
      case place <= 5 && place > 3:
        rp += 4;
        break;
      case place <= 3 && place > 1:
        rp += 7;
        break;
      case place == 1:
        rp += 12;
        break;
      default:
        break;
    }
    rp >= this.getCost() ? rp -= this.getCost() : rp -= 0;
    return rp.toString();
  }

  idGenerator() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getDate() {
    var date = new Date();
    return (`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.close();
    this.writeMatchData(this.idGenerator(), this.getDate(), this.state.place, this.getRP(this.state.place, this.state.kills), this.state.kills, this.state.damage);
    this.setState({ place: '', kills: '', damage: '' });
  }

  render() {
    return (
      <div>
        <Modal
          dimmer={"inverted"}
          open={this.state.open}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          onClose={this.close}
          size={"mini"}
        >
          <Modal.Header>New Match</Modal.Header>
          <Modal.Content>
            <form className="ui form">
              <div className="field">
                <label>
                  Where did you place?
                  <input 
                    type="number"
                    value={this.state.place}
                    onChange={e => this.setState({ place: e.target.value })}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  How many kills did you get?
                  <input 
                    type="number"
                    value={this.state.kills}
                    onChange={e => this.setState({ kills: e.target.value })}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  How much damage did you do?
                  <input 
                    type="number"
                    value={this.state.damage}
                    onChange={e => this.setState({ damage: e.target.value })}
                  />
                </label>
              </div>
            </form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Cancel
            </Button>
            <Button 
              positive
              icon='checkmark'
              labelPosition='right'
              content='Save'
              onClick={this.handleSubmit}
            />
          </Modal.Actions>
        </Modal>

        <div className="ui inverted segment right aligned">
          <button className="ui button" onClick={this.open}>New Match</button>
        </div>
      </div>
    );
  }
}

export default AddMatch;