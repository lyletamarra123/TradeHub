
import { my_trades } from './data';
import './mytrades.css';

const Mytrades = () => {
    
    return (
        <>
           <p className='mt-title'>My Trades</p>
           <br></br>
           <br></br>
           <div className='items-trading'>
                <ul className='mytrade-info'>
                    {my_trades.map((items) => {
                        const { id, yourIcon, yourName, yourItem, arrow, otherUserIcon, otherUserName, otherUserItem, button, checkicon, xicon } = items;
                        return (
                            <article key={id} className='trade'>
                                <br></br>
                                <div className='ownuserinfo'>
                                    <p className='info-header'>{yourIcon} {yourName}</p>
                                    <p className='info-date'>{yourItem}</p> 
                                </div>
                                <p className='tradearrow'>{arrow}</p>
                                <div className='otheruserinfo'>
                                    <p className='info-header'>{otherUserIcon} {otherUserName}</p>
                                    <p className='info-message'>{otherUserItem}</p>               
                                </div>
                                <p className='button'>{checkicon}{button}{xicon}</p>
                                <br></br>
                            </article>
                        );
                    })}
                </ul>
           </div>
        </>
    )
};

export default Mytrades;