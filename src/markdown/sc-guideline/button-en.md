<div class="guideline buttons">
  <div class="container">
    <h1>Buttons</h1>
    <h3>Basic Buttons</h3>
    <p>Solid, Outline, Frameless</p>
    <div class="row">
      <div class="col-md-6">
        <table class="table sc">
          <thead>
            <tr>
              <th>Button</th>
              <th>Staus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Solid</td>
              <td>The most commonly used button, the background is filled with solid colors.</td>
            </tr>
            <tr>
              <td>Outline</td>
              <td>Background transparent buttons are often used on colored backgrounds.</td>
            </tr>
            <tr>
              <td>Frameless</td>
              <td>Visually impaired buttons, commonly used in the "cancel" operation that occurs in pairs with the "confirm"
                operation, or carries operational symbols</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-basic-buttons.svg" alt=" button basic demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Size</h3>
    <div class="row">
      <div class="col-md-6">
        <p>The base button contains three sizes: the default is medium size</p>
        <p>Apply the compact property to the button to change the left and right padding to 8px</p>
        <p>Applying the full-width property to the button makes the button width 100% of the parent container (this property
          allows the designer to freely specify the width of the button)</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-size.svg" alt="button size type demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Shape</h3>
    <div class="row">
      <div class="col-md-6">
        <p>The default button is a rounded rectangle (rounded arc is 2px); but for the button to add the round property, you
          can increase the button fillet so that the button presents a rounded edge.</p>
        <p>The size of the corner is 50%</p>
        <p class="hint">Note: You should limit the use of Round Button, limited to the display page rather than the function page. The current
          use of Round Button will only be applied to the landing page. In the function page is used in the non-standard
          approach should be removed slowly.</p>
      </div>
      <div class="col-md-5">
        <img src="/static/image/guideline-sc/sc-buttons-shape.svg" alt="button size type demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Text</h3>
    <div class="row">
      <div class="col-xs-6">
        <p>The default button font color is #555555 and the word weight is Medium (500). Different types of button text coloring
          is different, please press the button type to set. The text size is also adjusted based on the button size.</p>
        <table class="table sc">
          <thead>
            <tr>
              <th>Button ize</th>
              <th>Text size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Large</td>
              <td>14px</td>
            </tr>
            <tr>
              <td>Default</td>
              <td>13px</td>
            </tr>
            <tr>
              <td>Small</td>
              <td>12px</td>
            </tr>
          </tbody>
        </table>
        <p>Note: By using context constraints, you can set the Frameless style to uppercase. In addition, all the button case
          settings are capitalized.</p>
      </div>
    </div>
    <hr>
    <h3>Layout</h3>
    <div class="row">
      <div class="col-md-6">
        <p>Button content includes the following three: Text, SVG Icon + Text, Icon. No matter what the content, are required
          to maintain the horizontal and vertical visual center effect.</p>
        <p class="hint">Note: When the SVG icon is mixed with the text, the size should be the same as the text size (eg 14 words with 14
          * 14px icon) and remain vertically centered.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-layout.svg" alt="button layout demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Colors</h3>
    <div class="row">
      <div class="col-md-6">
        <p>The color attribute "color-" has different effects on different types of buttons.</p>
        <div style="height: 60px;"></div>
        <img src="/static/image/guideline-sc/sc-buttons-colors.svg" alt="button colors demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Status</h3>
    <p>The buttons in the page include five states:</p>
    <div class="row">
      <div class="col-md-6">
        <h4>Hover</h4>
        <table class="table sc">
          <thead>
            <tr>
              <th>Button</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-nowrap">Solid, Frameless</td>
              <td>Add a black mask with a transparency of 3% to the background</td>
            </tr>
            <tr>
              <td>Outline</td>
              <td>Add the same color mask as the "color-" attribute, with a transparency of 8%</td>
            </tr>
            <tr>
              <td>Danger</td>
              <td>Exchange the background color and content color</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-status.svg" alt="button status demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Active</h4>
        <table class="table sc">
          <thead>
            <tr>
              <th>Button</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-nowrap">Solid, Frameless</td>
              <td>Add a black mask with a transparency of 6% to the background</td>
            </tr>
            <tr>
              <td class="text-nowrap">Outline (default)</td>
              <td>The background color is replaced by the "color-" attribute, the same color is specified for the color fill;
                the text color is replaced by the background color as the default button text color #555555</td>
            </tr>
            <tr>
              <td class="text-nowrap">Outline (others)</td>
              <td>The background color is replaced with the "color-" attribute that specifies the same color for the color fill;
                the text color is replaced with white.</td>
            </tr>
            <tr>
              <td>Danger</td>
              <td>Add a black mask with a transparency of 6% to the background</td>
            </tr>
          </tbody>
        </table>
        <p>In addition, in order to enhance the Solid button click response, create a click into the sense, add the shadow,
          the parameters for the box-shadow: inset 0 1px 1px 0 rgba (0,0,0,0.05);</p>
      </div>
    </div>
    <div class="row">
      <h4>Disabled</h4>
      <div class="col-md-6">
        <table class="table sc">
          <thead>
            <tr>
              <th>Button</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-nowrap">Solid (default), Danger</td>
              <td>Add a black mask with a transparency of 6% to the background</td>
            </tr>
            <tr>
              <td class="text-nowrap">Outline (default)</td>
              <td>The background color is replaced by the "color-" attribute, the same color is specified for the color fill;
                the text color is replaced by the background color as the default button text color #555555</td>
            </tr>
            <tr>
              <td class="text-nowrap">Outline (others)</td>
              <td>The background color is replaced with the "color-" attribute that specifies the same color for the color fill;
                the text color is replaced with white.</td>
            </tr>
            <tr>
              <td>Danger</td>
              <td>Add a black mask with a transparency of 6% to the background</td>
            </tr>
          </tbody>
        </table>
        <p class="hint">Note: In order to achieve the natural, predictable goal, within the scope of the realization, all the button style
          changes in the dynamic effect should be gradually fade out.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p>For normal and disabled buttons, the mouse should be given a corresponding change to provide sufficient hints.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-status-disabled.svg" alt="button status disabled demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Loading</h3>
    <div class="row">
      <div class="col-md-6">
        <p>When the button is loaded:</p>
        <ol>
          <li>Over the button, cover the white cover with a transparency of 20% and restore the mouse to the default style.</li>
          <li>When the state is loaded, add the system default load animation (SVG) to the left of the button Text. If the text
            itself contains Icon on the left, loading the animation should replace the icon (for the button with no icon
            only).
          </li>
          <li>Load the animation itself size, color, style to be subject to the definition of the button itself</li>
          <li>The loaded button does not respond to any mouse operation</li>
        </ol>
        <p class="hint">Note: The loaded state does not change any of the attributes except the above settings. For example, for a fixed-size
          button, the loading state may cause changes in the width of the button, which is normal and reasonable.</p>
        <p class="hint">For more information on loading animations and more definitions, refer to the Animated chapter.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-loading.svg" alt="button loading demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Rich Content Buttons</h3>
    <div class="row">
      <div class="col-md-12">
        <p>In some cases, the button may contain descriptive text to supplement the explanatory button copy. In contrast to
          Pop-over, buttons containing descriptive text are more suitable for content that needs to be highlighted and displayed
          on the mobile side.</p>
        <p>Based on the button base style, you need to add the style of the description text and the need to redefine the Size,
          and Layout. Please refer to the following.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Text</h4>
        <p>Button text: 14px Medium, color to follow button style.</p>
        <p>Description text: 12px Regular, coloring the same color for the button text but containing 90% transparency.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-rich.svg" alt="rich content button demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Size</h4>
        <p>Height: The height of the Rich content button is defined by the content, see the height dimension</p>
        <p>Width: the default on both sides of the content to leave a certain padding; can also be applied Full width attribute
          to force the limited width</p>
        <p class="hint">Note: design and copy the need to work together to ensure that the length of the text and the button width of the
          match, to avoid the fold or button is too large situation.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-rich-size.svg" alt="rich content button demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Layout</h4>
        <p>Button layout support: Text, SVG Icon + Text. The latter has a greater impact on the visual layout of the buttons,
          please refer to the design annotation.</p>
        <p class="hint">Note: Like Round Button, the designer should strictly control the use of Rich Content Buttons. Rich Content Button
          because of its rich content, more suitable for the display page rather than functional pages.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-rich-layout.svg" alt="rich content button demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Buttons for Better Usability</h3>
    <div class="row">
      <div class="col-md-6">
        <h4>Color Contrast</h4>
        <p>In the button style of the increase and modify, should pay attention to maintain the front and back with a sufficient
          contrast to facilitate user identification. You can use the Color Contrast Analyzer to ensure that the color of
          the button meets the Web Content Accessibility Guide (WCAG) 2.0 AA standard.</p>
        <p>On the part of the color contrast, there are specific explanations in the color section. Learn more about the
          <a href="https://www.w3.org/Translations/WCAG20-zh/">WCAG 2.0 standard</a>
        </p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-usability-contrast.svg" alt="Usability button demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Help Users to glow</h4>
        <p>The buttons should be clear and easy to understand. So the button text and icon selection should be simple, direct
          as the primary condition.</p>
        <p>However, when the button itself is limited by space or context can not be clearly convey to the user the necessary
          information, may be considered with Pop-over with the use.</p>
        <p class="hint">Trigger timing: when the mouse is hovering or focusing.</p>
        <p class="hint">Note: Pop-over is a separate control. For a detailed definition of Pop-over, refer to the Pop-over section. And please
          follow the restrictions of the control itself, such as avoiding placing too many copies, or with the contents of
          the operation guide placed inside.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-usability-grow.svg" alt="Usability button demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Button Group</h3>
    <div class="row">
      <div class="col-md-6">
        <h4>"More Actions" Button Group</h4>
        <p>Common button groups, including main operations and additional operations. The additional operation is flipped in
          the lower triangle "▼", and the drop-down menu (Dropdown) is triggered in general.</p>
        <p>All button styles, the state follows the button default rules. The buttons that hold "▼" need to be fixed-width,
          the width is the same as the button height.</p>
        <p class="hint">Note: When using this type of button group, it should be noted that the relationship between the main operation and
          the additional operation should be: the additional operation is different from the main operation, but the use
          of low frequency, or the main operation of the upgrade, etc., so additional operations on the priority Weak, can
          be hidden from the interface.</p>
        <p class="hint">Style, Button group combination of the intersection of the edges connected to the angle should be corrected back
          to 0px; for solid color filled Solid button, button connection to add a transparent 9% of the black vertical line
          to split the left and right functions; other buttons do not Need to add a split line.</p>
        <p class="hint">Drop-down menu belongs to another independent component, the drop-down menu for details, please refer to the Dropdown
          chapter
        </p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-groupBtn.svg" alt="button group demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Other Button Groups</h4>
        <p>Sometimes for the savings of space to consider, a number of similar operations can be side by side together. The
          alignment direction may be horizontal or longitudinal.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-buttons-groupBtn-other.svg" alt="button group demo" class="img-responsive">
      </div>
    </div>
  </div>
</div>