import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

export default class AboutPage extends React.Component {
    render() {
        return(
            <Segment>
                <Header as="h1" style={{ margin: '15 auto' }}>
                    About <Header as="h1" style={{ display: 'inline' }} color="blue">Termi</Header>
                </Header>
                <div style={{ textAlign: 'left' }}>
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis vehicula elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras mi mi, blandit nec ligula a, luctus ultrices lorem. Nunc vel malesuada augue. Sed eu elementum ligula. Mauris consequat lacinia mi, sed gravida nulla sollicitudin nec. Cras consectetur, justo at maximus laoreet, mauris nibh suscipit odio, ut imperdiet sem nisi ac ante.
                </p><p>
Duis vitae massa non turpis consectetur mattis. Mauris eget dictum nunc. Mauris eget augue in enim laoreet pretium at in velit. Vivamus tristique velit a pharetra tincidunt. Nam gravida lacus eget egestas aliquet. Duis ultricies velit non lobortis efficitur. Pellentesque egestas eleifend ipsum, fringilla gravida erat pretium et. Nulla eleifend ligula at purus gravida egestas. Pellentesque semper lectus orci, quis egestas urna malesuada quis.
                </p><p>
Nullam consequat purus quis nisl tempor gravida. Integer mi enim, molestie eu nunc id, iaculis dignissim turpis. Aliquam molestie, lectus quis vulputate tempor, nibh dolor cursus risus, non consequat justo ante in felis. Fusce nec eleifend elit. Donec dictum felis augue, quis molestie quam aliquam eget. Nulla nec sapien et lacus commodo efficitur. Morbi consectetur lectus a interdum consectetur. Sed aliquam ipsum eget hendrerit mollis. Ut non pharetra enim. Sed rutrum sapien massa. Duis in efficitur purus. Curabitur finibus sagittis diam tincidunt congue. Nam justo tortor, posuere at ante at, pellentesque condimentum velit. Etiam semper ligula sit amet odio lacinia, at sagittis nisl pellentesque. Nam porttitor ex nec risus feugiat, sit amet rhoncus orci dictum.
                </p><p>
Curabitur feugiat, odio a laoreet pharetra, felis ligula posuere enim, sed pretium quam nisi id lectus. Quisque in justo pellentesque, tincidunt nunc ut, euismod ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur ornare tristique fringilla. Quisque blandit dolor in nulla aliquet lacinia. Proin ullamcorper lobortis lorem, sit amet facilisis velit vestibulum non. Curabitur nec dignissim ante. Donec pellentesque nisl nulla, sed gravida mi scelerisque vehicula. Maecenas a ornare dolor. Maecenas tristique quam a est dapibus, ut dapibus leo auctor. Suspendisse potenti. Phasellus interdum leo nec leo sodales, laoreet fermentum sem cursus. Sed pharetra luctus faucibus. Proin molestie purus purus. Vivamus lobortis mattis eros nec ornare.
                </p><p>
Sed quis dui quis massa condimentum condimentum vitae condimentum ex. Donec aliquet purus diam, in malesuada neque tempus ut. Pellentesque et erat ultricies, pharetra leo malesuada, dictum sapien. Fusce et massa fringilla augue consectetur tincidunt at ut urna. Phasellus quis auctor eros. Nulla a viverra enim. Nunc efficitur rutrum quam nec molestie. Vestibulum posuere orci a felis auctor volutpat. Nam id placerat justo. Vestibulum eget tellus sed nulla blandit condimentum ac at augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eget euismod dolor, id pulvinar ante. Nulla vulputate pellentesque orci, at ornare orci.
                </p>
                </div>
            </Segment>
        );
    }
}
