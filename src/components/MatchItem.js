import React from 'react';
import EditMatch from './EditMatch';

const MatchItem = ({ match, user }) => {
  return(
    <tr>
      <td data-label="date">{match.date}</td>
      <td data-label="place" className="center aligned">{match.place}</td>
      <td data-label="sr-gain" className="center aligned">{match.rp}</td>
      <td data-label="kills" className="center aligned">{match.kills}</td>
      <td data-label="damage" className="center aligned">{match.damage}</td>
      <td className="center aligned">
        <EditMatch
          user={user}
          id={match.id}
          date={match.date}
          place={match.place}
          sr={match.rp}
          kills={match.kills}
          damage={match.damage}
        />
      </td>
    </tr> 
  );
}

export default MatchItem;