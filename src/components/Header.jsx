

function Header(props) {


    return (
        <>
                <h1 className="App">Hello Header 
                    <button onClick={props.Increase}>Increase</button>
                    <b>num={props.num}</b>
                    <button onClick={props.Decrease}>Decrease</button>
                    </h1>

        </>

    );
}

export default Header;