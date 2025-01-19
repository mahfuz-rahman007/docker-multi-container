import React, { Component } from "react";
import axios from "axios";

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: "",
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues() {
        const values = await axios.get("/api/values/current");
        this.setState({ values: values.data });
    }

    async fetchIndexes() {
        const seenIndexes = await axios.get("/api/values/all");
        this.setState({
            seenIndexes: seenIndexes.data,
        });
    }

    renderSeenIndexes() {
        return this.state.seenIndexes.map(({ number }) => number).join(", ");
    }

    renderValues() {
        const entries = [];
        for (let key in this.state.values) {
            entries.push(
                <div key={key}>
                    For index {key} I calculated {this.state.values[key]}
                </div>
            );
        }
        return entries;
    }

    onSubmit = async (event) => {
        event.preventDefault();

        await axios.post("/api/values", {
            index: this.state.index,
        });
        this.setState({ index: "" });
    };

    render() {
        return (
            <div>
                <h3>Seen indexes: {this.renderSeenIndexes()}</h3>
                <div>{this.renderValues()}</div>
                <form onSubmit={this.onSubmit}>
                    <label>Enter your index:</label>
                    <input
                        value={this.state.index}
                        onChange={(event) => this.setState({ index: event.target.value })}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    };

}

export default Fib;