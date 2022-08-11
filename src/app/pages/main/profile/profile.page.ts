import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { concatMap, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilePicPayload} from 'src/app/models/payloads/update-user.payload'
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

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
    private readonly imageUploadService: ImageUploadService,
    private readonly auth: AuthService
    ) { }

  //#endregion

  //#region Public Properties

  public profilePicPayLoad: ProfilePicPayload = {
    name: null,
    role: null,
    imageUrl: '',
  }

  @Input()
  public myPostsits: FeedPostItProxy[] = [];

  eventsSubject: Subject<UserProxy> = new Subject<UserProxy>();

  public isSettingsEnabled: boolean = false;

  public myUser: UserProxy;

  public loading: boolean = false;

  public profileSettingsEnum: typeof ProfileSettingsEnum = ProfileSettingsEnum;

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
    this.myUser = success;

    return success;
  }

 public openMenu() {
    this.menu.enable(true, 'sidebar');
     this.menu.open('end');
  }

  public async clickConfigList(selectedSettings: ProfileSettingsEnum): Promise<void> {

    this.openMenu()

    if(selectedSettings === ProfileSettingsEnum.EDIT_PROFILE_PICTURE){
      
    }

    if(selectedSettings === ProfileSettingsEnum.EXIT){
      localStorage.clear();
      return void await this.router.navigate(['/login']);
    }

    if(selectedSettings === ProfileSettingsEnum.ABOUT_US){
      return void this.helper.showToast('Projeto Bootcamp LIGA - 2022', 5_000)
    }
  }

  public async uploadProfilePic(event: any){

    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${this.myUser.id}`).pipe(
      
     switchMap(
       async (picURL) => {
        this.profilePicPayLoad.imageUrl = picURL;
        const [success, error] = await this.auth.updateProfileData(this.myUser, this.profilePicPayLoad);
        if(error) return this.helper.showToast(error, 5_000);
        this.myUser = success;
        this.eventsSubject.next(success);
        this.auth.setUser();
      }
     )
    ).subscribe()
  }

}
