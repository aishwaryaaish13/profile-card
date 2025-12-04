# Book Management App

A simple DOM-based Book Management Application built with HTML, CSS, and JavaScript.

## Features

- ✅ Add new books with title, author, and category
- ✅ View all books in a responsive grid layout
- ✅ Sort books alphabetically (A → Z or Z → A)
- ✅ Filter books by category (Fiction, Comedy, Technical)
- ✅ Delete books from the collection
- ✅ Clean and minimal UI design
- ✅ Fully responsive design

## Pages

### 1. index.html (Home Page)
- Welcome heading
- Button to navigate to the admin page
- Clean, centered layout

### 2. admin.html (Book Management Page)
- Add book form with title, author, and category
- Sort buttons for alphabetical sorting
- Filter dropdown for category filtering
- Books displayed in a responsive grid
- Delete functionality for each book

## Book Object Structure

```javascript
{
  title: "Book Title",
  author: "Author Name",
  category: "Fiction|Comedy|Technical",
  imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
}
```

## How to Use

1. Start on the home page (index.html)
2. Click "Go to Admin Page" to access the book management interface
3. Fill in the book details and click "Add Book"
4. Sort books using "A → Z" or "Z → A" buttons
5. Filter books by category using the dropdown
6. Click "Delete" on any book card to remove it

## Files

- `index.html` - Home page
- `admin.html` - Book management page
- `styles.css` - Shared styling for both pages
- `app.js` - JavaScript logic for book management
- `README.md` - This file

## Deployment

### GitHub Pages
1. Push the repository to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your app will be available at `https://yourusername.github.io/DomBookApp`

### Netlify
1. Connect your GitHub repository
2. Deploy automatically on push
3. Get a live URL instantly

## Technologies Used

- HTML5
- CSS3 (Flexbox and Grid)
- Vanilla JavaScript (ES6+)

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Notes

- Books are stored in browser memory (resets on page refresh)
- All books use the same image URL as specified
- Fully functional without any external dependencies
