import {ThemeContext} from './theme-context';
import React from 'react';

class ThemedButton extends React.Component {
 render() {
   console.log(ThemeContext.Consumer())
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      >Button Compo</button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;