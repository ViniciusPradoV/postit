import { Component, Input } from '@angular/core';
import { FeedPostItProxy } from '../../models/proxies/feed-postit.proxy';
import { NoteService } from '../../services/note.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {

  constructor(
    private readonly helper: HelperService,
    private readonly note: NoteService,
  ) { }

  @Input()
  public postIt: FeedPostItProxy;

  public isLoading: boolean = false;

  public commentText: string = '';

  public async setLikeToPostIt(): Promise<void> {
    this.isLoading = true;
    const [, errorMessage] = await this.note.setLikeOnPostit(this.postIt);
    this.isLoading = false;

    if (errorMessage)
      return this.helper.showToast(errorMessage, 5_000);

    this.postIt.hasLiked = !this.postIt.hasLiked;
  }

  public async sendComment(): Promise<void> {
    this.isLoading = true;
    console.log(this.commentText);
    const [comment, errorMessage] = await this.note.sendComment(this.postIt.id, this.commentText);
    this.isLoading = false;

    if (errorMessage)
      return this.helper.showToast(errorMessage, 5_000);

    comment.user = this.postIt.user;

    this.commentText = '';
   
    this.postIt.comments.push(comment);
  }
}