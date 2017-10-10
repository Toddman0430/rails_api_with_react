var post = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        if(this.state.editable) {
            var title = this.refs.title.value;
            var id = this.props.post.id;
            var text = this.refs.text.value;
            var post = {id: id , title: title , text: text};
            this.props.handleUpdate(post);

        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.post.title} /> : <h3>{this.props.post.title}</h3>;
        var text = this.state.editable ? <input type='text' ref='text' defaultValue={this.props.post.text} />: <p>{this.props.post.text}</p>;
        return (
            <div>
                {title}
                {text}
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
            </div>
        )
    }
});