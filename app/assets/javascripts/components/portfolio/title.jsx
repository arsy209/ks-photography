class PortfolioTitle extends React.Component {
  render() {
    return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center">
          <article className="sa">
            <h1>{this.props.title}</h1>
            <p>{this.props.paragraph}</p>
          </article>
          </div>
      </div>
    </div>
    )
  }
}
