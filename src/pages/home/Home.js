import './home.css';

function ItemCards(card) {
    return (
        <div className="sceleton">
            <div className="sceleton-image">
                <div className="sceleton-raiting" />
            </div>
            <p className="sceleton-text" />
        </div>
    )
}

export const Home = () => {
    const createArray = (size) => [...new Array(size)]
    return (
        <div className="home">
            {
                createArray(8).map((el, index) => <ItemCards />)
            }
        </div>
    );
}

export default Home;



/*const sceleton = document.querySelector('sceleton.hidden'),
      shows = document.querySelector('shows');

setTimeout(() => {
    shows.classList.add('hidden');
    sceleton.classList.remove('hidden');
}, 3000);*/

