import { Component, OnInit } from '@angular/core';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import { HelperService } from 'src/app/services/helper.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(
    private readonly helper: HelperService,
    private readonly note: NoteService
  ) { }

  public isLoading: boolean = false;

  public postItArray: PostItProxy[] = [];

  public page: number = 1;

  public postsPerPage: number = 4;

 public async ngOnInit(): Promise<void> {
  await this.loadFeedNotes()
 }

 public async loadFeedNotes(): Promise<void>{
  this.isLoading = true;
  const [postits, message] = await this.note.getFeedNotes(this.page, this.postsPerPage);
  this.isLoading = false;

  if(message) return this.helper.showToast(message, 5_000);

  this.postItArray = [...this.postItArray, ...postits]
 }

 public async nextPage(): Promise<void> {
  this.page++;
  this.loadFeedNotes();
  }


}