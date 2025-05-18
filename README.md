Project Name : Bookdetails
Project Description : Its is simple book list and book deatils indiviudaly.
Project structure : Login Page 
Login Credentials : username:user , password: pass123
1)Use localStorage to store user details: username and password.
2)If localStorage already contains the username and password, the user is automatically redirected to the Home Page, indicating a logged-in state. Otherwise, the user remains on the Login Page.
3)The logout functionality simply clears localStorage and redirects the user to the Login Page.

Book List Page : 
1) Uses a simple static JSON array to fetch the book list data.
2) List is rep. of image , title , author , short desc.
3) A simple loader is displayed while loading the book list.
4) When a user clicks on any book card, it navigates to the Book Details Page for that specific book.
5) A search bar is available to filter books by title or author.
6) If a user is logged out and tries to access the Book List page directly via URL, they are automatically redirected to the Login Page.
Book Details page :
1)This data consits of breif data of Book details.
2)Long description.
