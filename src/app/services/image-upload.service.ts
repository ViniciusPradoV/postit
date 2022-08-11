import {Injectable} from '@angular/core';
import { ref, Storage, getDownloadURL, uploadBytes } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {

    constructor(private readonly storage: Storage){

    }

     uploadImage(image: File, path: string): Observable<string>{
        const storageRef = ref(this.storage, path);
        const uploadTask = from(uploadBytes(storageRef, image));

        return uploadTask.pipe(
            switchMap((result) => getDownloadURL(result.ref))
        )
    }

}