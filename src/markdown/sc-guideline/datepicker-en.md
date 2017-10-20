<div class="guideline buttons">
  <div class="container">
    <h1>Datepicker</h1>
    <h3>About</h3>
    <div class="row">
      <div class="col-md-4">
        <p>Datepicker & Timepicker, date and time selector to provide users with a choice of date and time controls in an intuitive
          image (calendar or schedule). This chapter describes the different scenarios and results of the control.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-datepicker-01.svg" alt="datepicker memo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Usage & Combinations</h3>
    <div class="row">
      <div class="col-md-4">
        <h4>Select date or period</h4>
        <p>Support to select single or date range. At the same time, in the choice of date range, the default display of two
          calendar panels side by side to increase the convenience of choice.</p>
        <p>Also supports the formation of a more complete time + date selector with the time selector combination.</p>
        <h4>Simple datepicker</h4>
        <p>Normally the date picker is usually triggered by the standard input box and is displayed in the drop-down menu. If
          only the date selector is selected, the selection of the fixed date or the selection of the date interval means
          that the operation is completed, and the menu should automatically close and return the date data selected by the
          user.
        </p>
        <h4>Datepicker with confirmation button</h4>
        <p>In the case of special needs, if there are multiple operations in the panel, the user needs to confirm the operation,
          etc., need to add the "OK" button in the date / time selector panel to return the selected date data.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-datepicker-02.svg" alt="datepicker memo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Datepicker with shortcuts</h3>
    <div class="row">
      <div class="col-md-4">
        <p>Add a shortcut to a fixed date or time interval below the calendar panel. Click the shortcut to point to the corresponding
          data immediately.</p>
        <p>In the Auto Pickup Date Picker, the date shortcuts are selected to trigger the stowage; however, the date shortcuts
          do not trigger the stowing action in the date picker to be manually stowed.</p>
        <p class="hint">Note: This type of shortcut only provides the most frequently used default content. If not necessary to add.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-datepicker-03.svg" alt="datepicker memo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Choosing across month / year</h3>
    <div class="row">
      <div class="col-md-4">
        <p>In the calendar of the date picker, you can switch between months by clicking the upper left and right arrows. Common
          date spans in the system are usually weeks or months, so the default interface does not directly display the year
          switch arrows.</p>
        <p>To switch year or span a larger month, click the appropriate month or year to enter the month / year list.</p>
        <p class="hint">Note: The month / year switch interface is valid for a calendar month panel, which does not affect other modules,
          such as the time selector, another calendar panel. The valid return data of the date selector should be a complete
          date, such as when the user interrupts the operation during the year / month of the year, that is deemed to be
          canceled.
        </p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-datepicker-04.svg" alt="datepicker memo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Datepicker in dropdown</h3>
    <div class="row">
      <div class="col-md-4">
        <p>If the business requirements need to provide a logical and more default time (segment) for the time period, consider
          putting the custom time as an advanced feature at the end of the default time period list, and then call out the
          Datepicker.
        </p>
        <p>Note: In this scenario, since a certain amount of preset time (segment) already exists in the list, shortcuts should
          not be added to the outgoing datepicker content.</p>
      </div>
      <div class="col-md-8">
        <img src="/static/image/guideline-sc/sc-datepicker-05.svg" alt="datepicker memo" class="img-responsive">
      </div>
    </div>
    <hr>
    <h3>Specs</h3>
    <div class="row">
      <div class="col-md-12">
        <img src="/static/image/guideline-sc/sc-datepicker-06.svg" alt="datepicker memo" class="img-responsive">
      </div>
    </div>
  </div>
</div>