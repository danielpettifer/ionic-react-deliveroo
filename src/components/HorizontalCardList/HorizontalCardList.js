import React from 'react';

import styled from 'styled-components';

const HorizontalList = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    padding: 0;
    padding-right: 32px !important;
    max-height: 128px;
`
class HorizontalCardList extends React.Component {

  render() {
    return (
      <HorizontalList className="horizontal">
        {this.props.children}
      </HorizontalList>
    )
  }
}

export default HorizontalCardList;
