import { Component } from '@angular/core';

@Component({

  //selector: 'app-root',       //HTML tag selector
  selector: '.app-root',        //By class
  //selector: '[app-root]',     //HTML Tag atribute selector
 //--------see the index.html file to see invocking------- of selectors

  templateUrl: './app.component.html', 

  // template: `
  //         <h1>This is App Component running here from the ts file</h1>
  // `,                                      //preference is given to this


  styleUrls: ['./app.component.css'],     //Can add any no. of external css files 

  styles: [`h1 {
    color: dodgerblue;
  }`]                                     //preference is given to this
})
export class AppComponent {
  title = 'app works!!';
}
