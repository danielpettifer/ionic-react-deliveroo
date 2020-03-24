import React from 'react';

import styled from 'styled-components';

class HorizontalCardList extends React.Component {

  render() {
    return (
      <HorizontalList className="horizontal">
        {this.props.children}
      </HorizontalList>
    )
  }
}

const HorizontalList = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0;
    padding-right: 32px !important;

    &::-webkit-scrollbar {
  display: none;
}
`

export default HorizontalCardList;
