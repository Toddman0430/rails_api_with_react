var Body = React.createClass({
    getInitialState() {
        return { posts: [] }
    },


    componentDidMount() {
        $.getJSON('/api/v1/posts.json', (response) => { this.setState({ posts: response }) });
    },



    handleSubmit(post) {
        var newState = this.state.posts.concat(post);
        this.setState({ posts: newState })
    },


    handleDelete(id) {
        $.ajax({
            url: `/api/v1/posts/${id}`,
            type: 'DELETE',
            success:() => {
               this.removepostClient(id);
            }
        });
    },

    removepostClient(id) {
        var newposts = this.state.posts.filter((post) => {
            return post.id != id;
        });

        this.setState({ posts: newposts });
    },



    handleUpdate(post) {
        $.ajax({
                url: `/api/v1/posts/${post.id}`,
                type: 'PUT',
                data: { post: post },
                success: () => {
                    this.updateposts(post);

                }
            }
        )},

    updateposts(post) {
        var posts = this.state.posts.filter((i) => { return i.id != post.id });
        posts.push(post);

        this.setState({posts: posts });
    },


    render() {
        return (
            <div>
                <NewPost handleSubmit={this.handleSubmit}/>
                <AllPosts  posts={this.state.posts}  handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
            </div>
        )
    }
});