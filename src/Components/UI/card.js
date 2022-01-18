// we make this component that act like container or shell to remove any duplication code in css or js

import './card.css';
const Card= (props)=>{
    const classes ='card ' + props.className;// to get classes of it's children component
    return <div className={classes}>{props.children}</div>
}
// now we will use this component as a wrapper

export default Card;