// Cat Component
class Cat extends React.Component {
    // State Declaration
    state = { 
        isHungry: true 
    };

    render() {
        return (
            <div>
                <p>I am {this.props.name}, and I am {this.state.isHungry ? " hungry" : " full"}!</p>
                <button
                    onClick={() => {
                        this.setState({ isHungry: false });
                    }}
                    disabled={!this.state.isHungry}
                >
                    {this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"}
                </button>
            </div>
        );x
    }
};

// Cafe Component
class Cafe extends React.Component {
    render() {
        return (
        <div>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </div>
        );
    }
};

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
