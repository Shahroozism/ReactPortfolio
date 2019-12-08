import React from 'react';
import Card from 'my-app/src/components/Card';
import retro from 'my-app/src/assests/retro.png';

class Carousel extends React.Component {

constructor(props) {
    super(props);
    this.state= {
items: [
    {
    id: 0, 
    title: 'ERC20 Cryptocurrency',
    subTitle: 'Sury Token',
    imgSrc: retro, 
    link: 'github.com',
    selected: false,
},
{
    id: 1, 
    title: 'ERC20 Cryptocurrency',
    subTitle: 'Sury Token',
    imgSrc: retro, 
    link: 'github.com',
    selected: false,
},
{
    id: 3, 
    title: 'ERC20 Cryptocurrency',
    subTitle: 'Sury Token',
    imgSrc: retro, 
    link: 'github.com',
    selected: false,
},
]
}
}

handleCardClick = (id,card) => {
let items = [...this.state.items];

items[id].selected = items[id].selected ? false : true; 

items.forEach(item => {
    if(item.id!== id) {
        item.selected = false; 
    }
});

this.setState({
    items
});

}

makeItems = (items) => {
return items.map(item => {
    return <Card item={item} Click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
})
}


render() {
    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
{this.makeItems(this.state.items)}
            </Row>
        </Container>
    );
}

}

export default Carousel; 