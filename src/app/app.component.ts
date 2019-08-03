import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  postList : Post[]=[
    new Post("Poste 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu leo velit. In maximus leo id enim elementum sagittis id at nibh. Proin vel eros ex. Mauris ac blandit libero."),
    new Post("Poste 2",
    "Aenean imperdiet tellus et dolor pharetra auctor. Nunc ultrices felis erat, a egestas velit maximus eu. Fusce gravida felis quis sem hendrerit mattis."),
    new Post("Poste 3",
    "Contenu du poste 3"),
    new Post("Poste 4",
    "Donec auctor efficitur vehicula. Etiam gravida eget dui ut molestie. Suspendisse nec nulla vehicula, placerat velit at, finibus justo. Integer ac neque sit amet neque sodales imperdiet nec eu erat."),
    new Post("Poste 5",
    "Maecenas ut eleifend enim, vitae lobortis sapien. Aliquam lobortis efficitur euismod. Integer in vulputate felis, at dapibus sem."),
  ]


}
