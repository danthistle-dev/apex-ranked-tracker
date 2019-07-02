import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Firebase from '../Firebase';

class EditMatch extends React.Component {

  state = { 
    open: false,
    place: this.props.place,
    rp: this.props.rp,
    kills: this.props.kills,
    damage: this.props.damage
  }

  close = () => this.setState({ open: false });
  open = () => this.setState({ open: true });

  handleSubmit = e => {
    e.preventDefault();
    this.close();
    this.editMatchData(this.props.id, this.state.date, this.state.place, this.state.rp, this.state.kills, this.state.damage);
  }

  deleteMatch = () => {
    this.close();
    Firebase.database().ref(`matches/${this.props.user.uid}/${this.props.id}`).remove();
    this.forceUpdate();
  }

  editMatchData(id, place, rp, kills, damage) {
    Firebase.database().ref(`matches/${this.props.user.uid}/${id}`).set({
      id,
      place,
      rp,
      kills,
      damage
    })
  }

  render() {
    return(
      <div>
      <Modal
          dimmer={"inverted"}
          open={this.state.open}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          onClose={this.close}
          size={"mini"}
        >
          <Modal.Header>Edit Match</Modal.Header>
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
            <Button color='red' onClick={this.deleteMatch}>
              Delete
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

        <button className="ui fluid secondary button" onClick={this.open}>Edit</button>
      </div>
    );
  }
}

export default EditMatch;