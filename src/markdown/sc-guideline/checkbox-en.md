<div class="guideline buttons">
  <div class="container">
    <h1>Checkbox</h1>
    <h3>About</h3>
    <p>Used to make multiple selections in multiple option alternatives.</p>
    <h3>Style</h3>
    <div class="row">
      <div class="col-md-4">
        <p>From the visual effect, Checkbox has two styles of default and outline. Outline vision is weak, suitable for use
          in a large number of checkbox recurrence but simple structure of the page, or with the default form to form a relationship.
          Default and outline The difference between the two styles is limited to the selected state.</p>
        <p class="hint">Note: click on the process, the square button changes in the animation and Radio consistent, are the central content
          from smallＦ to big. Specific demo please see Radio control animation demo
          <a href="https: //goo.gl/Drdhgw">video</a>:</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-checkbox-style.svg" alt="checkbox button demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Checkbox group</h3>
    <div class="row">
      <div class="col-md-4">
        <h4>Layout</h4>
        <p>Support horizontal or vertical two layout</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-checkbox-group.svg" alt="checkbox button demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h4>Size</h4>
        <p>In the Checkbox group, the width of each Checkbox defaults is determined by the width of the content, and the 32px
          spacing between the two Checkboxes. But still support for each Checkbox to limit the width to suit different scenarios.</p>
        <p>When you limit the width, the right side of each checkbox does not retain margins.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-checkbox-size.svg" alt="checkbox button demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h4>Intermediate status</h4>
        <p>In practice, usually "full election" operation. At this point a checkbox can control all the checkbox it has commanded.
          The indeterminate attribute is applied when its content is not fully selected.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-checkbox-intermediate.svg" alt="checkbox button demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Checkbox group (box style)</h3>
    <div class="row">
      <div class="col-md-6">
        <p>More visual checkbox, the copy is included in the rectangular area, usually used to show the need to emphasize, and
          copy the length of the control options.</p>
        <p class="hint">Note: Unlike the Radio Group's Button Style, the Checkbox Group's Box Style will retain a minimum of 8px gap, rather
          than interconnected, because the Checkbox Group is not mutually exclusive and has a certain degree of independence.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-checkbox-visual.svg" alt="checkbox demo" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>General visual style</h4>
        <table class="table cs">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Box size</td>
              <td>Same with button</td>
            </tr>
            <tr>
              <td>Box style</td>
              <td>Same with default solid button</td>
            </tr>
            <tr>
              <td>Box layout</td>
              <td>Same with button; relate with size, and support compact</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>Font size, color usage same with button
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Hover</h4>
        <table class="table cs">
          <thead>
            <tr>
              <th>Status</th>
              <th>Style</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enabled</td>
              <td>/* Box */
                <br> Background: white;
                <br>Border: 1px solid #FF5722;
                <br>/* Text */
                <br>Color: @theme-color</td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td>/* Box */
                <br>Background: #FAFAFA;
                <br>Border: 1px solid #DBDBDB;
                <br>/* Text */
                <br>Color: #CCCCCC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h4>Active</h4>
        <p>The selected box has a triangular label in the lower right corner of the rectangle.</p>
        <table class="table cs">
          <thead>
            <tr>
              <th>Status</th>
              <th>Label color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enabled</td>
              <td>@theme-color</td>
            </tr>
            <tr>
              <td>Disabled</td>
              <td>#CCCCCC</td>
            </tr>
          </tbody>
        </table>
        <p class="hint">Note: The current version does not support the Boxboxes that add richer content. If you need to provide intuitive
          description text for multiple options, use the default Checkbox.</p>
      </div>
      <div class="col-md-6">
        <img src="/static/image/guideline-sc/sc-checkbox-active.svg" alt="checkbox demo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Differences between checkbox & switch</h3>
    <div class="row">
      <div class="col-md-12">
        <p>In terms of performance, Checkbox and switch are similar, is to complete a state in the "yes" and "no" between the
          switch. But in actual use, should pay attention to distinguish their use of the scene: switch switch will directly
          trigger the state change, and checkbox is often used in the state tag, and the need to submit with the operation.</p>
      </div>
    </div>
  </div>
</div>