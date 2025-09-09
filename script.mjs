// YouTube Recycle Bin Explorer - Advanced Search System
// Inspired by KVN AUST's research on YouTube's video graveyard

class YouTubeRecycleBinExplorer {
  constructor() {
    this.initializeData();
    this.initializeElements();
    this.bindEvents();
    this.updateStats();
  }

  initializeData() {
    // Map 1: Brand new videos with ~0 views (based on about.md)
    this.map1Keyphrases = {
      smartphone: [
        { phrase: 'IMG', variable: 'XXXX', example: 'IMG 3201', range: '0000-9999' },
        { phrase: 'PXL', variable: 'YYYYMMDD_HHMMSS', example: 'PXL_20250102_143052', format: 'PXL_YYYYMMDD' },
        { phrase: 'FullSizeRender', variable: '', example: 'FullSizeRender' }
      ],
      camera: [
        { phrase: 'MVI', variable: 'XXXX', example: 'MVI 3201', range: '0000-9999' },
        { phrase: 'MOV', variable: 'XXXX', example: 'MOV 3201', range: '0000-9999' },
        { phrase: 'DSC', variable: 'XXXX', example: 'DSC 3201', range: '0000-9999' }
      ],
      formats: [
        { phrase: '".MP4"', variable: '', example: '".MP4"', quotes: true },
        { phrase: '".3gp"', variable: '', example: '".3gp"', quotes: true },
        { phrase: '".MOV"', variable: '', example: '".MOV"', quotes: true },
        { phrase: '".AVI"', variable: '', example: '".AVI"', quotes: true },
        { phrase: '".WMV"', variable: '', example: '".WMV"', quotes: true },
        { phrase: '".WAV"', variable: '', example: '".WAV"', quotes: true }
      ],
      apps: [
        { phrase: 'InShot', variable: 'YYYYMMDD', example: 'InShot_20250102', format: 'InShot_YYYYMMDD' },
        { phrase: 'WhatsApp Video', variable: 'YYYY', example: 'WhatsApp Video 2025', note: 'Year only' },
        { phrase: 'YouCut', variable: 'YYYYMMDD', example: 'YouCut_20250102', note: 'Date format' },
        { phrase: 'RPReplay', variable: '_XXXX', example: 'RPReplay_Final1234' }
      ],
      gaming: [
        { phrase: 'DVR', variable: '', example: 'DVR' },
        { phrase: 'VLC Record', variable: 'YYYY-MM-DD', example: 'VLC Record 2025-01-02', note: 'Date with dashes' },
        { phrase: 'Robloxapp', variable: 'YYYYMMDD', example: 'Robloxapp-20250102', note: 'Date format' },
        { phrase: 'Desktop', variable: 'YYYY-MM-DD', example: 'Desktop 2025-01-02', note: 'Date with dashes' }
      ],
      webcam: [
        { phrase: 'WIN', variable: 'YYYYMMDD', example: 'WIN 20250102', format: 'WIN_YYYYMMDD' },
        { phrase: 'Capture', variable: 'YYYYMMDD', example: 'Capture 20250102', note: 'Date format' },
        { phrase: 'Recording gvo', variable: '', example: 'Recording gvo' }
      ],
      misc: [
        { phrase: 'VTS 01', variable: '', example: 'VTS 01' },
        { phrase: '"My Movie', variable: 'X"', example: '"My Movie 1"' },
        { phrase: '"My Edited Video"', variable: '', example: '"My Edited Video"' },
        { phrase: 'Lv 0', variable: '', example: 'Lv 0' },
        { phrase: '"Untitled video"', variable: '', example: '"Untitled video"' },
        { phrase: 'bmdjAAAF', variable: '', example: 'bmdjAAAF' },
        { phrase: '"Com Oculus Vrshell"', variable: '', example: '"Com Oculus Vrshell"' },
        { phrase: '"Com Oculus Metacam"', variable: '', example: '"Com Oculus Metacam"' },
        { phrase: 'YMD', variable: 'YYYYMMDD', example: '20250102', note: 'Current date format' },
        { phrase: 'WIN YMD', variable: 'YYYYMMDD', example: 'WIN 20250102', note: 'Current date format' },
        { phrase: 'Capture YMD', variable: 'YYYYMMDD', example: 'Capture 20250102', note: 'Current date format' },
        { phrase: 'VID YMD', variable: 'YYYYMMDD', example: 'VID 20250102', note: 'Current date format' }
      ]
    };

    // Map 2: Old & forgotten videos with ~0 views  
    this.map2Keyphrases = {
      smartphone: [
        { phrase: 'IMG', variable: 'XXXX', example: 'IMG 3201', range: '0000-9999' },
        { phrase: 'PXL', variable: 'YYYYMMDD', example: 'PXL_20201102', format: 'PXL_YYYYMMDD' },
        { phrase: 'WA0', variable: 'XXX', example: 'WA0001', range: '000-999' }
      ],
      camera: [
        { phrase: 'MVI', variable: 'XXXX', example: 'MVI 3201', range: '0000-9999' },
        { phrase: 'MOV', variable: 'XXXX', example: 'MOV 3201', range: '0000-9999' },
        { phrase: '100', variable: 'XXXX', example: '100 3201', range: '0000-9999' },
        { phrase: 'SAM', variable: 'XXXX', example: 'SAM 3201', range: '0000-9999' },
        { phrase: 'DSC', variable: 'XXXX', example: 'DSC 3201', range: '0000-9999' },
        { phrase: 'SDV', variable: 'XXXX', example: 'SDV 3201', range: '0000-9999' },
        { phrase: 'DSCF', variable: 'XXXX', example: 'DSCF3201', range: '0000-9999' },
        { phrase: 'DSCN', variable: 'XXXX', example: 'DSCN3201', range: '0000-9999' },
        { phrase: 'PICT', variable: 'XXXX', example: 'PICT3201', range: '0000-9999' },
        { phrase: 'MAQ0', variable: 'XXXX', example: 'MAQ03201', range: '0000-9999' },
        { phrase: 'MOL0', variable: 'XX', example: 'MOL0E5', chars: 'A-F0-9' },
        { phrase: 'P100', variable: 'XXXX', example: 'P1003201', range: '0000-1999' },
        { phrase: 'SVM A', variable: 'XXXX', example: 'SVM A3201', range: '0000-1000' },
        { phrase: 'KVID', variable: 'XXXX', example: 'KVID3201', range: '0000-1000' },
        { phrase: 'M2U0', variable: 'XXXX', example: 'M2U03201', range: '0000-9999' },
        { phrase: 'MAH0', variable: 'XXXX', example: 'MAH03201', range: '0000-9999' },
        { phrase: 'CIMG', variable: 'XXXX', example: 'CIMG3201', range: '0000-9999' },
        { phrase: 'IMGP', variable: 'XXXX', example: 'IMGP3201', range: '0000-9999' },
        { phrase: 'Video', variable: 'XXXX', example: 'Video3201', range: '0000-9999' },
        { phrase: 'MOV0', variable: 'XXXX', example: 'MOV03201', range: '0000-9999' }
      ],
      gaming: [
        { phrase: 'FILE', variable: 'XXXX', example: 'FILE3201', range: '0000-9999' },
        { phrase: 'GOPR', variable: 'XXXX', example: 'GOPR3201', range: '0000-9999' },
        { phrase: 'GP01', variable: 'XXXX', example: 'GP013201', range: '0000-9999' },
        { phrase: 'GX01', variable: 'XXXX', example: 'GX013201', range: '0000-9999' },
        { phrase: 'GH01', variable: 'XXXX', example: 'GH013201', range: '0000-9999' },
        { phrase: 'DJI', variable: 'XXXX', example: 'DJI 3201', range: '0000-9999' },
        { phrase: 'MOVI', variable: 'XXXX', example: 'MOVI3201', range: '0000-1050' },
        { phrase: 'REC', variable: 'XXXX', example: 'REC 3201', range: '0000-1000' }
      ],
      misc: [
        { phrase: 'HNI 0', variable: 'XXX', example: 'HNI 0001', range: '000-100' },
        { phrase: 'HMS', variable: 'HHMMSS', example: 'HMS 143052', note: 'Time format HHMMSS' },
        { phrase: 'VTS', variable: 'XX X', example: 'VTS 01 1', range: '00-99 0-9' },
        { phrase: 'YMD', variable: 'YYYYMMDD', example: '20201102', note: 'Date format YYYYMMDD' },
        { phrase: 'WIN YMD', variable: 'YYYYMMDD', example: 'WIN 20201102', note: 'Date format' },
        { phrase: 'VID YMD', variable: 'YYYYMMDD', example: 'VID 20201102', note: 'Date format' },
        { phrase: 'Capture YMD', variable: 'YYYYMMDD', example: 'Capture 20201102', note: 'Date format' },
        { phrase: 'InShot YMD', variable: 'YYYYMMDD', example: 'InShot 20201102', note: 'Date format' },
        { phrase: 'AUD-YMD', variable: 'YYYYMMDD', example: 'AUD-20201102', note: 'Date format' },
        { phrase: 'WhatsApp Video YYYY MM DD', variable: 'YYYY MM DD', example: 'WhatsApp Video 2020 11 02', note: 'Date with spaces' },
        { phrase: 'Desktop YYYY MM DD', variable: 'YYYY MM DD', example: 'Desktop 2020 11 02', note: 'Date with spaces' },
        { phrase: 'WP YMD', variable: 'YYYYMMDD', example: 'WP 20201102', note: 'Date format' },
        { phrase: 'KakaoTalk Video YYYY MM', variable: 'YYYY MM', example: 'KakaoTalk Video 2020 11', note: 'Year and month only' },
        { phrase: 'AVSEQ', variable: 'XX', example: 'AVSEQ01', range: '00-99' },
        { phrase: 'AVSEQ', variable: 'XX.DAT', example: 'AVSEQ01.DAT', range: '00-99' },
        { phrase: 'GMTYMD', variable: '', example: 'GMT20201102' },
        { phrase: 'MUSIC', variable: 'XX.DAT', example: 'MUSIC01.DAT', range: '00-99' },
        { phrase: '"My Slideshow Video"', variable: '', example: '"My Slideshow Video"' },
        { phrase: '"My Slideshow"', variable: '', example: '"My Slideshow"' },
        { phrase: '"My Slideshow', variable: 'XX"', example: '"My Slideshow 01"', range: '00-99' },
        { phrase: '"My Stupeflix Video"', variable: '', example: '"My Stupeflix Video"' },
        { phrase: '"My Stupeflix Video', variable: 'XXXX"', example: '"My Stupeflix Video 1234"', range: '0000-1050' },
        { phrase: '"My Videolicious Video"', variable: '', example: '"My Videolicious Video"' },
        { phrase: '"Month DD, YYYY"', variable: 'DATE', example: '"May 02, 2020"', needsDateFormat: true, isMap2: true },
        { phrase: '"Video YMD"', variable: '', example: '"Video 20201102"' },
        { phrase: '"Axon Body', variable: 'Video"', example: '"Axon Body 2 Video"' }
      ],
      nsfw: [
        { phrase: '240p 400k', variable: '', example: '240p 400k', warning: 'NSFW - Filter: Playlist' },
        { phrase: '480p 600k', variable: '', example: '480p 600k', warning: 'NSFW - Filter: Playlist' },
        { phrase: '480p 2000k', variable: '', example: '480p 2000k', warning: 'NSFW - Filter: Playlist' },
        { phrase: '720p 1500k', variable: '', example: '720p 1500k', warning: 'NSFW - Filter: Playlist' },
        { phrase: '720p 4000k', variable: '', example: '720p 4000k', warning: 'NSFW - Filter: Playlist' },
        { phrase: 'Clips4Sale', variable: '', example: 'Clips4Sale', warning: 'NSFW - Filter: Playlist' }
      ]
    };

    // Map 3: Low-view videos from 2006-2008
    this.map3Keyphrases = {
      phone: [
        { phrase: '"You have new picture mail! (video)"', variable: '', example: '"You have new picture mail! (video)"' },
        { phrase: '"Media1.3gp"', variable: '', example: '"Media1.3gp"' },
        { phrase: '"Media1.3g2"', variable: '', example: '"Media1.3g2"' },
        { phrase: '"Video.3g2"', variable: '', example: '"Video.3g2"' },
        { phrase: '"New Multimedia Message"', variable: '', example: '"New Multimedia Message"' },
        { phrase: '"Multimedia Message"', variable: '', example: '"Multimedia Message"' },
        { phrase: '"Video from my phone"', variable: '', example: '"Video from my phone"' },
        { phrase: '"Video uploaded from my mobile phone"', variable: '', example: '"Video uploaded from my mobile phone"' },
        { phrase: '"For', variable: 'DATE', example: '"For December 02, 2007"', needsDateFormat: true }
      ],
      camera: [
        { phrase: '"Recorded on', variable: 'DATE', example: '"Recorded on December 02, 2007 using a Flip Video Camcorder"', needsDateFormat: true, suffix: ' using a Flip Video Camcorder"' },
        { phrase: 'Video0', variable: 'XX', example: 'Video001', range: '00-10' },
        { phrase: 'Vid0', variable: 'XX', example: 'Vid001', range: '00-10' },
        { phrase: 'MOV000', variable: 'XX', example: 'MOV00001', range: '00-10' }
      ]
    };

    // Search parameters for each map
    this.searchParams = {
      map1: {
        sortBy: 'upload_date', // MANDATORY for Map 1
        mandatory: true,
        useQuotes: true,
        description: 'Upload Date sorting is mandatory for new videos'
      },
      map2: {
        sortBy: 'view_count', // Optional for Map 2
        useQuotes: true,
        useBefore: true,
        description: 'Use Before:(year) filter for old videos'
      },
      map3: {
        sortBy: 'view_count', // Optional for Map 3
        useQuotes: true,
        useBefore: true,
        beforeYear: 2008,
        description: 'Use Before:2008 filter for 2006-2008 period'
      }
    };

    this.searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    this.totalSearches = parseInt(localStorage.getItem('totalSearches') || '0');
  }

