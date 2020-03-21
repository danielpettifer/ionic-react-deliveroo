import React from 'react';
import Card from '../Card/Card';

import './HorizontalCardList.css';

class HorizontalCardList extends React.Component {

  render() {
    return (
      <div className="horizontal ion-padding">
        <Card title="Noodles" img="https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/ramen_2-1080x1080.jpg" />
        <Card title="Burgers" img="https://www.thechunkychef.com/wp-content/uploads/2015/09/Dr-Pepper-BBQ-Burgers-8-500x375.jpg" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default HorizontalCardList;
