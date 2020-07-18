import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [PostComponent, MenuComponent],
  exports: [PostComponent, MenuComponent],
  imports: [
    CommonModule
  ]
})
export class HelperModule { }
