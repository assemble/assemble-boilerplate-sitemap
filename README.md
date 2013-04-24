# [assemble-examples-sitemap v0.1.0](http://github.com/assemble/assemble-examples-sitemap) [![Build Status](https://travis-ci.org/assemble/assemble-examples-basic.png)](https://travis-ci.org/assemble/assemble-examples-basic)

> [Assemble][assemble] is a Grunt plugin that makes it dead simple to build modular sites and components from reusable **templates** and **data**.

The example shows how to generate a **sitemap from a template**:

* `sitemap.hbs`, our template: This is the Handlebars template for our sitemap, the only file we really "need". The other files are used for examples. 
* `sitemap.json`, for mock data to populate the sitemap. An example is also provided for creating a sitemap using only the template and built-in variables. 
* `config.yml`, optional example config data for the Assemble to task, like the paths to our sitemap files.

## Getting Started

* **[Download this project][download]** and unzip it into a new folder.  
* In the project folder, run `npm install` to install [Assemble][assemble], [Grunt](http://gruntjs.com/) and any other dependencies.
* Once the dependencies are installed you may run `grunt assemble` to build the example project.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile][gruntfile], as well as install and use Grunt plugins. 



## The "assemble" task

### Overview
In the project's Gruntfile, the example `assemble` task is pre-loaded with paths and options following standard Grunt.js conventions:

```js
// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  assemble: {
    options: grunt.file.readYAML('config.yml'), 
    component: {
      files: {
        'Sitemap.xml': ['src/sitemap.hbs']
      }
    }
  }
});
```
Inside `config.yml` you will notice that underscore templates are used as a convenience to pull metadata from the `package.json` file. This follows conventions from [task-manifest](), but it's only a preference. All of this can be moved into the Assemble options in the Gruntfile itself, but we decided to keep the external config file as an example in case your project has more configuration and metadata to maintain. Feel free to move this data into the task and get rid of the file.

``` yaml
# Metadata
component:
  name: <%= pkg.name %>
  description: <%= pkg.description %>

# Assemble Options 
flatten: true
data: src/sitemap.json
ext: .xml
```


### Options
Visit [Assemble's documentation][wiki] to learn about the available task and target options as well as how to configure them. Also, if are not yet familiar with Grunt.js, please consider visiting the Grunt documentation to learn more about [configuring tasks][configuring-tasks]. 

Here we're only going to cover the options used in this example project:

#### `data`
Type: `Object|Array` (optional)
Default: `src/data`

Retrieves data from any specified `JSON` and/or `YAML` files to populate the templates when rendered. Data gets passed through the `data` object to the options on the assemble task, then to the context in your templates. 

Learn more about [data][data]

#### `ext`
Type: `String` (optional)
Default: `.html`

Specify the file extension for destination file(s), which in this case is `.xml`.



## Sitemap Documentation

Here is [what we are building](./Sitemap.xml). Of course, ours will be more detailed but as a bare minimum according to [sitemaps.org](sitemaps.org), a sitemap must include the following:

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://github.com/assemble/</loc>
  </url>
</urlset> 
```
After a valid `<?xml>` declaration:
* It must begin with an opening `<urlset>` tag and end with a closing `</urlset>` tag.
* Specify the namespace (protocol standard) within the `<urlset>` tag.
* Include a `<url>` entry for each URL, as a parent XML tag.
* Include a `<loc>` child entry for each `<url>` parent tag.

All other tags are optional, for example:

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.example.com/</loc>
    <lastmod>2005-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset> 
```


### Reference


| Attribute | required  | Description |
| --------- | --------- | ----------- |
| `<urlset>`| required  | Encapsulates the file and references the current protocol standard. |
| `<url>`   | required  | Parent tag for each URL entry. The remaining tags are children of this tag. |
| `<loc>`   | required  | URL of the page. This URL must begin with the protocol (such as http) and end with a trailing slash, if your web server requires it. This value must be less than 2,048 characters. |
| `<lastmod>` | optional  | The date of last modification of the file. This date should be in <a href="http://www.w3.org/TR/NOTE-datetime">W3C Datetime</a> format. This format allows you to omit the time portion, if desired, and use YYYY-MM-DD. Note that this tag is separate from the If-Modified-Since (304) header the server can return, and search engines may use the information from both sources differently. |
| `<changefreq>` | optional  | How frequently the page is likely to change. This value provides general information to search engines and may not correlate exactly to how often they crawl the page. Valid values are: `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, `never`. The value "always" should be used to describe documents that change each time they are accessed. The value "never" should be used to describe archived URLs. Please note that the value of this tag is considered a _hint_ and not a command. Even though search engine crawlers may consider this information when making decisions, they may crawl pages marked "hourly" less frequently than that, and they may crawl pages marked "yearly" more frequently than that. Crawlers may periodically crawl pages marked "never" so that they can handle unexpected changes to those pages. |
| `<priority>` | optional | The priority of this URL relative to other URLs on your site. Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites—it only lets the search engines know which pages you deem most important for the crawlers. The default priority of a page is 0.5. Please note that the priority you assign to a page is not likely to influence the position of your URLs in a search engine's result pages. Search engines may use this information when selecting between URLs on the same site, so you can use this tag to increase the likelihood that your most important pages are present in a search index. Also, please note that assigning a high priority to all of the URLs on your site is not likely to help you. Since the priority is relative, it is only used to select between URLs on your site.

Get more info on [sitemaps.org](sitemaps.org).


## Authors

**Brian Woodward**

+ [http://github.com/doowb](http://github.com/doowb)  
+ [http://twitter.com/doowb](http://twitter.com/doowb)  

**Jon Schlinkert**

+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)  
+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)  


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Use [Assemble][assemble] to build and maintain your gh-pages, blog or documentation. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History
* 2013-04-24    v0.1.0    First commit. 