import React from 'react';
import './Hero.scss';
import { FC } from 'react';

interface Clouds{
    bigCloudImage: string;
    smallCloudsImage: string;
}
const Hero:FC<Clouds> = (props):JSX.Element => {
    return (
        <div className="Hero">
            <div className='cloudsGroup'>
            <img className='clouds' src={props.bigCloudImage} alt="clouds"/>
            <img className='clouds2' src={props.smallCloudsImage} alt="clouds"/>
            </div>
            <div className='cloudsGroup'>
            <img className='clouds' src={props.bigCloudImage} alt="clouds"/>
            <img className='clouds2' src={props.smallCloudsImage} alt="clouds"/>
            </div>
            <div className='cloudsGroup'>
            <img className='clouds' src={props.bigCloudImage} alt="clouds"/>
            <img className='clouds2' src={props.smallCloudsImage} alt="clouds"/>
            </div>
            <div className='cloudsGroup'>
            <img className='clouds' src={props.bigCloudImage} alt="clouds"/>
            <img className='clouds2' src={props.smallCloudsImage} alt="clouds"/>
            </div>
            <div className='cloudsGroup'>
            <img className='clouds' src={props.bigCloudImage} alt="clouds"/>
            <img className='clouds2' src={props.smallCloudsImage} alt="clouds"/>
            </div>
        </div>
    )
}

export default Hero