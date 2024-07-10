import React, { memo, useEffect, useState } from 'react';

type Props = {
   counter : number
};

const Component = memo(({counter}: Props) => {
   useEffect(() => {
      console.log('Component has been rendered!');
   })

   return <h1>{counter}</h1>
})

type DeepProps = {
   counter: {
      counter: number;
   }
}

const DeepComponent = memo((props: DeepProps) => {
   useEffect(() => {
      console.log('DeeperComponent has been rendered!')
   })

   return <h1>{props.counter.counter}</h1>
})

const C1_3 = () => {
   return(
      <>
         <Component counter={100}></Component>
         <DeepComponent counter={
            {counter: 100}
         }></DeepComponent>
      </>
   )
}

export default C1_3;


// reactmemo를 사용하는 이유는 component가 전달받은 props가 수정되지 않았을 때도
// rendering이 발생하는 데 이는 rendering 전이 때문이다. 이를 막기 위해 component가
// 전달받은 props가 수정되지 않았을 때에는 re-rendering을 수행하지 않는다
// reactmemo는 shallow Equality만 검사하며 객체가 deep한 경우에 대해서
// memo는 정상적으로 작동하지 않으며 위 예시를 통해 props가 수정되지 않았을 때에도
// 렌더링되는 것을 확인하여 최적화시 props의 형태가 중요하다는 것을 확인함