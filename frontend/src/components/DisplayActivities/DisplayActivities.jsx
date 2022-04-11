import React from 'react';


const DisplayActivities = (props) => {
    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>Line</th>
            <th>Breakfast</th>
            <th>Morning Activity</th>
            <th>Lunch</th>
            <th>Afternoon Activity</th>
            <th>Dinner</th>
            <th>Nighttime Activity</th>
          </tr>
        </thead>
          
        <tbody>
          {props.parentEntries.map((entry, index) => { 
          return (
              
            <tr key={index}>
                <td>{index + 1 }</td>
                <td>{entry.breakfast}</td>
                {/* <td><button onClick={() => props.selectGame(entry)}>{entry.name}</button></td> */}
                <td>{entry.morning_activity}</td>
                <td>{entry.lunch}</td>
                <td>{entry.afternoon_activity}</td>
                <td>{entry.dinner}</td>
                <td>{entry.night_time_activity}</td>
            </tr>
            );
          })}
          

          
        </tbody>
          
      </table>
     );
}
 
export default DisplayActivities;