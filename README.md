# YouTube Clone Coding Project

This project is a YouTube clone built using React, React Router, React Query, Tailwind CSS, and TypeScript.

## Features

- Latest popular video list: Fetches and displays a list of the latest popular videos.
- Keyword search: Allows users to search for videos based on keywords and displays the search results.
- Video details: Shows detailed information about the selected video.

## APIs Used

- Latest popular video list: [https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=[YOUR_API_KEY]]
- Keyword search: [https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]]
- Video details: [https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]]

## Installation

1. Clone the repository: `git clone [repository URL]`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
