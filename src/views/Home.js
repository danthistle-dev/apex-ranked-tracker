import React from 'react';
import Firebase from '../Firebase';
import Stats from '../components/Stats';
import MatchList from '../components/MatchList';
import AddMatch from '../components/AddMatch';

class Home extends React.Component {

  state = { user: null, matches: [] }

  writeUserData(userId, name, sr) {
    Firebase.database().ref('users/' + userId).set({
      username: name,
      sr
    });
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      this.forceUpdate();
      this.setState({ user: user });
      if (this.state.user) {
        var matchRef = Firebase.database().ref('matches/' + this.state.user.uid);
        matchRef.on('value', snapshot => {
          if (snapshot.val() === null) return
          var data = Object.keys(snapshot.val()).map(key => {
            return snapshot.val()[key];
          })
          this.setState({ matches: data })
        });
      }
    });     
  }

  render() {
    const { user, matches } = this.state;
    return(
      <div className="ui grid">
        <div className="four wide column">
          {user != null && matches.length != 0 ? <Stats user={user} matches={matches} writeUserData={this.writeUserData} /> : null}
        </div>
        <div className="twelve wide column">           
          {matches.length != 0 ? <MatchList matches={matches} user={user} /> : null}
          {user != null ? <AddMatch user={user} matches={matches} /> : null}
        </div>
      </div>
    );
  }
}

export default Home;