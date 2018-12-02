import React from 'react'
import {Text,CodePane,Image} from 'spectacle'

import './Card.css'


const Card = ({code,title,img}) => {
    return (
        <div className="Card">
            <Text textSize={25} >{title}</Text>
                { code && <CodePane textSize={15} lang="javascript" source={code.trim()}/>}
                {img && <Image src={img} />}
        </div>
    )
}

Card.defaultProps = {
    code: '',
    title: ''
}

export default Card