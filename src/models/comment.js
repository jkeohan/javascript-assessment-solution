// create Comment class here
class Comment {
  constructor(comment, imageId) {
    this.comment = comment;
    this.imageId = imageId;
    this.findImage = this.findImage(this.imageId);
    this.id = Comment.all.length;
    Comment.all.push(this);
  }

  findImage(imageId) {
    const image = Image.all[imageId];
    image.comments.push(this);
    return image;
  }

  commentEl() {
    return `<li id='comment-${this.id}'>${this.comment}</li>`;
  }
}

Comment.all = [];

