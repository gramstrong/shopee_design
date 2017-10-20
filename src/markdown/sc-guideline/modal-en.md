<div class="guideline buttons">
  <div class="container">
    <h1>Modal</h1>
    <h3>About</h3>
    <div class="row">
      <div class="col-md-4">
        <p>When you need the user's high attention, and do not want to jump the page so that interrupt the workflow, you can
          use Modal in the current page pop-up overlay, carrying the appropriate information or operation. This chapter describes
          the Modal Components mainly include two types:</p>
        <ul>
          <li>Modal Windows, modal pop-up, in the system as a control that contains multiple operations.</li>
          <li>Modal Dialogs, modal dialog boxes, one that informs users of certain key messages, and may require users to make
            decisions.
          </li>
        </ul>
        <p class="hint">Note: Regardless of modal or modal dialogs, the user's attention is interrupted until it is closed. Use to be cautious,
          restraint.
        </p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-modal-about.svg" alt="modal memo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Components</h3>
    <div class="row">
      <div class="col-md-12">
        <p>Modal components by default by the title area, content area, operating area composed of three modules. But the three
          regions can be combined into different modal components.</p>
        <table class="table sc">
          <thead>
            <tr>
              <th>module</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title, Content, Action</td>
              <td>If the content for a number of operations, then the Modal Window</td>
            </tr>
            <tr>
              <td>Title, Content, Action</td>
              <td>If the content is text description, then Modal Dialog, the user decision-making</td>
            </tr>
            <tr>
              <td>Title, Content</td>
              <td>If the content is a placeholder graphic, the Modal Dialog, which is often notified of the success / failure
                of the operation, usually disappears automatically and does not require user decision.</td>
            </tr>
            <tr>
              <td>Title, Action</td>
              <td>The moderable Modal Dialog informs the user to make a decision</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    <h3>Title</h3>
    <div class="row">
      <div class="col-md-4">
        <p>The top of the window is the title area. Default is a simple title that is aligned on the left side. The definition
          of the title area and margins is shown at right.</p>
        <p>Copywriting, a good pop-up design, the title content should be concise, straight to the righteousness. The copy should
          be as short as possible.</p>
        <h4>Title with subtitle</h4>
        <p>For title windows that require business operations, the title description may be required to assist in understanding.
          For such pop playings, you can use more complex titles.</p>
        <h4>Centered title</h4>
        <p>A pop window for some information cues, usually consisting of "title + illustrations + a description". The title
          text is centered.</p>
        <p>Centering Heading In addition to text alignment, the other settings are the same as the simple title.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-modal-title.svg" alt="modal memo" class="img-responsive">
      </div>
      <div class="col-md-4">
        <h4>Title with back actions</h4>
        <p>Such as multiple pop play a workflow (workflow), you need to provide the jump inside the window. The common change
          is to add a return icon to the left of the title.</p>
        <p>The effect of the return icon on the header area after adding the icon is as follows.</p>
        <p class="hint">Note: As described in the button section, the operation buttons made up of pure icons should be ideally clear and
          easy to understand. The return button here is simple, but it is still recommended to pop-over, in the mouse over
          the top of the icon when the return icon to explain the specific meaning.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-modal-title-bk.svg" alt="modal memo" class="img-responsive">
      </div>
      <hr>
      <h3>Actions</h3>
      <div class="row">
        <div class="col-md-4">
          <p>The bottom of the window is the operating area. The operation defaults to the right and the deterministic content
            is relative to the right.</p>
          <p>If the operation is in pairs but the opposite is true, the operation buttons are used as follows:</p>
          <ul>
            <li>Affirmative Actions - on the right; use Solid Buttons filled with subject colors</li>
            <li>Dissmissive Actions - placed on the left side of the confirmation operation, using the default Frameless Button</li>
          </ul>
          <h4>Centered actions</h4>
          <p>Applies to the bulletin of the information hints, using a centered layout. If there is only one operation, use
            a fixed-width button.</p>
          <p>In addition to the location of the middle of the operation, the other settings are the same as the default settings.</p>
          <h4>Toneless actions</h4>
          <p>In some cases, there is no tendency for the business to provide operations for the window. At this point you can
            use two buttons at the same level to form the operating area. Such as two Framless buttons. Other settings than
            button styles are the same as the default settings.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-actions.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h3>Content</h3>
      <div class="row">
        <div class="col-md-4">
          <p>The contents of the window can be a copy, a graphic placeholder; a form, an interface with a left navigation.</p>
          <p>The content area of the window has a uniform margin.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-content.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h4>Scroll bar</h4>
      <div class="row">
        <div class="col-md-4">
          <p>When the content is greater than the minimum height, the height is defined by content;</p>
          <p>If the maximum height is exceeded, the scroll bar is displayed.</p>
          <p class="hint">Note: The scroll bar is located at the far right of the modal window. When there is a scroll bar, the right margin
            of the content is reduced. The margin of the scroll bar is 8px, the right margin is reduced from 24px to 16px.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-scrollbar.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h3>Mask</h3>
      <div class="row">
        <div class="col-md-4">
          <p>The mask is located below the window, so that the user's vision is more focused on the content area, allowing the
            user's attention to be more focused.</p>
          <h4>Position</h4>
          <p>Modals are located in the center of the screen.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-mask.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h3>Dismiss a Modal Component</h3>
      <div class="row">
        <div class="col-md-4">
          <p>Modal controls are triggered and are closed in two ways:</p>
          <ul>
            <li>Passive Off: Click on the mask area or cancel the operation (if any) to close</li>
            <li>Auto off: The modal control is popped up after the modal control has elapsed and is automatically turned off
              after expiration</li>
          </ul>
          <h4>Click dismissive action to dismiss</h4>
          <p>If the operating area of a modal control has a cancel operation (usually the "Cancel" button), click on it to close
            the modal control.</p>
          <p>Usually the modifier dialog box of the notification class can only be closed by clicking the cancel operation.</p>
          <h4>Click mask to dismiss</h4>
          <p>Normally, the modal window can be closed by clicking on the external mask area. You can control this behavior by
            adding the "maskClosable" attribute.</p>
          <p>When the pop-up window can be closed by clicking on the external mask area, it is necessary to display the close
            icon in the upper right corner of the pop-up to suggest this interaction to the user.</p>
          <p class="hint">Note: The mouse is hovering as a clickable style when the icon is closed, and is displayed as the default when
            hovering over the mask area.</p>
          <h4>Auto-dismiss</h4>
          <p>For modest success / failure notification notifications at some level, or when the notification contains more complex
            information, use modal controls to carry notifications. At this point the modal control can be added "autoDismiss"
            attribute, so that the window can be automatically closed after the countdown.</p>
          <p class="hint">Note: Modifiable controls that can be auto-dismiss also have the maskClosable property.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-dismiss.svg" alt="modal memo" class="img-responsive">
          <img src="/static/image/guideline-sc/sc-modal-auto-dismiss.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h3>Confirmation on dismissing</h3>
      <div class="row">
        <div class="col-md-4">
          <p>The modal window contains a complex type of operation. When the operation has been implemented half of the time,
            that is, the user has modified some of the data, such as the user at this time by clicking on the mask area or
            cancel the type of operation to start closing the window, you need to perform a second confirmation. The second
            confirmation is usually a modal dialog box, which will be superimposed on the previous modal pop-up window.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-confirm.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h3>Modal windows</h3>
      <div class="row">
        <div class="col-md-4">
          <p>Modal pop-up, carrying a set of business operations control, in the background system plays an important role.</p>
          <h4>Size</h4>
          <p>Width: Modes The width of the pop-up window is divided into Small, Medium (Default), Large</p>
          <p>Height: The height of the modal control has the maximum height: 600px.</p>
          <p>The following is the definition of width and maximum / minimum height.</p>
          <table class="table sc">
            <thead>
              <tr>
                <th>Module</th>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>Small</td>
                <td>400px</td>
                <td rowspan="2">Max height: 600px</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>600px</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>800px</td>
                <td rowspan="2">Min height: 400px
                  <br/>Max Height: From the screen height minus the upper and lower spacing (all 48px) derived</td>
              </tr>
              <tr>
                <td>Ex-Large</td>
                <td>1200px</td>
              </tr>
            </thead>
          </table>
          <p class="hint">Note: Please choose the appropriate size for the different rich content. Medium-sized pop-up windows can meet most
            of the less complex business operations set, so the highest frequency; but if necessary to show a richer content
            and level (such as the left side of the navigation, the right side of the district, etc.), you should choose
            large or even Very large windows.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-size.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h3>Modal Dialogs</h3>
      <div class="row">
        <div class="col-md-4">
          <p>A modal dialog box, usually used to inform the user of the operational information, or when the user carries out
            a dangerous operation when a warning.</p>
          <h4>Size</h4>
          <p>Width: modal dialog using 500px as the maximum width.</p>
          <p>Height: Modal dialog box uses 120px as the minimum height.</p>
        </div>
        <div class="col-md-8">
          <img src="/static/image/guideline-sc/sc-modal-dialogs.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
      <hr>
      <h3>Modal components samples</h3>
      <div class="row">
        <div class="col-md-12">
          <p>The following is an example of some modal controls in the system.</p>
          <img src="/static/image/guideline-sc/sc-modal-samples.svg" alt="modal memo" class="img-responsive">
        </div>
      </div>
    </div>
  </div>
</div>