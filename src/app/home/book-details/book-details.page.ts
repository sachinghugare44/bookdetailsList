import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonText, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BookDetailsPage implements OnInit {

  constructor(private router:Router, private activated:ActivatedRoute ) { 
    if(localStorage.getItem('username')!=null && localStorage.getItem('password')!=null){
      this.loginisactive=true;
    }
    else{
       this.loginisactive=false;
       this.router.navigate(['/login-page'])
    }
  }
storedata:any
  ngOnInit() {
    this.bookid=this.activated.snapshot.paramMap.get('id')
    console.log(this.bookid)
this.getBookById(this.bookid);


  }
bookid:any

  backtologin(){
    this.router.navigate(['/home'])
  }
  getBookById(id: any) {
    
    
  for (let book of this.booksdetailsList) {
    if (book.id == id) {
      this.storedata=book
      console.log(book)
      return book;
    }
  }
  return null;

}
   booksdetailsList = [
    {
      id:1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      shortDescription: 'A classic novel of the Jazz Age.',
      longDescription: 'The Great Gatsby explores themes of decadence, idealism, resistance to change, and excess, creating a portrait of the Roaring Twenties in the United States.'
    },
    {
       id:2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      shortDescription: 'A novel about racial injustice in the Deep South.',
      longDescription: 'Published in 1960, it is widely studied in schools and deals with serious issues like racial inequality, moral growth, and the loss of innocence through the eyes of a child.'
    },
    {
       id:3,
      title: '1984',
      author: 'George Orwell',
      shortDescription: 'A dystopian novel about totalitarianism.',
      longDescription: '1984 presents a chilling depiction of perpetual war, surveillance, and government control. It explores the dangers of oppressive regimes and propaganda.'
    },
    {
       id:4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      shortDescription: 'A romantic novel of manners.',
      longDescription: 'This novel critiques the British landed gentry at the end of the 18th century and follows the character development of Elizabeth Bennet, who learns about the consequences of hasty judgments.'
    },
    {
       id:5,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      shortDescription: 'A fantasy adventure with Bilbo Baggins.',
      longDescription: 'Bilbo Baggins is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the dragon Smaug. It’s a tale of bravery, friendship, and self-discovery.'
    },
    {
       id:6,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      shortDescription: 'A story of teenage alienation and angst.',
      longDescription: 'Narrated by Holden Caulfield, the novel explores the challenges of adolescence and the struggle against the perceived phoniness of the adult world.'
    },
    {
       id:7,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      shortDescription: 'A philosophical novel about following your dreams.',
      longDescription: 'This allegorical novel follows a young Andalusian shepherd named Santiago in his journey to the Egyptian pyramids in search of treasure and self-discovery.'
    }
  ];
   logoutuser(){
    localStorage.clear();
    this.router.navigate(['/login-page'])
  }
  loginisactive=true
  
}
