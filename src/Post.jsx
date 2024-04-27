import './Post.css'
export default function Post({post}){
    const {id, title, body} = post;

    return (
        <div className= 'post'>
            <h2>Id: {id}</h2>
            <p>title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}