import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

// type OtherProps = {
//     moreProps: string
// }


interface Props extends RouteComponentProps{
    moreProps: string
}


const Page3: React.FC<Props>  = (props) => {
    return (
        <div>
           Page3 {props.moreProps}
           <button onClick={() => props.history.push('/page2')}>GO TO PAGE 2</button>
            <button onClick={() => props.history.push('/page1')}>GO TO PAGE 1</button>
            <button onClick={() => props.history.push('/page4')}>GO TO PAGE 4</button>
        </div>
    )
}

export default Page3