  initializeElements() {
    this.elements = {
      mapButtons: document.querySelectorAll('.map-btn'),
      keyphraseSelect: document.getElementById('keyphrase-select'),
      yearRange: document.getElementById('year-range'),
      sortMethod: document.getElementById('sort-method'),
      contentFilter: document.getElementById('content-filter'),
      viewRange: document.getElementById('view-range'),
      duration: document.getElementById('duration'),
      uploadTime: document.getElementById('upload-time'),
      quality: document.getElementById('quality'),
      toggleAdvanced: document.getElementById('toggle-advanced'),
      advancedControls: document.getElementById('advanced-controls'),
      generateSingle: document.getElementById('generate-single'),
      generateMultiple: document.getElementById('generate-multiple'),
      surpriseMe: document.getElementById('surprise-me'),
      searchResults: document.getElementById('search-results'),
      clearResults: document.getElementById('clear-results'),
      totalSearches: document.getElementById('totalSearches'),
      activeKeyphrases: document.getElementById('activeKeyphrases')
    };

    this.currentMap = '1';
    this.updateActiveKeyphrases();
  }

  bindEvents() {
    // Map selection
    this.elements.mapButtons.forEach(btn => {
      btn.addEventListener('click', () => this.selectMap(btn.dataset.map));
    });

    // Generation buttons
    this.elements.generateSingle.addEventListener('click', () => this.generateSingleSearch());
    this.elements.generateMultiple.addEventListener('click', () => this.generateMultipleSearches(5));
    this.elements.surpriseMe.addEventListener('click', () => this.surpriseMe());

    // Clear results
    this.elements.clearResults.addEventListener('click', () => this.clearResults());

    // Advanced controls toggle
    this.elements.toggleAdvanced.addEventListener('click', () => this.toggleAdvancedControls());

    // Content filter change
    this.elements.contentFilter.addEventListener('change', () => this.handleContentFilterChange());

    // Map change updates
    this.elements.mapButtons.forEach(btn => {
      btn.addEventListener('click', () => this.updateActiveKeyphrases());
    });
  }

