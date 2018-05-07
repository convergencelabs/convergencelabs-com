require "nokogiri"

class MySubnavGenerator < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config) 

    site.pages.each do |page|
      if page.ext == ".md" and page.data.has_key? 'generate_subnav'
        doc = Nokogiri::HTML(parser.convert(page['content']))
        page.data["subnav"] = []
        doc.css('h1').each do |heading1|
          page.data["subnav"] << self.collect_headers(doc, heading1, 1, 2)
        end
      end
    end
  end

  # Recursively collect header and subheader information
  # doc       the HTML representation of the original markdown document
  # header    the current header element (h1, h2, h3 etc)
  # index     the current header's index
  # max_depth the maximum header index to display (e.g. 2 will collect h2s but not h3s)
  def collect_headers(doc, header, index, max_depth)
    if index >= max_depth
      return self.build_link(header)
    else
      child_headers = []
      # This is an XPath expression that selects all the h2s between 
      # the h1 with the specified id and the next h1
      xpath = "//h#{index + 1}[preceding-sibling::h#{index}[1][@id=\"#{header['id']}\"]]"

      # Collect the subheaders and recurse
      doc.xpath(xpath).each do |sub_heading|
        child_headers << self.collect_headers(doc, sub_heading, index + 1, max_depth)
      end

      link = self.build_link(header)
      link["subnav"] = child_headers
      return link
    end
  end

  def build_link(heading)
    link = { 
      "title" => heading.text, 
      "url" => "#" + heading['id'] 
    }
  end
end