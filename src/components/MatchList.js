import React from 'react';
import MatchItem from './MatchItem';

const MatchList = ({ matches, user }) => {
  matches.sort((a, b) => new Date(b.date) - new Date(a.date));
  const renderedList = matches.map(match => {
    return <MatchItem match={match} key={match.id} user={user} />
  })

  return(
    <div className="ui inverted segment" style={{ maxHeight: '70vh', overflowY: 'scroll' }}>
      <table className="ui inverted celled table" >
        <thead>
          <tr>
            <th>Date</th>
            <th className="center aligned">Place</th>
            <th className="center aligned">RP</th>
            <th className="center aligned">Kills</th>
            <th className="center aligned">Damage</th>
            <th className="center aligned"></th>
          </tr>
        </thead>
        <tbody>
          {renderedList}
        </tbody>
      </table>
    </div>
  );
}

export default MatchList;