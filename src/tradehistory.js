
import { history } from './data';
import './tradehistory.css';

const Tradehistory = () => {
    return (
        <>
           <p className='th-title'>Trade History</p>
           <br></br>
           <br></br>
           <div className='items-history'>
                <ul className='trade-info'>
                    {history.map((items) => {
                        const { id, tradenum, date, trader, message, stars, item } = items;
                        return (
                            <article key={id} className='history'>
                                <div className='info'>
                                    <h1 className='info-header'>{tradenum}</h1>
                                    <p className='info-date'>{date}</p>
                                    <p className='info-trader'>Trader: {trader}</p>
                                    <p className='info-message'>You traded: {message}</p>
                                    <p className='info-rating'>You rated: {stars}</p>
                                    
                                </div>
                                <div className='item-pic'>
                                    {item}
                                </div>
                            </article>
                        );
                    })}
                </ul>
           </div>
        </>
    )
};

export default Tradehistory;