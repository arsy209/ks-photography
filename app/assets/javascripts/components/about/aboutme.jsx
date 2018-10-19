class AboutMe extends React.Component {
  render() {
    return (
    <div>
      <div class="sa">
        <h3>{this.props.title}</h3>
        <p>{this.props.paragraph1}</p>
        <p>{this.props.paragraph2}</p>
      </div>
    </div>
    )
  }
}
