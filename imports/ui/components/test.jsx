<form className="orderForm" onSubmit={this.add.bind(this) }>
  <input
    type="text"
    ref="productType"
    placeholder="input give"/>
  <select
    ref="selection"
    className="ui dropdown loginField">
                          <option value="">Select Traffic Jam Level</option>
                          <option value="TJ-1">TJ-1</option>
                          <option value="TJ-2">TJ-2</option>
                          <option value="TJ-3">TJ-3</option>
                          <option value="TJ-4">TJ-4</option>
                          <option value="TJ-5">TJ-5</option>
                          <option value="TJ-6">TJ-6</option>
                          <option value="TJ-7">TJ-7</option>
                          <option value="TJ-8">TJ-8</option>
                          <option value="TJ-9">TJ-9</option>
                          <option value="TJ-10">TJ-10</option>
                        </select>

      <button className="button">Submit</button>

</form>
