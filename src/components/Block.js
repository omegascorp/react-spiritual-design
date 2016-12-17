import React from 'react';
import AbstractComponent from './AbstractComponent';

export default class Block extends AbstractComponent {
  getModifiers() {
    return [
      'layout', 'wrap', 'padding', 'margin', 'hide',
      'grow', 'shrink', 'order', 'grid', 'align', 'justify', 'center',
      'scroll', 'spaceHorizontal', 'spaceVertical'
    ];
  }

  render() {
    return (
      <div className={this.blockName('block', this.getModifiers())}>
        {this.props.children}
      </div>
    )
  }
}