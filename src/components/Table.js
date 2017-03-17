import React, {Component} from "react";
import "./Table.css";

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: props.rows,
            cols: props.cols,
            searchInput: "",
            searchOption: props.cols[0],
            sortInput: props.cols[0],
            sortOption: "asc"
        }
    }

    onSortInput = evt => this.setState({sortInput: evt.target.value});
    onSortOption = evt => this.setState({sortOption: evt.target.value});
    onSearchInput = evt => this.setState({searchInput: evt.target.value});
    onSearchOption = evt => this.setState({searchOption: evt.target.value});

    render() {
        const {cols, searchInput, searchOption, sortInput, sortOption} = this.state;
        let {rows} = this.state;

        if (searchInput) {
            rows = rows.filter(row => {
                if (typeof row[searchOption] === "string") return row[searchOption].indexOf(searchInput) !== -1;
                else if (typeof row[searchOption] === "number") return row[searchOption] === parseInt(searchInput, 10);
                else return false;
            });
        }

        if (sortInput) {
            rows = rows.sort((rowA, rowB) => {
                if (sortOption === "asc") {
                    if (rowA[sortInput] < rowB[sortInput]) return -1;
                    else if (rowA[sortInput] > rowB[sortInput]) return 1;
                } else {
                    if (rowA[sortInput] < rowB[sortInput]) return 1;
                    else if (rowA[sortInput] > rowB[sortInput]) return -1;
                }
                return 0;
            });
        }

        return (
            <div className="table">
                <div className="search">
                    <select onChange={this.onSortInput}>
                        {cols.map(col => <option key={col} value={col}>{col}</option>)}
                    </select>
                    <select onChange={this.onSortOption}>
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </select>
                </div>
                <div className="search">
                    <select onChange={this.onSearchOption}>
                        {cols.map(col => <option key={col} value={col}>{col}</option>)}
                    </select>
                    <input type="search" onChange={this.onSearchInput} name="search"/>
                </div>
                <table>
                    <thead>
                    <tr>{cols.map(col => <td key={col}>{col}</td>)}</tr>
                    </thead>
                    <tbody>
                    {rows.map(row =>
                        <tr key={row.id} onClick={() => this.props.handleClick(row.id)}>
                            {cols.map(col => <td key={col}>{row[col]}</td>)}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;