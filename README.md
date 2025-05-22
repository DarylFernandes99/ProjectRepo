# ProjectRepo - AI/ML Project Showcase

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-17.0.1-blue.svg)
![Node](https://img.shields.io/badge/node-v14.15.4-green.svg)

ProjectRepo is a comprehensive web application that showcases various AI/ML projects through an interactive user interface. Built with React.js frontend and Django backend, it allows users to test and explore different machine learning models including image colorization, low-light image enhancement, and AI-powered poem generation.

## 🌟 Features

### 🎨 Image Colorization
- **Technology**: 8-layer Convolutional Neural Network
- **Framework**: Keras & TensorFlow
- **Dataset**: Random Name Dataset
- **Functionality**: Transforms grayscale/black & white images to colored versions
- **Input**: Images resized to 256x256 resolution
- **Output**: Downloadable colorized images

### 🌙 Low Light Image Enhancement  
- **Technology**: CycleGAN with Attention Module
- **Framework**: Keras & TensorFlow
- **Dataset**: Custom dataset
- **Functionality**: Enhances images captured in low-light environments
- **Features**: Improved visibility and detail preservation
- **GitHub Repository**: [Low Light Image Enhancement](https://github.com/DarylFernandes99/Low-light-Image-Enhancement-using-GAN)

### 📝 AI Poem Generator
- **Technology**: LSTM Network with Embedding layers
- **Training Data**: Classic poetry from renowned authors (Shakespeare, Edmund Spenser, John Donne, Sir Philip Sidney)
- **Functionality**: Generates custom poems based on user-provided phrases
- **Customization**: Adjustable stanza count (1-5)
- **Output**: Downloadable text files
- **GitHub Repository**: [AI Poem Generator](https://github.com/DarylFernandes99/Phrase-based-Poem-Generation)

### 🎯 Additional Features
- **Dark/Light Mode**: Toggle between themes with persistent preference storage
- **Responsive Design**: Bootstrap-powered responsive layout for all devices
- **Interactive UI**: Real-time processing indicators and smooth state transitions
- **File Management**: Upload, process, and download functionality
- **Error Handling**: Comprehensive error handling with user feedback

## 🛠️ Technology Stack

### Frontend
- **React.js** (v17.0.1) - Component-based UI framework
- **React Router** (v5.2.0) - Client-side routing
- **Bootstrap** (v4.6.0) - Responsive design framework
- **Axios** (v0.21.1) - HTTP client for API requests
- **React Icons** (v4.2.0) - Scalable vector icons
- **File-saver** (v2.0.5) - File download functionality

### Backend
- **Django** - Python web framework (backend API)
- **TensorFlow/Keras** - Machine learning models
- **Custom REST API** - Model inference endpoints
- **GitHub Repository**: [Django Backend](https://github.com/DarylFernandes99/ProjectRepo_Django-Backend)

### Development Tools
- **React Scripts** (v4.0.3) - Build tools and development server
- **Jest & React Testing Library** - Testing framework
- **ESLint** - Code quality and style enforcement

## 📁 Project Structure

```
ProjectRepo/
├── public/                     # Static assets
│   ├── favicon.ico            # Site favicon
│   ├── index.html            # HTML template
│   └── manifest.json         # PWA manifest
├── src/
│   ├── components/           # React components
│   │   ├── About/           # Developer profiles and information
│   │   ├── Contact/         # Contact page component
│   │   ├── Footer/          # Site footer
│   │   ├── Home/            # Landing page
│   │   ├── Navbar/          # Navigation bar with dark mode toggle
│   │   ├── Projects/        # Project showcase components
│   │   │   ├── Colorize/    # Image colorization interface
│   │   │   ├── LLIE/        # Low-light enhancement interface
│   │   │   ├── Poem/        # Poem generator interface
│   │   │   ├── List.js      # Project metadata and descriptions
│   │   │   └── Server.js    # API endpoint configuration
│   │   └── 404/             # Error page component
│   ├── media/               # Images and assets
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── *.css               # Component-specific styles
├── build/                   # Production build output
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14.15.4 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the development server
- `npm build` - Creates a production build
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## 🌐 API Configuration

The application communicates with a Django backend API. Update the server URL in `src/components/Projects/Server.js`:

```javascript
export const Server = "http://127.0.0.1:8000/";  // Development
// export const Server = "https://your-api-domain.com/";  // Production
```

### API Endpoints
- `POST /api/colorize/` - Image colorization
- `POST /api/poem/` - Poem generation
- `POST /api/lowlight/` - Low-light enhancement (inferred)

## 🎨 Usage Examples

### Image Colorization
1. Navigate to Projects → Image Colorization
2. Upload a grayscale or black & white image
3. Wait for processing (automatic)
4. Download the colorized result

### Poem Generation
1. Navigate to Projects → Poem Generator
2. Enter a starting phrase
3. Select stanza count (1-5)
4. Click "Generate" or "Random" for random inputs
5. Download the generated poem

### Low Light Enhancement
1. Navigate to Projects → Low Light Image Enhancement
2. Upload an image taken in low-light conditions
3. Process and download the enhanced image

## 👥 Development Team

### Daryl Fernandes - ML Engineer / Backend Developer
- **Email**: daryl.fernandes50@gmail.com
- **GitHub**: [DarylFernandes99](https://github.com/DarylFernandes99)
- **LinkedIn**: [darylfernandes50](https://www.linkedin.com/in/darylfernandes50/)
- **Role**: Machine learning model development, backend API implementation

### Joel Dsouza - Fullstack Developer  
- **Email**: shadowk97@gmail.com
- **GitHub**: [shadowk97](https://www.github.com/shadowk97/)
- **LinkedIn**: [joeldzs44](https://www.linkedin.com/in/joeldzs44/)
- **Role**: Full-stack development, React frontend, integration

### Lloyd Dsouza - Design Head / Content Writer
- **Email**: lloyd.dsouza81@gmail.com
- **LinkedIn**: [lloyddsouza99](https://www.linkedin.com/in/lloyddsouza99/)
- **Role**: UI/UX design, content creation, documentation

## 🔧 Technical Implementation Details

### State Management
- **React Hooks**: useState, useReducer for component state
- **Local Storage**: Dark mode preference persistence
- **State Machine**: Controlled UI transitions for upload flow

### Responsive Design
- **Bootstrap Grid**: Mobile-first responsive layout
- **Conditional Rendering**: Device-specific UI elements
- **CSS Media Queries**: Custom breakpoints and styling

### Performance Optimizations
- **Code Splitting**: React.lazy() for route-based splitting (ready for implementation)
- **Image Optimization**: Automatic resizing and compression
- **Caching**: Browser storage for user preferences

## 🔒 Security Considerations

- **File Upload Validation**: Client-side file type checking
- **CORS Configuration**: Proper cross-origin request handling
- **Input Sanitization**: Form input validation and sanitization
- **Error Handling**: Graceful error responses without exposing internals

## 🚀 Deployment

### Development Build
```bash
npm start
```

### Production Build
```bash
npm run build
# Serve the build folder using a static server
```

### Environment Configuration
Create `.env` files for environment-specific settings:
```
REACT_APP_API_URL=your_api_endpoint
REACT_APP_ENVIRONMENT=production
```

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Failed**
   - Verify backend server is running
   - Check API URL in `Server.js`
   - Ensure CORS is properly configured

2. **Image Upload Not Working**
   - Check file size limits
   - Verify supported file formats
   - Ensure sufficient server storage

3. **Build Errors**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Update dependencies: `npm update`
   - Check Node.js version compatibility

## 📚 Browser Support

- **Chrome** 88+
- **Firefox** 85+
- **Safari** 14+
- **Edge** 88+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔄 Future Enhancements

- [ ] Real-time collaboration features
- [ ] Advanced ML model configurations
- [ ] Batch processing capabilities
- [ ] User authentication and project saving
- [ ] API rate limiting and caching
- [ ] Progressive Web App (PWA) features
- [ ] Internationalization (i18n) support

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, please contact any of the development team members or create an issue in the repository.

---

**Built with ❤️ by the ProjectRepo Team**
