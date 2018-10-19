class Header extends React.Component {
  render() {
    return (
    <div>
      <div className="col-md-8 col-md-offset-2">
        <div className="align">
          <h1 className="h1 light">{this.props.title}</h1>
        </div>
      </div>
    </div>
    )
  }
}
