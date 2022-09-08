

export default function News( {news,toggleText} ) {

    let newsToDisplay = news.articles ? news.articles.map(article => {
        function handleHeadlineClick() {
            window.open(article.link)
        }
        return (
            <div className='newsCard'>
                <div className='author'> {article.author} </div>
                <div className='headline' onClick={handleHeadlineClick} > {article.title} </div>
            </div>
        )
    }) : null


    return (
        <>
            <div className='newsTitle' >Latest News</div>
            <div className='allNews'>
                {newsToDisplay}
            </div>
        </>
    )
}