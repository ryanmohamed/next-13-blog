# Blog Application
![demo image](https://i.ibb.co/0rbWD83/Screen-Shot-2023-05-16-at-2-42-05-AM.png)
This is a simple blog application built using Next.js and Tailwind CSS. It allows users to view and read articles on various topics. The application utilizes components such as `Article`, `BlogNav`, and `ArticleTitles` to provide a seamless browsing experience.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app.git

2. Install the dependencies:

   ```bash
   cd blog-app
   npm install
   
3. Start the development server
    ```bash
    npm run dev
    
## Usage

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the blog application.

5. Browse the available articles listed in the navigation menu.

6. Click on an article title to view the full content, including the author, publication date, and accompanying image.

7. Enjoy reading the article content!

## Features

- **Article Display**: The application displays articles with their titles, authors, publication dates, and corresponding images.
- **Navigation**: The application includes a navigation menu (`BlogNav`) to browse different articles.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch.

3. Make your changes and commit them.

4. Push your changes to your forked repository.

5. Submit a pull request with a description of your changes.

# Development Log: Turning ArticlePanel to Client Component for Interactivity
Added asynchronous light build of react-syntax-hightlighter

# Development Log: Turning ArticlePanel to Client Component for Interactivity

## Overview
ArticlePanel acts a side-panel and a collapsible top-panel on small screens. This requires interactivity - thus needs to be a client component. Keep in mind Next13 pre-renders client components on the server and then hydrated clientside, so they're not entirely "client-side". SEO is still supported for all titles in the elements. 

## Changes Made
1. Seperated components into server and client directories

2. Updated the component `ArticlePanel` component to be client component with `"use client";`

3. Added slide in styles with `expanded` state based ternaries in Tailwind string literals.

4. Removed scrolling from body when `expanded` is true.

## Next Steps
- Test the implementation thoroughly, ensuring both server-side rendering and interactivity work as expected.
- Consider additional optimizations or enhancements based on user feedback or specific requirements.
