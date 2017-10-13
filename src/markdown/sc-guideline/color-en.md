<div class="guideline color">
  <div class="container">
    <h1>Color</h1>
    <div class="row">
      <div class="col-xs-12">
        <h3>About</h3>
        <p>Color is the most important visual channel in a visual experience, but also an important means of assisting product
          design to accomplish its efficacy and purpose. After studying the visual norms of the mainstream platform and the
          conclusions drawn in practice, Modular Design has established a set of palette systems. This system has the following
          characteristics:
        </p>
        <ul>
          <li>consider the brand's identity, combined with business and interaction needs, with a view to effective information
            transmission, operational guidelines, interactive feedback</li>
          <li>The color should match the product positioning and conform to the user's psychological cognition</li>
          <li>Avoid using complex swatches as much as possible and giving them reason to avoid wasting design effort</li>
          <li>strive for barrier-free design, to comply with WCAG 2.0 standards, to ensure adequate contrast, so that color is
            more likely to be identified as obstacles</li>
        </ul>
        <hr>
        <h3>Neutral Colors</h3>
        <p>Gray as a neutral color in the product design is indispensable, its use is conducive to the key content of the set
          off and functional guidance. Appropriate grayscale should be used depending on the use scenario. Modular Design
          in the actual use of the process of precipitation out of the following four categories (copy, icon, border line,
          background) 10 gray.</p>
        <p class="color-gray">Note: In the design, in addition to the designated 10 gray, can no longer use other gray.</p>
        <hr>
        <h3>Neutral Color vs. Alpha Black</h3>
        <p>In most cases, the interface elements will be launched in a pure white background. But there are some cases, such
          as the background with its own gray background, color background, picture background ... ... in order to meet the
          different colors in different backgrounds can be displayed in normal colors, it is recommended to use G-line gray
          with the transparency Of the black (BA color) to fill the color. The correspondence between G and BA is shown in
          the table.</p>
        <table class="table sc">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Hex</th>
              <th>BA color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="color" style="background: #191919; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 100</td>
              <td>text</td>
              <td>Color for Title & headlines that need to be emphasised</td>
              <td>#191919</td>
              <td class="text-nowrap">BA 90
                <br/> Alpha 0.9</td>
              <td>
                <div class="alpha" style="background-color: rgba(0,0,0,0.9);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #333333; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 90</td>
              <td>text</td>
              <td>The primary color for content text
                <span class="label label-warning">Default text color</span>
              </td>
              <td>#333333</td>
              <td>BA 80
                <br/> Alpha 0.8</td>
              <td class="text-nowrap">
                <div class="alpha" style="background-color: rgba(0,0,0,0.8);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #555555; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 80</td>
              <td>text, icon</td>
              <td>For content text but less important; active icons</td>
              <td>#555555</td>
              <td class="text-nowrap">BA 65
                <br/> Alpha 0.65</td>
              <td>
                <div class="alpha" style="background-color: rgba(0,0,0,0.65);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #888888; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 70</td>
              <td>text</td>
              <td>Captions & descriptive content, less attractive.</td>
              <td>#888888</td>
              <td class="text-nowrap">BA 42
                <br/> Alpha 0.42</td>
              <td>
                <div class="alpha" style="background-color: rgba(0,0,0,0.42);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #bbbbbb; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 60</td>
              <td>text</td>
              <td>Hint/placeholder text (in textbox, etc.), captions & descriptive text but need to be weakend.</td>
              <td>#BBBBBB</td>
              <td class="text-nowrap">BA 27
                <br/> Alpha 0.27</td>
              <td>
                <div class="alpha" style="background-color: rgba(0,0,0,0.27);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #cccccc; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 50</td>
              <td>text, icon</td>
              <td>For disabled text; for inactive icons</td>
              <td>#CCCCCC</td>
              <td class="text-nowrap">BA 20
                <br/> Alpha 0.2</td>
              <td>
                <div class="alpha" style="background-color: rgba(0,0,0,0.2);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #dbdbdb; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 30</td>
              <td>border</td>
              <td>For border of default button</td>
              <td>#DBDBDB</td>
              <td>BA 14
                <br/> Alpha 0.14</td>
              <td class="text-nowrap">
                <div class="alpha" style="background-color: rgba(0,0,0,0.14);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #e8e8e8; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 30</td>
              <td>border</td>
              <td>Default color for dividers and borders</td>
              <td>#E8E8E8</td>
              <td>BA 09
                <br/> Alpha 0.09</td>
              <td class="text-nowrap">
                <div class="alpha" style="background-color: rgba(0,0,0,0.09);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #f5f5f5; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 20</td>
              <td>border, background</td>
              <td>Default background color of interface and invalid background; for secondary dividers</td>
              <td>#F5F5F5</td>
              <td class="text-nowrap">BA 05
                <br/> Alpha 0.05</td>
              <td>
                <div class="alpha" style="background-color: rgba(0,0,0,0.05);"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="color" style="background: #fafafa; height: 32px; width: 32px; border-radius: 50%;"></div>
              </td>
              <td>G 10</td>
              <td>background</td>
              <td>Secondary background color</td>
              <td>#FAFAFA</td>
              <td class="text-nowrap">BA 02
                <br/> Alpha 0.02</td>
              <td>
                <div class="alpha" style="background-color: rgba(0,0,0,0.02);"></div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
        <h3>WCAG 2.0</h3>
        <p>Based on the requirements of the WCAG 2.0 barrier design, there is a certain contrast between the text and the background
          color, which maintains at least a 4.5: 1 contrast ratio (AA level), and the text content maintains a AAA level
          of 7: 1 or more.</p>
        <p>Use the
          <a href="http://leaverou.github.io/contrast-ratio/#%23454545-on-%23fff">tool</a> for color contrast calibration:</p>
        <hr>
        <h3>Branding Colors</h3>
        <p>Brand color is one of the most intuitive visual elements that embody product characteristics and communication ideas.
          Its main application in the key point of action and operational status, highlight the important information such
          as the scene.</p>
        <table class="table sc">
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>description</th>
              <th>hex</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #FF5722;"></div>
              </td>
              <td>SO 60</td>
              <td>Shopee brand color, but also the theme of many product lines color</td>
              <td>#FF5722</td>
            </tr>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #00BFA5;"></div>
              </td>
              <td>SC 60</td>
              <td>Brand auxiliary color, mainly used for logistics and chat interface (embedded)</td>
              <td>#00BFA5</td>
            </tr>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #0055AA;"></div>
              </td>
              <td>SB 60</td>
              <td>Brand auxiliary color, commonly used to suggest male / neutral operating class information</td>
              <td>#0055AA</td>
            </tr>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #D0011B;"></div>
              </td>
              <td>SR 60</td>
              <td>Shopee mall brand color</td>
              <td>#D0011B</td>
            </tr>
          </tbody>
        </table>
        <hr>
        <h3>Functional Colors</h3>
        <p>UI design, the stable color in addition to the neutral color there are specific meaning of the functional color,
          such color play function information, on behalf of a state and so on. Mainly used in message notification, feedback
          reminders, forms check the success of such scenes, mistakes, failures, reminders, links and other elements.</p>
        <table class="table sc">
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>description</th>
              <th>hex</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #55cc77;"></div>
              </td>
              <td>GN 60</td>
              <td>Indicates that the operation is successful, pass, good state color</td>
              <td>#55CC77</td>
            </tr>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #1791F2;"></div>
              </td>
              <td>B 60</td>
              <td>Auxiliary description information, hyperlinks</td>
              <td>#1791F2</td>
            </tr>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #FFBF00;"></div>
              </td>
              <td>Y 60</td>
              <td>Warning color</td>
              <td>#FFBF00</td>
            </tr>
            <tr>
              <td>
                <div class="color-circle-32" style="background: #FF4742;"></div>
              </td>
              <td>R 60</td>
              <td>Error / fail color</td>
              <td>#FF4742</td>
            </tr>
          </tbody>
        </table>
        <h3>Full Shopee color palette</h3>
        <p>Shopee product design color plate, for the future of new pages and controls the use of color to try to use the following color plate color values to ensure the unity of the overall color.</p>
        <h5>Gray (G)</h5>
        <div class="color-square-80" style="background: #FAFAFA;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #F5F5F5;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #E8E8E8;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #DBDBDB;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #CCCCCC;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #BBBBBB;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #888888;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #555555;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #333333;">G 10 <br>#FAFAFA</div>
        <div class="color-square-80" style="background: #191919;">G 10 <br>#FAFAFA</div>
      </div>
    </div>
  </div>
</div>