import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModule } from './../../shared/component/component.module';

const home: Routes = [
  { path: '', component: HomeComponent}
]


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentModule,
    RouterModule.forChild(home)
  ]
})

export class HomeModule { }
