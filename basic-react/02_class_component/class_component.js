// Class Component
class Practice1 extends React.Component {
    render() {
        return <h3>Practice: ReactJS</h3>
    }
}
let myElement = <Practice1 />;

// Props in Class Component
class Practice2 extends React.Component {
    render() {
        return <h3>Practice: {this.props.topic}</h3>
    }
}
myElement = <Practice2 topic="ReactJS"/>;

// Props Children in Class Component
class Practice3 extends React.Component {
    render() {
        return <h3 id={this.props.module}>Practice: {this.props.children}</h3>
    }
}
myElement = <Practice3 module="01">ReactJS</Practice3>;

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
