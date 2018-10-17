class ContactTitle extends React.Component {
  render() {
    return (
    <div>
      <article className="sa">
          <h3>{this.props.title}</h3>
          <p>{this.props.paragraph}</p>
      </article>
    </div>
    )
  }
}
