require "nokogiri"

class MySubnavGenerator < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config) 

    site.pages.each do |page|
      if page.ext == ".md" and page.data.has_key? 'generate_subnav'
        doc = Nokogiri::HTML(parser.convert(page['content']))
        page.data["subnav"] = []
        doc.css('h1').each do |heading|
          puts "#{ heading.text }: #{ heading['id'] }"
        end
        doc.css('h2').each do |heading|
          page.data["subnav"] << { 
            "title" => heading.text, 
            "url" => [page.url, heading['id']].join("#") 
          } 
        end
      end
    end
  end
end