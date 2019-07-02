import React from 'react';
import Firebase from '../Firebase';
import EditDetails from './EditDetails';

class Stats extends React.Component {

  state = { stats: [], badge: null }

  componentDidMount() {
    var statRef = Firebase.database().ref('users/' + this.props.user.uid);
    statRef.on('value', snapshot => {
      if (!snapshot.val()) {
        this.props.writeUserData(this.props.user.uid, 'Edit details to add username.');
      }
      this.setState({ stats: snapshot.val() })
    }); 
  }

  getRank() {
    const rp = (this.props.matches
      .map(item => parseInt(item.rp))
      .reduce((prev, next) => prev + next));

    switch (true) {
      case rp >= 0 && rp <= 119:
        return 'Bronze';
      case rp >= 120 && rp <= 279:
        return 'Silver';
      case rp >= 280 && rp <= 479:
        return 'Gold';
      case rp >= 480 && rp <= 719:
        return 'Platinum';
      case rp >= 720 && rp <= 999:
        return 'Diamond';
      case rp >= 1000:
        return 'Apex Predator';
      default:
        break;
    }
  }

  getBadge() {
    const rp = (this.props.matches
      .map(item => parseInt(item.rp))
      .reduce((prev, next) => prev + next));

    switch (true) {
      case rp >= 0 && rp <= 119:
        return 'bronze';
      case rp >= 120 && rp <= 279:
        return 'silver'
      case rp >= 280 && rp <= 479:
        return 'gold';
      case rp >= 480 && rp <= 719:
        return 'plat';
      case rp >= 720 && rp <= 999:
        return 'diamond';
      case rp >= 1000:
        return 'apex_predator';
      default:
        break;
    }
  }
  
  render() {
    const { stats } = this.state;
    const { matches } = this.props;
    if(!this.props.user) return <div>Loading...</div>
    return(
      <div>
        <div className="ui inverted segment center aligned">
          <img src={`/ranked_badges/${this.getBadge()}.JPG`} height="150" alt={this.getBadge()} />
          <h2 style={{ marginTop: '0' }}>{this.getRank()}</h2>
        </div>
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            <div className="item">
              <div className="content">
                <h2 className="header">Series stats</h2>
              </div>
            </div>
            {/*<div className="item">
              <div className="content">
                <div className="header">Username</div>
                {stats.username}
              </div>
            </div>*/}
            <div className="item">
              <div className="content">
                <div className="header">RP</div>
                {(matches.map(item => parseInt(item.rp)).reduce((prev, next) => prev + next))}
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="header">Average Placement</div>
                {((matches.map(item => parseInt(item.place)).reduce((a, b) => a + b))/matches.length).toFixed(2)}
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="header">Total Kills</div>
                {matches.map(item => parseInt(item.kills)).reduce((prev, next) => prev + next)}
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="header">Average Kills</div>
                {((matches.map(item => parseInt(item.kills)).reduce((a, b) => a + b))/matches.length).toFixed(2)}
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="header">Total Damage</div>
                {matches.map(item => parseInt(item.damage)).reduce((prev, next) => prev + next)}
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="header">Average Damage</div>
                {((matches.map(item => parseInt(item.damage)).reduce((a, b) => a + b))/matches.length).toFixed(2)}
              </div>
            </div>
            <div className="item">
              <div className="content">
                <div className="header">Matches Played</div>
                {matches.length}
              </div>
            </div>
          </div>
          {/*<EditDetails user={this.props.user} stats={stats} writeUserData={this.props.writeUserData} />*/}
        </div>
      </div>
    );
  }
}

export default Stats;