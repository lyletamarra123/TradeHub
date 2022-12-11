import './myitems.css';

const Myitems = () => {
    return (
        <>
           <p className='mi-title'>My Items</p>
           <br></br>
           <br></br>
           <div className='mi-body'>
                <p>You haven't uploaded an Item yet.</p>
                <br></br>
                <button className='uploaditem-btn'>UPLOAD</button>
           </div>
        </>
    )
};

export default Myitems;