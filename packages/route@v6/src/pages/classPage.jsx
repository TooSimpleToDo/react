import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

class classPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.navigate = useNavigate();
  }

  componentDidMount() {
    console.log(`componentDidMount====>`, this.props);
  }

  render() {
    return (
      <div className="classPage">
        classPage
        <p
          onClick={() => {
            console.log('在class组件中使用，需要通过高阶函数式组件的props传递');
            // this.navigate('/funcPage');
          }}
        >
          class组件中跳转
        </p>
      </div>
    );
  }
}

export default classPage;
