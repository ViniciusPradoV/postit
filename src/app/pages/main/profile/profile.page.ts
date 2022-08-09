import { Component, Input, OnInit } from '@angular/core';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';
import { MenuController } from '@ionic/angular';
import { NoteService } from 'src/app/services/note.service';
import { HelperService } from 'src/app/services/helper.service';
import { UserProxy } from 'src/app/models/proxies/user.proxy';
import { FeedPostItProxy } from 'src/app/models/proxies/feed-postit.proxy';
import { ProfileSettingsEnum } from 'src/app/models/enums/profile-settings.enum';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  //#region Constructor
  constructor(
    private menu: MenuController,
    private router: Router,
    private readonly noteService: NoteService,
    private readonly helper: HelperService,
    ) { }

  //#endregion

  //#region Public Properties

  @Input()
  public myPostsits: PostItProxy[] = [];

  public isSettingsEnabled: boolean = false;

  public myUser: UserProxy;

  public loading: boolean = false;

  public profileSettingsEnum: typeof ProfileSettingsEnum = ProfileSettingsEnum;

  public page: number = 1;

  public postsPerPage: number = 4;

  //#endregion

  //#region Public Methods
  
  public async ngOnInit(): Promise<void> {
   await this.loadMyFeedNotes();

  }

  public async loadMyFeedNotes(): Promise<void> {
    this.loading = true;
    const [postIts, message] = await this.noteService.getMyFeedNotes();

    const success = JSON.parse(localStorage.getItem(environment.keys.user));
    this.loading = false;

    if (!success) {
      this.helper.showToast('Erro ao carregar usuário.')
    }

    if (!postIts) {
      return void this.helper.showToast(message);
    }

    this.myPostsits = [...this.myPostsits, ...postIts]
    console.log(this.myPostsits)
    this.myUser = success;
  }

  public async nextPage(): Promise<void> {
    this.page++;
    this.loadMyFeedNotes();
    }
 

 public openMenu() {
    this.menu.enable(true, 'sidebar');
     this.menu.open('end');
  }

  public async clickConfigList(selectedSettings: ProfileSettingsEnum): Promise<void> {

    this.openMenu()

    if(selectedSettings === ProfileSettingsEnum.EXIT){
      localStorage.clear();
      return void await this.router.navigate(['/login']);
    }

    if(selectedSettings === ProfileSettingsEnum.ABOUT_US){
      return void this.helper.showToast('Projeto Bootcamp LIGA - 2022', 5_000)
    }
  }
}
