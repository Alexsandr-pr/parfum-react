

class CommentModel {
    constructor(reviewtext, author) {
        this.reviewtext = reviewtext;
        this.author = author;
        this.data = new Date()
    }
}


export default CommentModel;