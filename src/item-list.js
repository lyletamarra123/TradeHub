
import { itemslist } from './data';
import './items-list.css';

const ItemList = () => {
    
    return (
        <>
           <div className="section-center">
            {itemslist.map((menuItem) => {
                const { id, item, name } = menuItem;
                return (
                <article key={id} className="menu-item">
                    <img src={item} alt="item" className="photo" />
                    <div className="item-info">
                        <p className="item-text">{name}</p>
                        <br></br>
                    </div>
                </article>
                );
            })}
            </div>
        </>
    )
};

export default ItemList;