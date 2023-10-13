import { Helmet } from "react-helmet"

const Head = () => {
    return (
        <Helmet>
            <title>Little Lemon</title>
            <meta name="title" content="Little Lemon" />
            <meta
                name="description"
                content="Simple and great neighbourhood restaurant"
            />
            <meta name='author' content="Madhav Varshney"></meta>
            <meta name="og:title" content="Little Lemon" />
            <meta name="og:description" content="Simple and great neighbourhood restaurant" />
            <meta name="og:image" content="" />
        </Helmet>
    )
}

export default Head;