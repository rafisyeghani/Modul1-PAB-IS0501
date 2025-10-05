// counter pake functional component
const { useState } = React;

const Counter = () => {
    const [count, setCount] = useState(0);

    // kurang
    const kurang = () => {
        setCount(count - 1);
    };

    // tambah
    const tambah = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Pengenalan React Tingkat Dasar</h1>
            <h2>Counter</h2>
            <h1 style={{fontSize: "48px", margin: "20px 0"}}>{count}</h1>
            <button onClick={kurang}>- 1</button>
            <button onClick={tambah} style={{marginLeft: "10px"}}>+ 1</button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);