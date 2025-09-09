# 🕵️‍♂️ YouTube Recycle Bin Explorer

<div align="center">

[![YouTube Recycle Bin Explorer](https://img.shields.io/badge/YouTube-Recycle%20Bin%20Explorer-ff0000?style=for-the-badge&logo=youtube&logoColor=white)](https://thearmagan.github.io/youtube-recycle-bin)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

**Discover YouTube's Hidden Video Graveyard**

*Explore the vast ocean of forgotten videos with ~0 views*

[🚀 Live Demo](#-live-demo) • [📖 Features](#-features) • [🎯 Usage](#-usage) • [🔧 Installation](#-installation)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Statistics](#-statistics)
- [Maps](#-maps)
- [Installation](#-installation)
- [Usage](#-usage)
- [Keyphrases](#-keyphrases)
- [Advanced Filtering](#-advanced-filtering)
- [Safety & Ethics](#-safety--ethics)
- [Contributing](#-contributing)
- [Acknowledgments](#-acknowledgments)
- [License](#-license)

---

## 🎬 About

**YouTube Recycle Bin Explorer** is an advanced search tool that helps you discover YouTube's hidden video graveyard - the billions of videos with little to no views that are lost in the platform's vast ocean of content.

### 🌊 The Hidden Ocean

YouTube currently hosts **over 20 billion videos**, making it the largest video-sharing website of all time. But here's the shocking truth:

- **93%** of all YouTube videos have less than 1000 views
- **30%** of all YouTube videos have less than 100 views
- **~6 billion** videos have less than 100 views
- Only **0.33%** of videos have over 1 million views

This tool helps you navigate through this massive "video graveyard" using device-specific filename patterns that the algorithm doesn't know how to classify.

### 🔬 Research Background

Based on research by [KVN AUST](https://www.youtube.com/@KVNAUST), this project systematically explores YouTube's recycle bin using default filename patterns from various devices and applications.

---

## ✨ Features

### 🗺️ **Three Exploration Maps**
- **Map 1**: Brand new videos (~0 views) - Current uploads
- **Map 2**: Old & forgotten videos - Historical content
- **Map 3**: Retro videos (2006-2008) - YouTube's early years

### 📱 **127+ Keyphrase Categories**
- **Smartphones**: IMG, PXL, FullSizeRender
- **Cameras**: MVI, DSC, MOV, SAM, GOPR
- **Apps**: InShot, WhatsApp, YouCut, RPReplay  
- **Gaming**: DVR, Roblox, VLC Record
- **Formats**: .MP4, .AVI, .MOV, .3GP
- **NSFW**: Adult content patterns (18+)
- **Retro**: Early YouTube era patterns

### 🎛️ **Advanced Filtering System**
- **Content Filters**: Safe, NSFW, Retro modes
- **View Count**: 0 views, 1-10, 11-100, 101-1000
- **Duration**: Short (<4min), Medium (4-20min), Long (>20min)
- **Upload Time**: Hour, Day, Week, Month, Year
- **Quality**: HD, 4K, Low quality

### 🤖 **Smart Features**
- **Intelligent Date Generation**: Map-specific year ranges
- **Auto-Pattern Recognition**: YMD, HMS, YYYY formats
- **Safety Warnings**: NSFW content protection
- **Search History**: Local storage with 100 search limit
- **Responsive Design**: Mobile-friendly interface

---

## 📊 Statistics

```
🎥 Total Videos on YouTube: 20+ Billion
📉 Videos with <1000 views: 93% (~18.6 Billion)
📉 Videos with <100 views: 30% (~6 Billion)  
📈 Videos with >1M views: 0.33% (~66 Million)
🔍 Accessible via Keyphrases: ~127+ patterns
```

---

## 🗺️ Maps

### Map 1: New Videos (~0 views)
**Target**: Recently uploaded videos with minimal exposure
- **Sorting**: Upload Date (Mandatory)
- **Patterns**: Current device formats
- **Examples**: `IMG 4582`, `PXL_20241205_143052`

### Map 2: Old & Forgotten Videos  
**Target**: Historical content lost over time
- **Sorting**: View Count (Optional)
- **Filters**: Before:(year) recommended
- **Examples**: `"DSC 3201" before:2015`, `VTS 01 342`

### Map 3: Retro (2006-2008)
**Target**: YouTube's early years content
- **Sorting**: View Count (Optional) 
- **Filters**: Before:2008 automatic
- **Examples**: `"Video from my phone"`, `"Media1.3gp"`

---

## 🎯 Usage

### Basic Search
1. **Select Map**: Choose your exploration target (New/Old/Retro)
2. **Pick Category**: Select device/app category or go random
3. **Set Filters**: Choose year range and sorting method
4. **Generate**: Click "Generate Single Search" or "5 Random Searches"
5. **Explore**: Click "Open on YouTube" to discover hidden gems

### Advanced Filtering
1. **Click "Advanced Filters"** to expand options
2. **Content Filter**: Choose Safe/NSFW/Retro modes
3. **View Range**: Target specific view counts
4. **Duration**: Filter by video length
5. **Upload Time**: Find recent or historical content
6. **Quality**: HD, 4K, or low-quality videos

### Power User Tips
- Use **Upload Date** sorting for Map 1 (mandatory)
- Try **View Count** sorting for 0-view discoveries  
- Combine **Before:(year)** with specific patterns
- Use **quotation marks** for exact phrase matching
- **Surprise Me!** mode mixes all maps randomly

---

## 🔑 Keyphrases

### Smartphone Patterns
```javascript
IMG 3201        // iPhone/Android camera
PXL_20241205_143052  // Google Pixel
FullSizeRender  // iOS screenshot
WA0001         // WhatsApp media
```

### Camera Patterns  
```javascript
MVI 4582       // Canon cameras
DSC 3201       // Digital Still Camera
GOPR3201       // GoPro recordings
DJI 3201       // DJI drone footage
```

### App Patterns
```javascript
InShot_20241205    // InShot video editor
"My Movie 1"       // Generic video editors
RPReplay_Final1234 // iOS screen recording
YouCut_20241205    // YouCut editor
```

### Time/Date Patterns
```javascript
20241205       // YMD format (Year Month Day)
HMS 143052     // Time format (Hour Minute Second)  
WIN 20241205   // Windows webcam
Desktop 2024-12-05  // Screen recording
```

---

### YouTube URL Enhancement
The tool automatically adds YouTube-specific filters:
```
Sort Parameters:
- Upload Date: &sp=CAI%253D
- View Count: &sp=CAM%253D  
- Rating: &sp=CAE%253D

Duration Filters:
- Short: &sp=EgIYAQ%253D%253D
- Medium: &sp=EgIYAw%253D%253D
- Long: &sp=EgIYAg%253D%253D

Time Filters:
- Past Hour: &sp=EgIIAQ%253D%253D
- Past Day: &sp=EgIIAg%253D%253D
- Past Week: &sp=EgIIAw%253D%253D
```

---

## ⚖️ Safety & Ethics

### 🛡️ Privacy Protection
- **Respect Privacy**: Many videos contain personal/family content
- **No Direct Embedding**: Links open on YouTube only
- **Educational Purpose**: Tool for research and discovery
- **User Responsibility**: Be respectful when viewing content

### 📖 Fair Use
- **Non-Commercial**: Free educational tool
- **Attribution**: Credits original research
- **Open Source**: Transparent implementation
- **Community Driven**: Collaborative improvement

---

## 🚀 Live Demo

Visit the live demo: **[YouTube Recycle Bin Explorer](https://thearmagan.github.io/youtube-recycle-bin)**

### Example Discoveries
Try these generated searches to get started:
- `"IMG 4527" before:2020`
- `PXL_20231124_165432`  
- `"My Movie 7"`
- `WhatsApp Video 2022`
- `"You have new picture mail! (video)" before:2007`

---

## 🎊 Easter Eggs

### Konami Code
Try entering the Konami Code: ↑↑↓↓←→←→BA
- Activates "Super Surprise Mode"
- Generates 20 random searches
- Psychedelic visual effects

### Console Art
Open Developer Tools to see ASCII art and project stats!

---

## 🙏 Acknowledgments

- **[KVN AUST](https://www.youtube.com/@KVNAUST)** - Original research and concept
- **YouTube Platform** - For hosting the world's largest video collection
- **Open Source Community** - For tools and inspiration
- **Contributors** - Everyone who helps improve this project

### Inspired By
- The curiosity about YouTube's hidden content
- The desire to discover forgotten digital memories
- The technical challenge of pattern recognition
- The community of digital archaeologists

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Summary
- ✅ Use for any purpose
- ✅ Modify and distribute
- ✅ Commercial use allowed
- ❗ Include original license
- ❗ No warranty provided

---

### FAQ

**Q: Is this legal?**
A: Yes, this tool only generates search URLs and uses public YouTube search functionality.

**Q: Why do some keyphrases not work?**  
A: YouTube's algorithm and content availability changes constantly. Try different patterns or time periods.

**Q: Can I add new keyphrases?**
A: Absolutely! Submit a pull request or issue with new patterns you've discovered.

**Q: Is my search history private?**
A: Yes, all search history is stored locally in your browser only.

---

<div align="center">

### 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=thearmagan/youtube-recycle-bin&type=Date)](https://star-history.com/#thearmagan/youtube-recycle-bin&Date)

---

**Made with ❤️ by digital explorers**

*"In the vast ocean of YouTube, every video tells a story. This tool helps you discover the stories that time forgot."*

[⬆ Back to Top](#-youtube-recycle-bin-explorer)

</div>
