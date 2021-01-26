import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps<{ name: string}>{
}



const Page2: React.FC<Props> = (props) => {
    return (
        <div>
           Page 2 
           <button onClick={() => props.history.push('/page1')}>GO TO PAGE 1</button>
            <button onClick={() => props.history.push('/page3')}>GO TO PAGE 3</button>
            <button onClick={() => props.history.push('/page4')}>GO TO PAGE 4</button>

        </div>
    )
}

export default Page2
