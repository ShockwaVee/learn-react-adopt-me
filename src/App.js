const Pet = ({name, animal, breed}) => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h1", {}, name)],
        [React.createElement("h2", {}, animal)],
        [React.createElement("h2", {}, breed)],
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me"),
            React.createElement(Pet, {name: "Čupko", animal: "Cat", breed: "Maine coon"}),
            React.createElement(Pet, {name: "Pablo", animal: "Cat", breed: "Mixed"}),
            React.createElement(Pet, {name: "Oskar", animal: "Dog", breed: "Maltese"}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
