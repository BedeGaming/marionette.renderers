import Snabbdom from 'snabbdom-pragma'

export default function(state){
  return (<div id="contact-view">
    <h3>Contact View</h3>
    <div className="contact-view">
      <div className="info">

        {state.email && <img src={state.gravatar}/>}

        <h1>{ state.fullName }</h1>
        <p innerHTML={state.short_bio}></p>
        <div className="stars">
          <select id="contact-rating" name="rating" autocomplete="off">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span className="title">Rating - with jQuery plugin</span>
        </div>
      </div>
      <ul className="links">
        {state.github && <li>
          <a href={state.github}>
            <i className="fa fa-github"></i>
          </a>
        </li>}
        {state.twitter && <li>
          <a href={state.twitter}><i className="fa fa-twitter"></i></a>
        </li>}
        {state.website && <li>
          <a href={state.website}><i className="fa fa-link"></i></a>
        </li>}
      </ul>
    </div>
    <h4>Repositories</h4>
    <div className="repositories-view">

    </div>
  </div>)
}

