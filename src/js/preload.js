// PreloadJS v1.0.0

class PreloadJS {
  constructor(options) {
    // Set default options
    this.options = {
      timeout: 5000, // 5 seconds
      onProgress: null,
      onComplete: null,
      onTimeout: null
    };

    // Override default options with user-defined options
    Object.assign(this.options, options);

    // Create loading bar element
    this.loadingBar = document.createElement("div");
    this.loadingBar.style.width = "0%";
    this.loadingBar.style.height = "5px";
    this.loadingBar.style.backgroundColor = "#3498db";
    this.loadingBar.style.position = "fixed";
    this.loadingBar.style.top = "0";
    this.loadingBar.style.left = "0";
    this.loadingBar.style.zIndex = "9999";

    // Create loading text element
    this.loadingText = document.createElement("div");
    this.loadingText.style.color = "#333";
    this.loadingText.style.fontSize = "14px";
    this.loadingText.style.position = "fixed";
    this.loadingText.style.top = "5px";
    this.loadingText.style.left = "0";
    this.loadingText.style.padding = "0 5px";
    this.loadingText.style.zIndex = "9999";

    // Append loading bar and text to the body element
    document.body.appendChild(this.loadingBar);
    document.body.appendChild(this.loadingText);

    // Set total number of assets
    this.totalAssets = document.images.length +
                       document.scripts.length +
                       document.styleSheets.length;

    // Set number of assets loaded
    this.assetsLoaded = 0;

    // Preload assets
    this.preload();
  }

  // Preload assets method
  preload() {
    // Get all images
    let images = document.images;

    // Loop through images and preload
    for (let i = 0; i < images.length; i++) {
      let img = new Image();
      img.src = images[i].src;
      img.onload = this.assetLoaded.bind(this);
      img.onerror = this.assetLoaded.bind(this);
    }

    // Get all scripts
    let scripts = document.scripts;

    // Loop through scripts and preload
    for (let i = 0; i < scripts.length; i++) {
      let script = document.createElement("script");
      script.src = scripts[i].src;
      script.onload = this.assetLoaded.bind(this);
      script.onerror = this.assetLoaded.bind(this);
      document.head.appendChild(script);
    }

    // Get all style sheets
    let styleSheets = document.styleSheets;

    // Loop through style sheets and preload
        for (let i = 0; i < styleSheets.length; i++) {
          let link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = styleSheets[i].href;
          link.onload = this.assetLoaded.bind(this);
          link.onerror = this.assetLoaded.bind(this);
          document.head.appendChild(link);
        }

        // Set timeout
        this.timeout = setTimeout(() => {
          if (this.options.onTimeout) {
            this.options.onTimeout();
          }
        }, this.options.timeout);
      }

      // Asset loaded method
      assetLoaded() {
        // Increment number of assets loaded
        this.assetsLoaded++;

        // Calculate percentage of assets loaded
        let percentage = (this.assetsLoaded / this.totalAssets) * 100;

        // Update loading bar width
        this.loadingBar.style.width = `${percentage}%`;

        // Update loading text
        this.loadingText.innerHTML = `${Math.round(percentage)}%`;

        // Check if all assets have loaded
        if (this.assetsLoaded === this.totalAssets) {
          // Clear timeout
          clearTimeout(this.timeout);

          // Remove loading bar and text
          document.body.removeChild(this.loadingBar);
          document.body.removeChild(this.loadingText);

          // Call onComplete callback
          if (this.options.onComplete) {
            this.options.onComplete();
          }
        }

        // Call onProgress callback
        if (this.options.onProgress) {
          this.options.onProgress(percentage);
        }
      }
    }
