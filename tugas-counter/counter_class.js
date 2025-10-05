// counter pake class component
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        
        this.kurang = this.kurang.bind(this);
        this.tambah = this.tambah.bind(this);
    }

    kurang() {
        this.setState({count: this.state.count - 1});
    }

    tambah() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <h2>Counter</h2>
                <h1 style={{fontSize: "48px", margin: "20px 0"}}>{this.state.count}</h1>
                <button onClick={this.kurang}>- 1</button>
                <button onClick={this.tambah} style={{marginLeft: "10px"}}>+ 1</button>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);