import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
   imports: [IonicModule,FormsModule,CommonModule]
  //  imports: [IonicModule,IonFabButton, IonFab, IonButton, IonIcon, IonCard, IonFooter, IonCol, IonRow, IonText, IonTitle, IonContent, IonToolbar, IonHeader]

})

export class HomePage implements OnInit {
  loginisactive=true
  constructor(private router:Router) {
       setTimeout(() => {
    this.isLoading = false;
  }, 2000); 
    if(localStorage.getItem('username')!=null && localStorage.getItem('password')!=null){
      this.loginisactive=true;
    }
    else{
       this.loginisactive=false;
       this.router.navigate(['/login-page'])
    }
  }
  isLoading = true;
  ngOnInit(): void {
  //     setTimeout(() => {
  //   this.isLoading = false;
  // }, 2000); 
  }
  openbookdetails(book:any){
    this.router.navigate(['/book-details/',book?.id])
  }
 filteredBooks:any
  searchText: any
  onClickSearch(){
    console.log(this.searchText);
    if(this.searchText){
    console.log(this.searchText)
    // this.booksdetailsList=[]; 

    const search = this.searchText.toLowerCase().trim();

  this.booksdetailsList = this.booksdetailsList.filter(book =>
    book.title?.toLowerCase().includes(search) ||
    book.author?.toLowerCase().includes(search)
   
  );
  // console.log(this.filteredBooks);
   console.log(this.booksdetailsList);
}
else{

}
    // this.filters.searchField=this.search
    // this.getallEmponLeave();
  }
  clearSearch(){
    this.searchText=[]
    this.onClickSearch();
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
   this.router.navigate(['/login-page'])
    localStorage.clear();
    
  }

  // checkifloginnot(){
  //   if(localStorage.getItem('username')!=null && localStorage.getItem('password')!=null){
  //     this.loginisactive=true;
  //   }
  //   else{
  //      this.loginisactive=false;
  //      this.router.navigate(['/login-page'])
  //   }
  // }
}
