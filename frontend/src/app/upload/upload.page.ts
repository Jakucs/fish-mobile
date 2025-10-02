import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Cloudinaryapi } from '../shared/cloudinaryapi';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonicModule, CommonModule, FormsModule]
})
export class UploadPage implements OnInit {

  selectedFile: File | null = null;
  uploadUrl: string = '';

  constructor(private uploadService: Cloudinaryapi){}

    ngOnInit() {
      
    }

    onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
      }
    }

  uploadImage() {
    console.log(this.selectedFile);
    if (!this.selectedFile) return;

    this.uploadService.uploadFile(this.selectedFile).subscribe({
      next: (res: any) => {
        console.log('Feltöltve:', res);
        this.uploadUrl = res.secure_url;
      },
      error: (err) => console.error('Feltöltési hiba:', err)
    });

  }

}
