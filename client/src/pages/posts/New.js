import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function New({ user }) {

    // let subjectRef = useRef()
    // let bodyRef = useRef()
    let navigate = useNavigate()
    let nameRef = useRef()
    let imageRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        let post = {
            // subject: subjectRef.current.value,
            // body: bodyRef.current.value,
            name: nameRef.current.value,
            image: imageRef.current.value,
            user
        }
        await createPost(post)
        navigate('/posts')
    }

    return ( 
        <div>
            <h1 className="newPro">New Product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" ref={nameRef} /><br /><br />

                <label htmlFor="img">Image:</label><br />
                <input type="text" id="img" ref={imageRef} /><br /><br />

                {/* <label htmlFor="clr">Body:</label><br />
                <textarea id="clr" cols="30" rows="10" ref={bodyRef} /><br /><br /> */}

                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;