require "nokogiri"

class MySubnavGenerator < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config) 

    site.pages.each do |page|
      if page.ext == ".md" and page.data.has_key? 'generate_subnav'
        doc = Nokogiri::HTML(parser.convert(page['content']))
        page.data["subnav"] = []
        doc.css('h1').each do |heading1|
          # self.collect_headers()
          h2s = []
          # This is an XPath expression that selects all the h2s between 
          # the h1 with the specified id and the next h1
          xpath = "//h2[preceding-sibling::h1[1][@id=\"#{heading1['id']}\"]]"

          doc.xpath(xpath).each do |heading2|
            h3s = []
            xpath = "//h3[preceding-sibling::h2[1][@id=\"#{heading2['id']}\"]]"

            doc.xpath(xpath).each do |heading3|
              h3s << self.build_link(heading3)
            end

            h2_link = self.build_link(heading2)
            h2_link["subnav"] = h3s
            h2s << h2_link
          end

          h1_link = self.build_link(heading1)
          h1_link["subnav"] = h2s
          page.data["subnav"] << h1_link
        end
      end
    end
  end

  def collect_headers(header, index, max_depth)
    child_headers = []
    if index >= max_depth
      puts "bleh"
    else
      xpath = "//h2[preceding-sibling::h1[1][@id=\"#{heading1['id']}\"]]"
    end
  end

  def build_link(heading)
    link = { 
      "title" => heading.text, 
      "url" => "#" + heading['id'] 
    }
  end
end