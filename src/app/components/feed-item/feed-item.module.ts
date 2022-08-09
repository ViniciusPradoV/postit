import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FeedItemComponent } from "./feed-item.component";

@NgModule({
    declarations: [
        FeedItemComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule,
    ],
    exports: [
        FeedItemComponent,
    ],
})

export class FeedItemModule {
    
}