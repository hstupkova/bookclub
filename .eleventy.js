module.exports = function(eleventyConfig) {

  // Výchozí výstupní složka: _site
  
  // Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");
	
	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

  
  return {
		// možné formáty šablon
		templateFormats: ["njk","html", "liquid", "md"],
		
		// jako šablonovací jazyk zvolíme Nunjucks`
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
  }

};