  selectMap(mapNumber) {
    this.currentMap = mapNumber;

    // Update UI
    this.elements.mapButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-map="${mapNumber}"]`).classList.add('active');

    // Update sort method based on map requirements
    if (mapNumber === '1') {
      this.elements.sortMethod.value = 'upload_date';
      this.elements.sortMethod.disabled = true; // Mandatory for Map 1
    } else {
      this.elements.sortMethod.disabled = false;
    }
  }

  updateActiveKeyphrases() {
    let count = 0;
    const mapData = this.getMapData(this.currentMap);

    Object.values(mapData).forEach(category => {
      count += category.length;
    });

    this.elements.activeKeyphrases.textContent = count;
  }

  toggleAdvancedControls() {
    const isVisible = this.elements.advancedControls.classList.contains('show');

    if (isVisible) {
      this.elements.advancedControls.classList.remove('show');
      this.elements.toggleAdvanced.innerHTML = '<i class="fas fa-sliders-h"></i> Advanced Filters';
    } else {
      this.elements.advancedControls.classList.add('show');
      this.elements.toggleAdvanced.innerHTML = '<i class="fas fa-sliders-h"></i> Hide Advanced';
    }
  }

  handleContentFilterChange() {
    const filterValue = this.elements.contentFilter.value;

    // Show/hide NSFW warning
    let nsfwWarning = document.getElementById('nsfw-warning');

    if (filterValue === 'nsfw') {
      if (!nsfwWarning) {
        nsfwWarning = document.createElement('div');
        nsfwWarning.id = 'nsfw-warning';
        nsfwWarning.className = 'nsfw-warning';
        nsfwWarning.innerHTML = `
          <h4>⚠️ NSFW Content Warning</h4>
          <p>You are about to search for adult content. Please be responsible and respect privacy.</p>
          <p>These searches are marked for educational/research purposes only.</p>
        `;
        this.elements.advancedControls.parentNode.insertBefore(nsfwWarning, this.elements.advancedControls.nextSibling);
      }
      nsfwWarning.classList.add('show');

      // Auto-select NSFW category
      this.elements.keyphraseSelect.value = 'nsfw';
    } else {
      if (nsfwWarning) {
        nsfwWarning.classList.remove('show');
      }
    }

    // Update keyphrase options based on filter
    this.updateKeyphraseOptions(filterValue);
  }

  updateKeyphraseOptions(filter) {
    const keyphraseSelect = this.elements.keyphraseSelect;
    const currentValue = keyphraseSelect.value;

    // Reset to default if current selection is not available for this filter
    if (filter === 'safe' && currentValue === 'nsfw') {
      keyphraseSelect.value = 'random';
    } else if (filter === 'nsfw' && currentValue !== 'nsfw') {
      keyphraseSelect.value = 'nsfw';
    }
  }

  getMapData(mapNumber) {
    switch (mapNumber) {
      case '1': return this.map1Keyphrases;
      case '2': return this.map2Keyphrases;
      case '3': return this.map3Keyphrases;
      default: return this.map1Keyphrases;
    }
  }

  generateSingleSearch() {
    const search = this.createSearch();
    this.addSearchToResults(search);
    this.updateStats();
  }

  generateMultipleSearches(count) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const search = this.createSearch();
        this.addSearchToResults(search);
        if (i === count - 1) this.updateStats();
      }, i * 200); // Stagger animation
    }
  }

  surpriseMe() {
    // Surprise mode: mix different maps and categories
    const surpriseCount = Math.floor(Math.random() * 8) + 3; // 3-10 searches
    const originalMap = this.currentMap;

    for (let i = 0; i < surpriseCount; i++) {
      setTimeout(() => {
        // Randomly switch maps
        this.currentMap = Math.floor(Math.random() * 3) + 1 + '';

        const search = this.createSearch(true); // Enable surprise mode
        this.addSearchToResults(search);

        if (i === surpriseCount - 1) {
          this.currentMap = originalMap;
          this.updateStats();
        }
      }, i * 300);
    }
  }

  createSearch(surpriseMode = false) {
    const mapData = this.getMapData(this.currentMap);
    const searchParams = this.searchParams[`map${this.currentMap}`];

    // Select category and keyphrase
    let category, keyphrase;
    const contentFilter = this.elements.contentFilter?.value || 'all';

    if (surpriseMode || this.elements.keyphraseSelect.value === 'random') {
      // Random selection with content filter consideration
      const categories = Object.keys(mapData);
      const filteredCategories = this.filterCategoriesByContent(categories, contentFilter);
      category = filteredCategories[Math.floor(Math.random() * filteredCategories.length)];
    } else {
      category = this.elements.keyphraseSelect.value;
    }

    // Apply content filter
    if (contentFilter === 'safe' && category === 'nsfw') {
      // If safe filter is on but NSFW category is selected, switch to random safe category
      const categories = Object.keys(mapData).filter(cat => cat !== 'nsfw');
      category = categories[Math.floor(Math.random() * categories.length)];
    } else if (contentFilter === 'nsfw' && category !== 'nsfw') {
      // If NSFW filter is on, force NSFW category if available
      if (mapData.nsfw) {
        category = 'nsfw';
      }
    }

    // If selected category doesn't exist in current map, fall back to random
    if (!mapData[category]) {
      const categories = Object.keys(mapData);
      const filteredCategories = this.filterCategoriesByContent(categories, contentFilter);
      category = filteredCategories[Math.floor(Math.random() * filteredCategories.length)] || categories[0];
    }

    const categoryKeyphrases = mapData[category];
    keyphrase = categoryKeyphrases[Math.floor(Math.random() * categoryKeyphrases.length)];

    // Generate search query
    const query = this.generateQuery(keyphrase, searchParams, surpriseMode);

    // Build YouTube URL
    const youtubeUrl = this.buildYouTubeURL(query, searchParams);

    return {
      id: Date.now() + Math.random(),
      map: this.currentMap,
      category: category,
      keyphrase: keyphrase,
      query: query,
      url: youtubeUrl,
      timestamp: new Date(),
      params: searchParams,
      contentFilter: contentFilter
    };
  }

  filterCategoriesByContent(categories, contentFilter) {
    switch (contentFilter) {
      case 'safe':
        return categories.filter(cat => cat !== 'nsfw');
      case 'nsfw':
        return categories.filter(cat => cat === 'nsfw');
      case 'retro':
        return categories.filter(cat => ['phone', 'camera'].includes(cat));
      default:
        return categories;
    }
  }

  generateQuery(keyphrase, searchParams, surpriseMode = false) {
    let query = keyphrase.phrase;

    // Handle special date format patterns first for Map 3 and Map 2
    if (keyphrase.needsDateFormat) {
      query = this.handleSpecialDateFormats(keyphrase, surpriseMode);
      return this.finalizeQuery(query, searchParams);
    }

    // Handle YMD (Year Month Day) patterns first
    query = this.handleYMDPatterns(query, surpriseMode);

    // Handle YYYY patterns (Year only)
    query = this.handleYearPatterns(query, surpriseMode);

    // Handle HMS patterns (Hour Minute Second)
    query = this.handleTimePatterns(query);

    // Handle variables and ranges
    if (keyphrase.variable && keyphrase.variable !== 'DATE') {
      if (keyphrase.range) {
        // Generate random number in range
        const [start, end] = keyphrase.range.split('-');
        const num = this.generateRandomInRange(start, end);
        query = query.replace('XXXX', num.toString().padStart(4, '0'));
        query = query.replace('XXX', num.toString().padStart(3, '0'));
        query = query.replace('XX', num.toString().padStart(2, '0'));
      } else if (keyphrase.chars) {
        // Generate random character from specified set
        const chars = keyphrase.chars.includes('-') ?
          'ABCDEF0123456789' : keyphrase.chars;
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        query = query.replace('XX', randomChar + Math.floor(Math.random() * 10));
      } else if (keyphrase.format) {
        // Handle date formats
        query = this.generateDateFormat(keyphrase.format, surpriseMode);
      } else {
        // Handle generic variables
        query = query.replace('XXXXXXXX', this.generateRandomDateForVariable(surpriseMode));
        query = query.replace('XXXX', Math.floor(Math.random() * 10000).toString().padStart(4, '0'));
        query = query.replace('XXX', Math.floor(Math.random() * 1000).toString().padStart(3, '0'));
        query = query.replace('XX', Math.floor(Math.random() * 100).toString().padStart(2, '0'));
        query = query.replace('X', Math.floor(Math.random() * 10).toString());
      }
    }

    // Handle date placeholders for Map 3 (legacy method)
    if (this.currentMap === '3') {
      query = this.handleMap3Dates(query, surpriseMode);
    }

    return this.finalizeQuery(query, searchParams);
  }

  handleSpecialDateFormats(keyphrase, surpriseMode = false) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    let year;
    if (keyphrase.isMap2) {
      // Map 2: Old videos (2008-2022)
      year = surpriseMode ?
        Math.floor(Math.random() * 15) + 2008 : // 2008-2022
        Math.floor(Math.random() * 15) + 2008;
    } else {
      // Map 3: Retro videos (2006-2008)  
      year = surpriseMode ?
        Math.floor(Math.random() * 3) + 2006 : // 2006-2008
        Math.floor(Math.random() * 3) + 2006;
    }

    const month = months[Math.floor(Math.random() * 12)];
    const day = Math.floor(Math.random() * 28) + 1;
    const formattedDay = day.toString().padStart(2, '0');

    const dateString = `${month} ${formattedDay}, ${year}`;

    if (keyphrase.phrase === '"For') {
      return `"For ${dateString}"`;
    } else if (keyphrase.phrase === '"Recorded on') {
      return `"Recorded on ${dateString}${keyphrase.suffix || ''}"`;
    } else if (keyphrase.phrase === '"Month DD, YYYY"') {
      return `"${dateString}"`;
    }

    return keyphrase.phrase;
  }

  finalizeQuery(query, searchParams) {
    // Add quotes if specified
    if (searchParams.useQuotes && !query.includes('"') && Math.random() > 0.3) {
      query = `"${query}"`;
    }

    // Add before filter for maps 2 and 3
    if (searchParams.useBefore) {
      const year = this.getRandomYear();
      query += ` before:${year}`;
    }

    return query;
  }

  generateRandomInRange(start, end) {
    const startNum = parseInt(start);
    const endNum = parseInt(end);
    return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
  }

  // Handle YMD patterns (Year Month Day = YYYYMMDD)
  handleYMDPatterns(query, surpriseMode = false) {
    // YMD standalone pattern
    if (query.includes('YMD') && !query.includes('YYYY')) {
      const dateString = this.generateRandomDateString(surpriseMode);
      query = query.replace(/YMD/g, dateString);
    }

    // Specific YMD patterns
    query = query.replace(/WIN YMD/g, `WIN ${this.generateRandomDateString(surpriseMode)}`);
    query = query.replace(/VID YMD/g, `VID ${this.generateRandomDateString(surpriseMode)}`);
    query = query.replace(/Capture YMD/g, `Capture ${this.generateRandomDateString(surpriseMode)}`);
    query = query.replace(/InShot YMD/g, `InShot ${this.generateRandomDateString(surpriseMode)}`);
    query = query.replace(/AUD-YMD/g, `AUD-${this.generateRandomDateString(surpriseMode)}`);
    query = query.replace(/WP YMD/g, `WP ${this.generateRandomDateString(surpriseMode)}`);
    query = query.replace(/GMTYMD/g, `GMT${this.generateRandomDateString(surpriseMode)}`);
    query = query.replace(/"Video YMD"/g, `"Video ${this.generateRandomDateString(surpriseMode)}"`);

    return query;
  }

  // Handle YYYY patterns (Year only)
  handleYearPatterns(query, surpriseMode = false) {
    const year = this.generateRandomYear(surpriseMode);
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;

    const monthStr = month.toString().padStart(2, '0');
    const dayStr = day.toString().padStart(2, '0');

    // YYYY MM DD patterns
    query = query.replace(/WhatsApp Video YYYY MM DD/g, `WhatsApp Video ${year} ${monthStr} ${dayStr}`);
    query = query.replace(/Desktop YYYY MM DD/g, `Desktop ${year} ${monthStr} ${dayStr}`);

    // YYYY MM patterns  
    query = query.replace(/KakaoTalk Video YYYY MM/g, `KakaoTalk Video ${year} ${monthStr}`);

    // YYYY patterns (year only)
    if (query.includes('WhatsApp Video YYYY') && !query.includes('MM')) {
      query = query.replace(/WhatsApp Video YYYY/g, `WhatsApp Video ${year}`);
    }

    // Handle standalone YYYY in phrases
    query = query.replace(/YYYY-MM-DD/g, `${year}-${monthStr}-${dayStr}`);

    return query;
  }

  // Handle HMS patterns (Hour Minute Second = HHMMSS)
  handleTimePatterns(query) {
    if (query.includes('HMS')) {
      const hour = Math.floor(Math.random() * 24).toString().padStart(2, '0');
      const minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');
      const second = Math.floor(Math.random() * 60).toString().padStart(2, '0');
      const timeString = `${hour}${minute}${second}`;

      query = query.replace(/HMS XXXXXX/g, `HMS ${timeString}`);
      query = query.replace(/HMS/g, `HMS ${timeString}`);
    }

    return query;
  }

  generateRandomDateString(surpriseMode = false) {
    let year, month, day;

    if (surpriseMode) {
      // For surprise mode, use wider range
      year = Math.floor(Math.random() * 20) + 2005; // 2005-2024
    } else {
      // Based on current map
      switch (this.currentMap) {
        case '1': // Recent videos
          year = Math.floor(Math.random() * 2) + 2024; // 2024-2025
          break;
        case '2': // Old videos
          year = Math.floor(Math.random() * 15) + 2008; // 2008-2022
          break;
        case '3': // Retro videos
          year = Math.floor(Math.random() * 3) + 2006; // 2006-2008
          break;
        default:
          year = Math.floor(Math.random() * 10) + 2015; // 2015-2024
      }
    }

    month = Math.floor(Math.random() * 12) + 1;
    day = Math.floor(Math.random() * 28) + 1; // Safe day range for all months

    return `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
  }

  generateRandomYear(surpriseMode = false) {
    if (surpriseMode) {
      return Math.floor(Math.random() * 20) + 2005; // 2005-2024
    }

    switch (this.currentMap) {
      case '1': // Recent videos
        return Math.floor(Math.random() * 2) + 2024; // 2024-2025
      case '2': // Old videos  
        return Math.floor(Math.random() * 15) + 2008; // 2008-2022
      case '3': // Retro videos
        return Math.floor(Math.random() * 3) + 2006; // 2006-2008
      default:
        return Math.floor(Math.random() * 10) + 2015; // 2015-2024
    }
  }

  generateRandomDateForVariable(surpriseMode = false) {
    // This is for XXXXXXXX patterns that should be dates
    return this.generateRandomDateString(surpriseMode);
  }

  generateRandomDate() {
    // This function is kept for backward compatibility
    return this.generateRandomDateString();
  }

  generateDateFormat(format, surpriseMode) {
    const dateStr = this.generateRandomDateString(surpriseMode);

    switch (format) {
      case 'InShot_YYYYMMDD':
        return `InShot_${dateStr}`;
      case 'PXL_YYYYMMDD':
        // PXL format: PXL_YYYYMMDD_HHMMSS
        const hour = Math.floor(Math.random() * 24).toString().padStart(2, '0');
        const minute = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        const second = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        return `PXL_${dateStr}_${hour}${minute}${second}`;
      case 'WIN_YYYYMMDD':
        return `WIN ${dateStr}`;
      default:
        return format.replace('YYYYMMDD', dateStr);
    }
  }

  handleMap3Dates(query, surpriseMode) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    const year = surpriseMode ?
      Math.floor(Math.random() * 3) + 2006 : // 2006-2008
      Math.floor(Math.random() * 3) + 2006;

    const month = months[Math.floor(Math.random() * 12)];
    const day = Math.floor(Math.random() * 28) + 1; // Safe day range

    // Handle "Month DD, YYYY" pattern properly
    query = query.replace(/Month DD, YYYY/g, `${month} ${day.toString().padStart(2, '0')}, ${year}`);

    // Handle specific patterns that include dates
    query = query.replace(/\"For Month DD, YYYY\"/g, `"For ${month} ${day.toString().padStart(2, '0')}, ${year}"`);
    query = query.replace(/\"Recorded on Month DD, YYYY using a Flip Video Camcorder\"/g,
      `"Recorded on ${month} ${day.toString().padStart(2, '0')}, ${year} using a Flip Video Camcorder"`);

    // Handle standalone YYYY that hasn't been replaced yet
    if (query.includes('YYYY') && !query.includes(year.toString())) {
      query = query.replace(/YYYY/g, year.toString());
    }

    return query;
  }

  getRandomYear() {
    const yearRange = this.elements.yearRange.value;

    if (yearRange === 'any') {
      return Math.floor(Math.random() * 19) + 2005; // 2005-2023
    }

    if (yearRange.includes('-')) {
      const [start, end] = yearRange.split('-').map(y => parseInt(y));
      return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    return parseInt(yearRange);
  }

  buildYouTubeURL(query, searchParams) {
    const baseUrl = 'https://www.youtube.com/results?search_query=';
    const sortParam = this.elements.sortMethod.value;

    let url = baseUrl + encodeURIComponent(query);

    // Add sort parameter
    if (sortParam !== 'relevance') {
      const sortMap = {
        'upload_date': '&sp=CAI%253D',
        'view_count': '&sp=CAM%253D',
        'rating': '&sp=CAE%253D'
      };
      url += sortMap[sortParam] || '';
    }

    // Add advanced filters
    const filters = this.buildAdvancedFilters();
    if (filters) {
      url += filters;
    }

    return url;
  }

  buildAdvancedFilters() {
    let filterString = '';

    // Duration filter
    const duration = this.elements.duration?.value;
    if (duration && duration !== 'any') {
      const durationMap = {
        'short': '&sp=EgIYAQ%253D%253D',     // Under 4 minutes
        'medium': '&sp=EgIYAw%253D%253D',    // 4-20 minutes  
        'long': '&sp=EgIYAg%253D%253D'       // Over 20 minutes
      };
      filterString += durationMap[duration] || '';
    }

    // Upload time filter
    const uploadTime = this.elements.uploadTime?.value;
    if (uploadTime && uploadTime !== 'any') {
      const timeMap = {
        'hour': '&sp=EgIIAQ%253D%253D',      // Past hour
        'day': '&sp=EgIIAg%253D%253D',       // Past 24 hours
        'week': '&sp=EgIIAw%253D%253D',      // Past week
        'month': '&sp=EgIIBA%253D%253D',     // Past month
        'year': '&sp=EgIIBQ%253D%253D'       // Past year
      };
      filterString += timeMap[uploadTime] || '';
    }

    // Quality filter
    const quality = this.elements.quality?.value;
    if (quality && quality !== 'any') {
      const qualityMap = {
        'hd': '&sp=EgIgAQ%253D%253D',        // HD
        '4k': '&sp=EgJAATAB',                // 4K
        'low': ''  // No specific filter for low quality
      };
      filterString += qualityMap[quality] || '';
    }

    return filterString;
  }

  addSearchToResults(search) {
    if (this.elements.searchResults.querySelector('.empty-state')) {
      this.elements.searchResults.innerHTML = '';
    }

    const searchElement = this.createSearchElement(search);
    this.elements.searchResults.appendChild(searchElement);

    // Save to history
    this.searchHistory.unshift(search);
    if (this.searchHistory.length > 100) {
      this.searchHistory = this.searchHistory.slice(0, 100);
    }

    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));

    // Increment total searches
    this.totalSearches++;
    localStorage.setItem('totalSearches', this.totalSearches.toString());
  }

  createSearchElement(search) {
    const div = document.createElement('div');
    div.className = 'search-item';

    const mapName = {
      '1': 'Map 1: New Videos',
      '2': 'Map 2: Old Videos',
      '3': 'Map 3: Retro (2006-2008)'
    };

    const categoryEmojis = {
      smartphone: '📱',
      camera: '📷',
      formats: '🎬',
      apps: '📲',
      gaming: '🎮',
      webcam: '💻',
      misc: '🔧',
      phone: '📞',
      nsfw: '🔞'
    };

    const warningBadge = search.keyphrase.warning ?
      `<span class="warning-badge" title="${search.keyphrase.warning}">⚠️ NSFW</span>` : '';

    div.innerHTML = `
            <div class="search-header">
                <div class="search-title">
                    ${categoryEmojis[search.category] || '🔍'} ${search.keyphrase.phrase}
                    ${warningBadge}
                </div>
                <div class="search-meta">
                    <span>${mapName[search.map]}</span>
                    <span>${search.category.toUpperCase()}</span>
                    <span>${search.timestamp.toLocaleTimeString('en-US')}</span>
                    ${search.contentFilter && search.contentFilter !== 'all' ?
        `<span class="filter-badge">${search.contentFilter.toUpperCase()}</span>` : ''}
                </div>
            </div>
            
            <div class="search-query">${search.query}</div>
            
            <div class="search-actions">
                <button class="action-btn copy-btn" onclick="navigator.clipboard.writeText('${search.query}')">
                    <i class="fas fa-copy"></i>
                    Copy Query
                </button>
                <button class="action-btn youtube-btn" onclick="window.open('${search.url}', '_blank')">
                    <i class="fab fa-youtube"></i>
                    Open on YouTube
                </button>
                <button class="action-btn" onclick="navigator.clipboard.writeText('${search.url}')">
                    <i class="fas fa-link"></i>
                    Copy URL
                </button>
            </div>
        `;

    return div;
  }

  clearResults() {
    this.elements.searchResults.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-ghost"></i>
                <p>No searches generated yet</p>
                <small>Use the buttons above to start discovering hidden videos!</small>
            </div>
        `;
  }

  updateStats() {
    this.elements.totalSearches.textContent = this.totalSearches;

    // Add some animations
    this.elements.totalSearches.classList.add('neon-glow');
    setTimeout(() => {
      this.elements.totalSearches.classList.remove('neon-glow');
    }, 1000);
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.recyclerBinExplorer = new YouTubeRecycleBinExplorer();

  // Add some easter eggs
  console.log(`
    ╔══════════════════════════════════════════════════════════════════════════════╗
    ║                      YouTube Recycle Bin Explorer                            ║
    ║                                                                              ║
    ║  "93% of all YouTube videos have under 1000 views"                          ║
    ║  "~6 billion videos have less than 100 views"                               ║
    ║                                                                              ║
    ║  You are about to explore the largest video graveyard on the internet...    ║
    ║  Handle with care and respect people's privacy! 🕵️‍♂️                          ║
    ║                                                                              ║
    ║  Inspired by KVN AUST's research                                             ║
    ╚══════════════════════════════════════════════════════════════════════════════╝
    `);

  // Add konami code easter egg
  let konamiCode = [];
  const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
      konamiCode.shift();
    }

    if (konamiCode.toString() === konami.toString()) {
      // Activate super surprise mode
      document.body.style.filter = 'hue-rotate(180deg) saturate(150%)';
      document.querySelector('.header h1').classList.add('glitch');

      setTimeout(() => {
        window.recyclerBinExplorer.generateMultipleSearches(20);
      }, 1000);

      setTimeout(() => {
        document.body.style.filter = '';
        document.querySelector('.header h1').classList.remove('glitch');
      }, 5000);
    }
  });
});
