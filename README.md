# ✨ Poem Generator

A beautiful, interactive web application that transforms words into poetry using AI-powered generation through n8n workflows.

## Features

- 🎨 **Multiple Styles**: Choose from Romantic, Dark, Motivational, Nature, Cyberpunk, and Spiritual themes
- 🎭 **Mood Selection**: Set the emotional tone with options like Calm, Melancholic, Hopeful, Intense, Mysterious, and Uplifting
- 📏 **Customizable Length**: Generate short (4-6 lines), medium (8-10 lines), or long (12-16 lines) poems
- 💫 **Emotional Intensity**: Fine-tune the emotional depth with a slider control
- 📚 **Poem History**: Automatically saves your last 3 generated poems locally
- 🌈 **Dynamic Theming**: Each style has its own unique visual atmosphere

## Tech Stack

- **Frontend**: Pure HTML, CSS, and JavaScript
- **Backend**: n8n webhook integration for AI-powered poem generation
- **Storage**: LocalStorage for poem history

## Getting Started

### Prerequisites

- A modern web browser
- An active n8n webhook endpoint (configured in `script.js`)

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd webapp
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

### Configuration

To use your own n8n webhook:

1. Open `script.js`
2. Replace the `webhookUrl` with your n8n webhook endpoint:
   ```javascript
   const webhookUrl = "YOUR_N8N_WEBHOOK_URL";
   ```

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings
4. Your app will be live!

## Usage

1. Enter a word or idea in the input field
2. Select your preferred style, mood, and length
3. Adjust the emotional intensity slider
4. Click "Create Poem" to generate your unique poem
5. View your previous poems in the history section

## Project Structure

```
webapp/
├── index.html      # Main HTML structure
├── style.css       # Styling and theme definitions
├── script.js       # Application logic and API integration
└── README.md       # This file
```

## License

MIT License - feel free to use this project for your own purposes!

## Acknowledgments

- Powered by n8n workflow automation
- AI poem generation capabilities
