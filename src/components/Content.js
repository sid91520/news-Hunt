import React, { Component } from 'react'

export class Content extends Component {
  render() {
    let {image,title,description,newsurl}=this.props
    return (
      <div>
        <div className="container">
        <div className="card" style={{width: "18rem",height:"40%"}}>
  <img src={!image?"https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg":image} className="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">read more</a>
  </div>
</div>
        </div>
    </div>
    )
  }
}
export default Content
