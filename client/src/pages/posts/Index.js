import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"

function Index({ user }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await getAllPosts()
            setPosts(data)
        }
        loadData()
    }, [])
    console.log(posts)
    return (
        <div>
            {/* <h1>Index View</h1> */}
            <div id="posts">
                <div className="d-flex">
                    {posts?.map((post, index) =>
                        <Link to={`/posts/${post._id}`} key={index}>
                            <div className="d-flex flex-column text-center product mx-3 main-box" >
                                {post.name}
                                <img src={post.image}></img>
                            </div>
                        </Link>
                    )}
                </div>


                {user &&
                    <Link to="/posts/new">
                        <button>NEW POST</button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Index