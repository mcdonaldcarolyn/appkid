import React from 'react';

export class ActivityCreatePage extends Component{
  state = {
    activity: null
  };

  addActivity = activity => {
    this.props.AddActivity(activity)
    this.setState({ activity });
    
  }
};