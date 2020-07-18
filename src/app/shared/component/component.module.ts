import { HelperModule } from './../helper/helper.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from './parallax/parallax.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ParallaxComponent, BlogComponent],
  exports: [HeaderComponent, FooterComponent,ParallaxComponent, BlogComponent],
  imports: [
    CommonModule,
    HelperModule
  ]
})

export class ComponentModule { }
