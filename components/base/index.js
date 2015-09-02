import React from 'react';

class Base extends React.Component {
  
  shouldComponentUpdate (nextProps) {

      if(nextProps.cursor.deref() !== this.props.cursor.deref()) {

        console.log('*** Render ' + this.displayName + ' ***');
        return true
      }
      return false;
   }
}

export default Base;