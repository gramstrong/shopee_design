<div class="guideline buttons">
  <div class="container">
    <h1>Text input</h1>
    <h3>About</h3>
    <p>Text input is the basic way to get the object information, users will frequently increase, modify or delete information.
      The text input can be a single line, with or without a scroll bar, or it can be multi-line, and can have an icon, the
      mouse click on the text box to display the cursor.</p>
    <div class="row">
      <div class="col-md-6">
        <h3>Simple text input</h3>
        <p>TSimple text box to provide users with a single line of text input function. The basic state of the text box is as
          follows.
        </p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-simple.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h4>Size</h4>
        <p>We define three heights (Large, Default, Small) for the input box, with heights of 40px, 32px, and 24px, respectively.
          In the data arrangement is more intensive pages suggest the use of Default single line input box, the display page
          is recommended to use Large. Consider the layout needs, also provides a high 24px small single line input box.</p>
        <p class="hint">Note: The spacing between the input boxes at different heights is also different. For easy labeling, use is (inner
          spacing) as the standard spacing inside the input box. The size of the input box corresponding to the different
          size is as follows:</p>
        <table class="table sc">
          <thead>
            <tr>
              <th>Size</th>
              <th>Height</th>
              <th>IS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Large</td>
              <td>40px</td>
              <td>12px</td>
            </tr>
            <tr>
              <td>Default</td>
              <td>32px</td>
              <td>12px</td>
            </tr>
            <tr>
              <td>Small</td>
              <td>24px</td>
              <td>12px</td>
            </tr>
          </tbody>
        </table>
        <h4>Width</h4>
        <p>Unless otherwise specified, the default width of the text box is full-width.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-size.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Use and combination</h3>
    <div class="row">
      <div class="col-md-6">
        <h4>Prefix and suffix</h4>
        <p>The prefix or suffix can be added in the input box to supplement the description. Before, the suffix can be text,
          it can be SVG icon.</p>
        <ul>
          <li>Before the text class, the suffix uses the same size as the content.</li>
          <li>Before the icon class, the suffix uses 1.5 IS as its width and height.</li>
        </ul>
        <p>Fill color of both are G60(#BBBBBB)</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-prefix.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Help text</h4>
        <p>In order to improve the efficiency of data entry, to help users enter text information faster, usually in the input
          box to increase the dark tips to help remind the user, or you can increase the help icon prompts the user access.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-help.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>With dropdown menu</h4>
        <p>The single-line input box can be used in combination with other components such as drop-down boxes. Single-line input
          box and drop-down menu can be used to contact the phone, office and other information needs to be selected in the
          list of the situation. The combination can be either polymerized or separable.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-dropdown.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Error message</h4>
        <p>The type of error is used to prompt the user to enter content that does not match expectations. In the lower left
          with the appropriate copy of the user suggested that the reasons for the error.</p>
        <p class="hint">Note: When an error occurs, the page layout may be displaced. At this point as long as the principle of transition
          to the natural, is a normal acceptable phenomenon.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-error.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Count text</h4>
        <p>When you need a single line of input content for the word limit, you can join the text counting module for the number
          of words to monitor and feedback.</p>
        <p>By default, the text count is placed in the right area below the input box. When the limit number of words is reached,
          the program should prevent the user from entering more text.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-count.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Multi-line input (text area)</h3>
    <div class="row">
      <div class="col-md-6">
        <p>Multi-line input, or text area, used to store and display large text content.</p>
        <h4>Height</h4>
        <p>Multiple lines are required to specify the minimum and maximum number of rows to limit their height. By default,
          the minimum height of the text box is the height of the 3-line semantics.</p>
        <p>The two slashes in the lower right corner of the text box indicate that the user can freely set the height of the
          text box. This operating area can be hidden. However, it should be noted here that even if the user can adjust
          the size of the text box, the size should be limited by the maximum and minimum number of rows. Developers should
          impose an effective height limit on the size of the text box. In business design, designers also need to limit
          the extreme situation.</p>
        <h4>Width</h4>
        <p>Unless otherwise specified, the default width of the text box is full-width. The developer can adjust the width by
          specifying the width of the parent of the text box.</p>
        <h4>Style</h4>
        <p>The multi-line input box inherits the style and inner margins of the one-line input box.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-text-input-multi.svg" alt="text input demo" class="img-responsive">
      </div>
    </div>
  </div>
</div>