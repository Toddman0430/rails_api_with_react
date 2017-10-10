var AllPosts = React.createClass({
    handleDelete(id) {
        this.props.handleDelete(id);
    },

    onUpdate(post) {
        this.props.onUpdate(post);
    },

    render() {
            var posts= this.props.posts.map((post) => {
                return (
                    <div key={post.id}>
                        <post post={post}
                              handleDelete={this.handleDelete.bind(this, post.id)}
                              handleUpdate={this.onUpdate}/>
                    </div>
                )
            });

        return(
            <div>
                {posts}
            </div>
        )
    }
});