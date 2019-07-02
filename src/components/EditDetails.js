import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

class EditDetails extends React.Component {

  state = {
    open: false,
    userName: localStorage.getItem('username')
  }

  close = () => this.setState({ open: false });
  open = () => this.setState({ open: true });

  handleSubmit = e => {
    e.preventDefault();
    this.close();
    this.props.writeUserData(this.props.user.uid, this.state.userName, this.state.sr);
    localStorage.setItem('username', this.state.userName);
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
          <Modal.Header>Edit Details</Modal.Header>
          <Modal.Content>
            <form className="ui form">
              <div className="field">
                <label>
                  Player Name
                  <input 
                    type="text"
                    value={this.state.userName}
                    onChange={e => this.setState({ userName: e.target.value })}
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
        <button className="fluid ui button" onClick={this.open}>Edit Details</button>
      </div>
    );
  }
}

export default EditDetails;