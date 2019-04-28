import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Button, Table } from 'react-bulma-components'
import { withRouter } from 'react-router-dom'

class PostTable extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        history: PropTypes.object.isRequired,
    }

    editAdminPost(post) {
        const { history, username } = this.props

        return history.push(`/admin/${username}/posts/${post.id}/edit`)
    }

    viewAdminPost(post) {
        const { history, username } = this.props

        return history.push(`/admin/${username}/posts/${post.id}`)
    }

    displayAdminOptions(post) {
        return (
            <React.Fragment>
                <Button
                    className="buttons"
                    color="warning"
                    onClick={() => this.editAdminPost(post)}

                >
                    Edit
                </Button>
                
                <Button
                    className="buttons"
                    color="info"
                    onClick={() => this.viewAdminPost(post)}
                >
                    View
                </Button>

                <Button
                    color="danger"
                    onClick={() => console.log('clicking the delete button')}
                >
                    Delete
                </Button>

            </React.Fragment>
        )


    }



    render() {
        const { posts } = this.props

        return (
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(posts, (post) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{this.displayAdminOptions(post)}</td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </Table>
        )
    }
}

export default withRouter(PostTable)