module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/icon");
    
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      }
    };
  };