class ContactInfo extends React.Component {
  render() {
    return (
    <div>
          <div className="sa col-xs-b10">
              <b>{this.props.phonenumber}</b>
          </div>
          <div className="sa col-xs-b10">
              <b>{this.props.address}</b>
          </div>
          <div className="sa col-xs-b10">
              <b>{this.props.email}</b>
          </div>

    </div>
    )
  }
}
