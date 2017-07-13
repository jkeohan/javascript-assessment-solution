
class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  init() {
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    this.$addCommentForm.on('submit', this.handleSubmit);
  }

  handleSubmit(e) {
    e.preventDefault();
    const $form = $(e.target);
    const $input = $form.children('.user-text');
    const commentText = $input.val();
    if (commentText !== '') {
      const imageId = $($form.parent()[0]).data('id');
      const comment = new Comment(commentText, imageId);
      this.render(comment);
      $input.val('');
    } else { $input.focus(); }
  }

  render(commentObject) {
    const $ul = $(`#image-${commentObject.findImage.id} ul`);
    const li = commentObject.commentEl();
    $ul.append(li);
  }
}
