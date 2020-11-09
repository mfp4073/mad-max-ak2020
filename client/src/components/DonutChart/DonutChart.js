
import React, { useEffect, useState } from 'react';
import { Donut } from 'britecharts-react';


const DonutChart = ({users}) => {
  const [user, setUser] = useState("");
  const [friendCount, setFriendCount] = useState();

  useEffect(() => {
  }, [])

  const handleMouseOver = (abe) => {
    if (abe) {
      let filtered = users.filter(user => user.name === abe.data.name)
      setUser(filtered[0]);
      setFriendCount(filtered[0].friends_with.length);
    } else {
      return
    }
  }

  return (

    <div className="donut">
      {friendCount &&
        <h2>
          <span>{`${user.name}'s friend count is ${friendCount}`} </span>
        </h2>
      }
      <Donut
        data={users}
        externalRadius={100}
        internalRadius={47}
        highlightSliceById={1}
        customMouseOver={handleMouseOver.bind(this)}
        />
    </div>
  )
}

export default DonutChart;
