import React from 'react';

type Props = Record<string, never>
type State = {
   counter: 0
}

class SampleComponent extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props);
      this.state = {
         counter: 0
      }
   }

   render() {
      return<>...</>
   }
}

export default SampleComponent;