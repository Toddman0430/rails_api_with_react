var NewPost= React.createClass({
    handleClick() {
        var title    = this.refs.title.value;
        var text = this.refs.text.value;
        $.ajax({
            url: '/api/v1/posts',
            type: 'POST',
            data: { item: { title: title, text: text } },
            success: (post) => {
                this.props.handleSubmit(post);
            }
        });
    },
    render() {
        return (
                <div>
                    <input ref='title' placeholder='Enter the title of the post' />
                    <br />
                    <textarea ref='text' placeholder='Blog entry here'  rows="4" cols="50"/>
                    <br />
                    <button onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});
