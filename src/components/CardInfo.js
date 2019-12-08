import React from 'react';
import CardInfo from './components/CardInfo';
import {useSpring, animated} from 'react-spring';


function CardInfo(props); {

const style = useSpring({opacity: 1, from: {opacity: 0}});

return (
    <animated.div className="" style={style}>
<p clasName="g-card-title">{props.title} </p>
<p clasName="g-card-sub-title">{props.subTitle} </p>
<a href={props.link} target="_blank" rel="noopener noreferrer"> View </a>
</animated.div>

);

}

export default CardInfo;