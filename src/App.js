const labelText = 'First name:';
const style = {
    backgroundColor: 'blue',
    color: 'white'
};

// Create a react component
const App = () => {
    return (
        <div>
    <div>
        <label className='label' htmlFor='name'>{labelText}</label>
        <input id='name' />
        <button
        style={style}>
            Submit
            </button>
    </div>
        </div>
    );
}

export default App;